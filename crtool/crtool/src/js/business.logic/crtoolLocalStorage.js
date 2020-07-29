import C from "./constants";
import crtoolSession from "../../crtoolSession";

const crtoolLocalStorage = {
    review: crtoolSession.getReview(true),

    setItem(key, value) {
        console.log('crtoolLocalStorage setItem: line 111');
        console.log(key + ': ' + value);
        if ("id" in this.review) {
            console.log('setItem review: line 115');
            this.review[key] = value;
            crtoolSession.setReview(this.review);
            // this.saveToDatabase(); // TODO: Move this to a dedicated action so it's not run on every save.
            return this.review;
        }
        return false;
    },

    getItem(key) {
        console.log('crtoolLocalStorage getItem: line 123');
        console.log(key);
        console.log(this.review);
        if (key in this.review) {
            console.log('getItem: line 127');
            return this.review[key];
        }
        return null;
    },

    removeItem(key) {
        if (key in this.review) {
            delete this.review[key];
            crtoolSession.setReview(this.review);
            return true;
        }
        return false;
    },

    clear() {
        if ("id" in this.review) {
            localStorage.removeItem('curriculumReviewId');
        }
    },

    saveToDatabase() {
        if ("id" in this.review) {
            this.review = crtoolSession.updateDatabaseReview(this.review);
        }
    }
};

export default crtoolLocalStorage;