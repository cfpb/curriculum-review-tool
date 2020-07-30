import C from "./js/business.logic/constants";

const crtoolSession = {
    review: {},
    autoSave: false,
    initialized: false,
    dirty: false,
    time: '',
    idleTime: 60e3,
    checkFrequency: 20e3,

    init(autoSave=false) {
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
        this.autoSave = Boolean(autoSave);

        if (this.autoSave) {
            console.log('crtoolSession line 32: initAutoSaveReview');
            this.initAutoSaveReview();
        }

        this.initialized = true;
        this.review = review;
    },

    getReview(autoSave=false) {
        if (!this.initialized) {
            this.init(autoSave);
        }
        return this.review;
    },

    setReviewFromUserInput(review) {
        this.review = review;
        this.dirty = true;
        localStorage.setItem('crtool.' + review.id, JSON.stringify(this.review));
    },

    /*
     * load review state from Database
     */
    loadReview(review_id) {
        console.log('loadReview: line 52');
        let review = this.loadReviewFromLocalStorage(review_id);
        let dirty = false;
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "../get-review?tdp-crt_id=" + review_id, false);
        xhttp.send();
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            const db_review = JSON.parse(xhttp.responseText);
            console.log('db_review: line 59');
            console.log(db_review);
            console.log('review: line 61');
            console.log(review);
            const is_review_valid = (review.hasOwnProperty('last_updated')) && (review.hasOwnProperty('id'));
            const is_db_review_valid = ("last_updated" in db_review) && ("id" in db_review);
            if (is_review_valid && is_db_review_valid && JSON.stringify(db_review) !== JSON.stringify(review) ) {
                console.log('db_review.last_updated: line 66');
                console.log(db_review.last_updated);
                console.log(new Date(db_review.last_updated));
                console.log('review.last_updated: line 68');
                console.log(review.last_updated);
                console.log(new Date(review.last_updated));
                dirty = true;
            }
            if (!is_review_valid ||
                (
                    is_review_valid &&
                    is_db_review_valid &&
                    new Date(db_review.last_updated) > new Date(review.last_updated)// TODO: Make sure Date() is necessary.
                )
            ) {
                console.log('crtoolLocalStorage.js: line 78');
                review = db_review;
                localStorage.setItem('crtool.' + db_review.id, JSON.stringify(db_review));
                localStorage.setItem('curriculumReviewId', db_review.id);
                dirty = false;
            }
        }
        this.review = review;
        this.dirty = dirty;
        console.log('Dirty flag:');
        console.log(dirty);
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
        if (review.id) {
            localStorage.setItem('curriculumReviewId', review_id);
            console.log('review: line 40');
            console.log(review);
        }
        else {
            review = {};
        }

        return review;
    },

    /*
     * Overwrite Database review state with state in LocalStorage
     */
    updateDatabaseReview(review) {
        console.log('updateDatabaseReview: line 91');
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "../update-review/");
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        console.log('review: line 95');
        console.log(review);
        xhttp.send(JSON.stringify(review));

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                review = JSON.parse(xhttp.responseText);
                console.log('review: line 135')
                console.log(review);
                if (review.hasOwnProperty('id')) {
                    console.log('update localStorage: line 138');
                    this.review = review;
                    this.dirty = false;
                    localStorage.setItem('crtool.' + review.id, JSON.stringify(this.review));
                }
            }
        };
        return this.review;
    },

    initAutoSaveReview() {
        console.log('initAutoSaveRevie line 167');
        console.log(this);
        this.time = new Date().getTime();
        window.addEventListener("click", this.resetTime.bind(this), false);
        window.addEventListener("mousemove", this.resetTime.bind(this), false);
        window.addEventListener("keypress", this.resetTime.bind(this), false);
        window.addEventListener("scroll", this.resetTime.bind(this), false);
        document.addEventListener("touchMove", this.resetTime.bind(this), false);
        document.addEventListener("touchEnd", this.resetTime.bind(this), false);
        console.log('call autoSaveReview in 1000 ms');
        setTimeout(this.autoSaveReview.bind(this), this.checkFrequency);
    },

    resetTime() {
        console.log('resetTime line 167');
        console.log(this);
        this.time = new Date().getTime();
        console.log('line 157: resetTime from: ' + this.time);
    },

    autoSaveReview() {
        console.log('autoSaveReview line 162');
        console.log(this);
        console.log(this.dirty);
        console.log(this.time);
        if((new Date().getTime() - this.time >= this.idleTime) && this.dirty) {
            console.log('auto saving to database now');
            this.updateDatabaseReview(this.review);
        }
        console.log('recursively call autoSaveReview in 1000 ms');
        setTimeout(this.autoSaveReview.bind(this), this.checkFrequency);
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
