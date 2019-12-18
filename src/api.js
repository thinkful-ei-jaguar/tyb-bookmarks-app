const baseURL = 'https://thinkful-list-api.herokuapp.com/stronghearth/bookmarks';

const bookmarkApiFetch = function (...args) {
    let error;
    return fetch(...args)
        .then(res => {
            if(!res.ok) {
                error = { code: res.status };
            
            }
            if (!res.headers.get('content-type').includes('json')) {
                error.message = res.statusText;
                return Promise.reject(error);
            }
            return res.json();
        })
        .then(data => {
            if (error) {
                error.message = data.message;
                return Promise.reject(error);
            }
            return data;
        });
};

const retrieveBookmarks = function () {
    return bookmarkApiFetch(baseURL);            
};

const addBookmark = function (bookmark) {
    const newBookmark = JSON.stringify(bookmark);
    return bookmarkApiFetch(baseURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newBookmark
    });
};

const deleteBookmark = function (id) {
    return bookmarkApiFetch(baseURL + '/' + id, {
        method: 'DELETE'
    });

};

export default {
    retrieveBookmarks,
    addBookmark,
    deleteBookmark
}