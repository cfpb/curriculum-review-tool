const crtoolLocalStorage = {

    getCurrentReview() {
        let review = false;
        let review_id = this.getUrlParameter('token') || localStorage.getItem('curriculumReviewId') || '';
        console.log('got here: localStorage');
        console.log(review_id);
//        if (!review_id) {
//            review = this.getReviewFromLocalStorage();
//            review_id = "id" in review ? review.id : null;
//            console.log(review_id);
//        }
//        else {
//            review = this.getReviewFromLocalStorage(review_id);
//        }
//        console.log(review)
        review = this.loadReviewFromDatabase(review_id);
        console.log(review);
        return review;
    },

    /*
     * load review state from LocalStorage
     */
    getReviewFromLocalStorage(review_id = null) {
        let review = {};
        if (!review_id) {
            review_id = localStorage.getItem('curriculumReviewId') || "";
        }
        if (review_id) {
            review = localStorage.getItem('crtool.' + review_id) || "{}";

            console.log(JSON.stringify(review, null, 4));
            if (review) {
                localStorage.setItem('curriculumReviewId', review_id)
                review = JSON.parse(review);
            }
        }
        return review;
    },

    /*
     * load review state from Database
     */
    loadReviewFromDatabase(review_id) {
        const xhttp = new XMLHttpRequest();
        const self = this;
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const db_review = JSON.parse(this.responseText);
                console.log(db_review);
                const review = self.getReviewFromLocalStorage();
                const is_review_valid = ("last_updated" in review) && ("id" in review)
                const is_db_review_valid = ("last_updated" in db_review) && ("id" in db_review)
                if (!is_review_valid ||
                    (
                        is_review_valid &&
                        is_db_review_valid &&
                        db_review.last_updated > review.last_updated
                    )
                ) {
                    localStorage.setItem('crtool.' + db_review.id, JSON.stringify(db_review));
                    localStorage.setItem('CurriculumReviewId', db_review.id)
                }
            }
        };
        xhttp.open("GET", "../get-review?tdp-crt_id=" + review_id, false);
        xhttp.send();
        return JSON.parse(localStorage.getItem('crtool.' + review_id) || "{}");
    },

    /*
     * Overwrite Database review state with state in LocalStorage
     */
    updateDatabaseReview(review) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const review = JSON.parse(this.responseText);
                console.log(review);
                if ("id" in review) {
                    localStorage.setItem('crtool.' + review.id, JSON.stringify(review));
                    return review;
                }
            }
        };
        xhttp.open("POST", "../update-review/", false);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(review));
        return JSON.parse(localStorage.getItem('crtool.' + review.id));
    },

    setItem(key, value) {
        const review = this.getCurrentReview();
        if (review) {
            review[key] = value;
        }
        return this.updateDatabaseReview(review);
    },

    getItem(key) {
        const review = this.getCurrentReview();
        if (key in review) {
            return review[key];
        }
        return null;
    },

    removeItem(key) {
        const review = this.getCurrentReview();
        if (key in review) {
            delete review[key];
        }
    },

    clear() {
        const review = this.getCurrentReview();
        if (review) {
            localStorage.removeItem('curriculumReviewId');
        }
    },

    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    },

};

export default crtoolLocalStorage;