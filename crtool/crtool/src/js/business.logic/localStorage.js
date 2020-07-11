const localStorage = {

    setItem(uuid, key, value) {
        xhttp.open("POST", "demo_post.asp", true);
        xhttp.send();
    },

    getItem(uuid, key) {
        xhttp.open("GET", "demo_post.asp", true);
        xhttp.send();
    },

    removeItem(uuid, key) {

    },

    clear(uuid) {

    }

};

export default localStorage;