import C from "./js/business.logic/constants";

const CHECK_FREQUENCY = 10e3;

/**
 * A proxy for the localStorage API which periodically saves to the DB and
 * can synchronize itself when the page loads.
 */
const ls = {
    // Use DOM LocalStorage, but allow swapping
    localStorage: localStorage,

    review: {},
    lastTimeSaved: '',
    timeoutHandle: 0,
    testing: false,

    redirectHome() {
        if (ls.testing) {
            return;
        }

        window.location.href = C.START_PAGE_RELATIVE_URL;
    },

    /**
     * Set up for testing, injecting mock localStorage
     *
     * @param {WindowLocalStorage} localStorage
     */
    initForTesting(localStorage) {
        ls.localStorage = localStorage;
        ls.testing = true;
        ls.review = {
            id: 'testing',
        };
    },

    async init() {
        const token = ls.getUrlParameter('token');
        let review_id = token || ls.localStorage.getItem('curriculumReviewId') || '';
        if (!review_id) {
            return ls.redirectHome();
        }

        // If review_id found but a token is not set, update the URL
        if (!token && review_id) {
            const new_url = ls.updateUrlParameter(window.location.href, 'token', review_id);
            window.history.pushState({ path: new_url }, '', new_url);
        }

        const ls_review = ls.loadReviewFromLocalStorage(review_id);

        let db_review;
        try {
            db_review = await ls.fetchReviewFromServer(review_id);
            if (!db_review) {
                // Do not allow end users to set their own ID via the URL or localStorage.
                ls.localStorage.removeItem('crtool.' + review_id);
                ls.localStorage.removeItem('curriculumReviewId');
                ls.redirectHome();
                return;
            }
            if (!db_review.ls_modified_time) {
                // A fresh review. Let's set a local time on it
                db_review.ls_modified_time = (new Date()).toISOString();
            }
        } catch (e) {
            console.error(e);
            // Request failed, just try to carry on with local storage
        }

        if (!ls_review && !db_review) {
            ls.redirectHome();
            return;
        }

        if (ls_review && ls_review.ls_modified_time > db_review.ls_modified_time) {
            // Trust that newer local time means more up-to-date data
            ls.review = ls_review;
            ls.localStorage.setItem('curriculumReviewId', review_id);
            ls.timeoutHandle = setTimeout(ls.saveIfDirty, 0);
        } else {
            ls.review = db_review;
            // Just bring local storage up to speed
            ls.localStorage.setItem('crtool.' + db_review.id, JSON.stringify(db_review));
            ls.localStorage.setItem('curriculumReviewId', db_review.id);
            // Don't need to sync immediately after load
            ls.lastTimeSaved = ls.review.ls_modified_time;
            ls.timeoutHandle = setTimeout(ls.saveIfDirty, CHECK_FREQUENCY);
        }
    },

    isReady() {
        return Boolean(ls.review.id);
    },

    saveReviewToLocalStorage() {
        ls.review.ls_modified_time = (new Date()).toISOString();
        ls.localStorage.setItem('crtool.' + ls.review.id, JSON.stringify(ls.review));
    },

    isValidReview(review) {
        if (typeof review !== 'object' || review === null) {
            return false;
        }

        for (const prop of ['id', 'last_updated']) {
            if (!review.hasOwnProperty(prop)) {
                return false;
            }
        }

        return true;
    },

    /**
     * Returns a Promise with a valid review or undefined.
     *
     * Rejects if request fails. Invalid response resolves to undefined.
     */
    async fetchReviewFromServer(review_id) {
        if (ls.testing) {
            return;
        }

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "../get-review?tdp-crt_id=" + review_id, true);
        xhttp.timeout = 5e3;

        return new Promise((resolve, reject) => {
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState !== 4) {
                    return;
                }

                if (xhttp.status !== 200) {
                    console.error('Review fetch failed.');
                    reject();
                }

                try {
                    const review = JSON.parse(xhttp.responseText);
                    resolve(ls.isValidReview(review) ? review : undefined);
                } catch (e) {
                    console.error(e);
                    reject();
                }
            };

            xhttp.send();
        });
    },

    /*
    * Returns a valid review from LocalStorage or undefined
    */
    loadReviewFromLocalStorage(review_id) {
        let review = ls.localStorage.getItem('crtool.' + review_id) || "{}";
        try {
            review = JSON.parse(review);
            if (!ls.isValidReview(review)) {
                throw new Error('invalid review');
            }

            return review;
        } catch (e) {
            console.error(e);
        }
    },

    /*
     * Overwrite Database review state with state in LocalStorage
     *
     * Rejects anytime a valid response was not received
     */
    async saveReviewToServer() {
        if (ls.testing) {
            ls.localStorage.setItem('crtool.' + ls.review.id, JSON.stringify(ls.review));
            return;
        }

        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "../update-review/", true);
        xhttp.timeout = 5e3;
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        return new Promise((resolve, reject) => {
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState !== 4) {
                    return;
                }

                if (xhttp.status !== 200) {
                    console.error('DB save failed.');
                    reject();
                    return;
                }

                const review = JSON.parse(xhttp.responseText);
                if (ls.isValidReview(review)) {
                    console.info('Received response', ls);

                    if (ls.review.ls_modified_time > ls.lastTimeSaved) {
                        console.info('Scheduling re-save...');
                        // Leave dirty and don't overwrite local storage
                    } else {
                        ls.review = review;
                        ls.localStorage.setItem('crtool.' + review.id, JSON.stringify(ls.review));
                    }

                    resolve();
                    return;
                }

                console.error('Invalid server response');
                reject();
            };

            ls.lastTimeSaved = ls.review.ls_modified_time;
            console.info(`Saving version ${ls.lastTimeSaved}`);
            xhttp.send(JSON.stringify(ls.review));
        });
    },

    saveIfDirty() {
        // If called from an imperative action, we don't want to clear the existing schedule
        if (ls.timeoutHandle) {
            clearTimeout(ls.timeoutHandle);
        }

        if (ls.review.ls_modified_time > ls.lastTimeSaved) {
            ls.saveReviewToServer();
        }

        ls.timeoutHandle = setTimeout(ls.saveIfDirty, CHECK_FREQUENCY);
    },

    // IE compatible method for getting a querystring parameter from a URL
    // Credit: https://stackoverflow.com/a/901144
    getUrlParameter(name) {
        name = name.replace(/\[/, '\\[').replace(/\]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    },

    // Add / Update a key-value pair in the URL query parameters
    // Credit: https://gist.github.com/niyazpk/f8ac616f181f6042d1e0
    updateUrlParameter(uri, key, value) {
        // remove the hash part before operating on the uri
        const i = uri.indexOf('#');
        const hash = i === -1 ? ''  : uri.substr(i);
        uri = i === -1 ? uri : uri.substr(0, i);

        const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        const separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            uri = uri.replace(re, '$1' + key + "=" + value + '$2');
        } else {
            uri = uri + separator + key + "=" + value;
        }
        return uri + hash;  // finally append the hash as well
    },

    setItem(key, value) {
        if (!ls.isReady()) {
            throw new Error('Use before init');
        }

        // Only setItem value if it's different than what's already there.
        if (ls.review[key] !== value) {
            ls.review[key] = value;
            ls.saveReviewToLocalStorage();
        }
    },

    getItem(key) {
        if (!ls.isReady()) {
            throw new Error('Use before init');
        }

        if (ls.review.hasOwnProperty(key)) {
            return ls.review[key];
        } else {
            return null;
        }
    },

    removeItem(key) {
        if (!ls.isReady()) {
            throw new Error('Use before init');
        }

        if (ls.review.hasOwnProperty(key)) {
            delete ls.review[key];
            ls.saveReviewToLocalStorage();
        }
    },

    clear() {
        if (!ls.isReady()) {
            throw new Error('Use before init');
        }

        ls.localStorage.removeItem('curriculumReviewId');
    },
};

const crtoolLocalStorage = ls;

export default crtoolLocalStorage;
