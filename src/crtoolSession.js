import C from "./js/business.logic/constants";

const crtoolSession = {
    review: {},
    initialized: false,

    init() {
        console.log('GETTING CURRENT REVIEW');
        // Check for review_id as url token or check localStorage.
        const token = this.getUrlParameter('token');
        let review_id = token || localStorage.getItem('curriculumReviewId') || '';
        console.log('getCurrentReview: line 20');
        console.log(review_id);
        // If review_id found but a token is not set, redirect to the current URL with the token.
        if (!token && review_id) {
            console.log('redirect to URL with token: line 10');
            const new_url = this.updateUrlParameter(window.location.href, 'token', review_id);
            window.history.pushState({path:new_url}, '', new_url);
        }
        // Load the latest review.
        const review = this.loadReview(review_id);
        console.log(review);
        // If no review was found, return to the start page.
        if (JSON.stringify(review) === '{}') {
            window.location.href = C.START_PAGE_RELATIVE_URL;
        }
        this.initialized = true;
        this.review = review;
    },

    getReview() {
        if (!this.initialized) {
            this.init();
        }
        return this.review;
    },

    setReview(review) {
        this.review = review;
    },

    /*
     * load review state from Database
     */
    loadReview(review_id) {
        console.log('loadReview: line 52');
        let review = this.loadReviewFromLocalStorage(review_id);
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "../get-review?tdp-crt_id=" + review_id, false);
        xhttp.send();
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            const db_review = JSON.parse(xhttp.responseText);
            console.log('db_review: line 59');
            console.log(db_review);
            console.log('review: line 61');
            console.log(review);
            const is_review_valid = ("last_updated" in review) && ("id" in review)
            const is_db_review_valid = ("last_updated" in db_review) && ("id" in db_review)
            if (is_review_valid && is_db_review_valid) {
                console.log('db_review.last_updated: line 66');
                console.log(db_review.last_updated);
                console.log(new Date(db_review.last_updated));
                console.log('review.last_updated: line 68');
                console.log(review.last_updated);
                console.log(new Date(review.last_updated));
            }
            if (!is_review_valid ||
                (
                    is_review_valid &&
                    is_db_review_valid &&
                    new Date(db_review.last_updated) > new Date(review.last_updated)
                )
            ) {
                console.log('crtoolLocalStorage.js: line 78');
                review = db_review;
                localStorage.setItem('crtool.' + db_review.id, JSON.stringify(db_review));
                localStorage.setItem('curriculumReviewId', db_review.id)
            }
        }
        this.review = review;
        return this.review;
    },

     /*
     * load review state from LocalStorage
     */
    loadReviewFromLocalStorage(review_id) {
        let review = {};
        console.log('loadReviewFromLocalStorage review: line 27');

        review = localStorage.getItem('crtool.' + review_id) || "{}";
        console.log('review: line 35');
        review = JSON.parse(review);
        if (JSON.stringify(review) !== '{}' && "id" in review) {
            localStorage.setItem('curriculumReviewId', review_id);
            console.log('review: line 40');
            console.log(review);
        }

        return review;
    },

    /*
     * Overwrite Database review state with state in LocalStorage
     */
    updateDatabaseReview(review) {
        console.log('updateDatabaseReview: line 91');
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "../update-review/", false);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        console.log('review: line 95');
        console.log(review);
        xhttp.send(JSON.stringify(review));
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            review = JSON.parse(xhttp.responseText);
            console.log('review: line 100')
            console.log(review);
            if ("id" in review) {
                console.log('update localStorage: line 103');
                this.review = review;
                localStorage.setItem('crtool.' + review.id, JSON.stringify(this.review));
            }
        }
        return this.review;
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
};

export default crtoolSession;
