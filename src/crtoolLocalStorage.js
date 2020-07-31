import C from "./js/business.logic/constants";

const CHECK_FREQUENCY = 60e3;

function redirectHome() {
    window.location.href = C.START_PAGE_RELATIVE_URL;
}

/**
 * A proxy for the localStorage API which periodically saves to the DB and
 * can synchronize itself when the page loads.
 */
const ls = {
    review: {},
    dirty: false,

    async init() {
        const token = ls.getUrlParameter('token');
        let review_id = token || localStorage.getItem('curriculumReviewId') || '';
        if (!review_id) {
            return redirectHome();
        }

        // If review_id found but a token is not set, update the URL
        if (!token && review_id) {
            const new_url = ls.updateUrlParameter(window.location.href, 'token', review_id);
            window.history.pushState({ path: new_url }, '', new_url);
        }

        let db_review;
        try {
            db_review = await ls.fetchReviewFromServer(review_id);
        } catch (e) {
            console.error(e);
            // Do not allow end users to set their own ID via the URL or localStorage.
            localStorage.removeItem('crtool.' + review_id);
            localStorage.removeItem('curriculumReviewId');
            redirectHome();
            return;
        }

        const ls_review = ls.loadReviewFromLocalStorage(review_id);

        if (ls_review && ls_review.ls_modified_time > db_review.ls_modified_time) {
            // Trust that newer local time means more up-to-date data
            ls.review = ls_review;
            ls.dirty = true;
            localStorage.setItem('curriculumReviewId', review_id)
        } else {
            ls.review = db_review;
            ls.dirty = false;
            // Just bring local storage up to speed
            localStorage.setItem('crtool.' + db_review.id, JSON.stringify(db_review));
            localStorage.setItem('curriculumReviewId', db_review.id);
        }

        setTimeout(ls.saveIfDirty, ls.dirty ? 0 : CHECK_FREQUENCY);
    },

    isReady() {
        return Boolean(ls.review.id);
    },

    saveReviewToLocalStorage() {
        ls.dirty = true;
        ls.review.ls_modified_time = (new Date()).toUTCString();
        localStorage.setItem('crtool.' + ls.review.id, JSON.stringify(ls.review));
    },

    isValidReview(review) {
        if (typeof review !== 'object' || review === null) {
            return false;
        }

        for (const prop of ['id', 'last_updated', 'ls_modified_time']) {
            if (!review.hasOwnProperty(prop)) {
                return false;
            }
        }

        return true;
    },

    /**
     * Returns a Promise with a valid review, or rejects.
     */
    async fetchReviewFromServer(review_id) {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "../get-review?tdp-crt_id=" + review_id, true);

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
                    if (!ls.isValidReview(review)) {
                        throw new Error('Fetched review invalid');
                    }

                    resolve(review);
                } catch (e) {
                    console.error(e);
                    reject();
                    return;
                }
            };

            xhttp.send();
        });
    },

    /*
    * Returns a valid review from LocalStorage or undefined
    */
    loadReviewFromLocalStorage(review_id) {
        let review = localStorage.getItem('crtool.' + review_id) || "{}";
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
     */
    async saveReviewToServer() {
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "../update-review/", true);
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
                    ls.review = review;
                    ls.dirty = false;
                    localStorage.setItem('crtool.' + review.id, JSON.stringify(ls.review));
                    resolve();
                    return;
                }

                console.error('Invalid server response');
                reject();
            };
            xhttp.send(JSON.stringify(ls.review));
        });
    },

    saveIfDirty() {
        if (ls.dirty) {
            console.log('auto saving to database now');
            ls.saveReviewToServer();
        }

        setTimeout(ls.saveIfDirty, CHECK_FREQUENCY);
    },

    // IE compatible method for getting a querystring parameter from a URL
    // Credit: https://stackoverflow.com/a/901144
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
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

        // console.log('crtoolLocalStorage setItem: line 111');
        // console.log(key + ': ' + value);
        // Only setItem value if it's different than what's already there.
        if (!key in ls.review || ls.review[key] !== value) {
            // console.log('setItem review: line 115');
            ls.review[key] = value;
            ls.saveReviewToLocalStorage();
        }
    },

    getItem(key) {
        if (!ls.isReady()) {
            throw new Error('Use before init');
        }

        if (ls.review.hasOwnProperty(key)) {
            // console.log('getItem: HIT');
            return ls.review[key];
        } else {
            // console.log('getItem: MISS');
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

        localStorage.removeItem('curriculumReviewId');
    },
};

const crtoolLocalStorage = ls;

export default crtoolLocalStorage;
