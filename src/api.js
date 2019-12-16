const baseURL = 'https://thinkful-list-api.herokuapp.com/stronghearth/bookmarks';

const retrieveBookmarks = function () {
    return fetch(baseURL);
            
}

const addBookmark = function (bookmark) {
    const newBookmark = JSON.stringify(bookmark);
    console.log(newBookmark);
    return fetch(baseURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newBookmark
    });
}

const deleteBookmark = function () {

}

export default {
    retrieveBookmarks,
    addBookmark,
    deleteBookmark
}