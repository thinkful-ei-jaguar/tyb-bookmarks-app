import $ from 'jquery';
import {generateStarRating,
    generateBookmarkItem,
    generateExpandedItem,
    generateBookmarkString,
    generateAddForm,} from './bookmarksmaker';
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
    $('ul').on('click', '.js-individual-bookmark', event => {
        const id = getIdFromElement(event.currentTarget);
        const item = store.findById(id);
        store.findAndExpand(id, {expanded: !item.expanded});
        bookmarksmaker.render();
    })
    
}

const handleDelete = function  () {

}

const handleError = function  () {

}

const combineEventListeners = function () {
    getIdFromElement(),
    handleBookmarkExpand(),
    handleAddBookmark(),
    handleSumbitNewBookmark(),
    filterByRank(),
    handleDelete(),
    handleError()
}

export default {
    combineEventListeners,
}