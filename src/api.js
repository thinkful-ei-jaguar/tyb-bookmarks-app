const baseURL = 'https://thinkful-list-api.herokuapp.com/stronghearth/bookmarks';

const retrieveBookmarks = function () {
    return fetch(baseURL)            
};

const addBookmark = function (bookmark) {
    const newBookmark = JSON.stringify(bookmark);
    return fetch(baseURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newBookmark
    });
};

const deleteBookmark = function (id) {
    return fetch(baseURL + id, {
        method: 'DELETE'
    });

};

export default {
    retrieveBookmarks,
    addBookmark,
    deleteBookmark
}