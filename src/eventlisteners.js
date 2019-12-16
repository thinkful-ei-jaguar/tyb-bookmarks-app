import $ from 'jquery';
import {generateStarRating,
    generateBookmarkItem,
    generateExpandedItem,
    generateBookmarkString,
    generateAddForm,} from './bookmarksmaker';
import api from './api';
import bookmarksmaker from './bookmarksmaker';
import store from './store';

const getIdFromElement = function (item) {
    return $(item).closest('.js-individual-bookmark').attr('id');
}

const handleAddBookmark = function  () {

}

const handleSumbitNewBookmark = function  () {

}

const filterByRank = function  () {
  
}

const handleBookmarkExpand = function  () {
    $('ul').on('click', '.js-arrow-button', event => {
        const id = getIdFromElement(event.currentTarget);
        const item = store.findById(id);
        store.findAndExpand(id, {expanded: !item.expanded});
        bookmarksmaker.render();
    })
    
}

const handleDelete = function  () {
    $('ul').on('click', '.js-delete-button', event => {
        const desiredId = getIdFromElement(event.currentTarget);
        api.deleteBookmark(desiredId)
            .then(res => res.json())
            .then(() => {
                store.deleteLiItem(desiredId);
                bookmarksmaker.render();
            });
        
    });

};

const handleError = function  () {

}

const combineEventListeners = function () {
    getIdFromElement(),
    handleBookmarkExpand(),
   //handleBookmarkClose(),
    handleAddBookmark(),
    handleSumbitNewBookmark(),
    filterByRank(),
    handleDelete(),
    handleError()
}

export default {
    combineEventListeners,
}