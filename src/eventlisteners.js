import $ from 'jquery';
import {generateStarRating,
    generateBookmarkItem,
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
        console.log(id);
        store.expandItem(id);
        bookmarksmaker.render(); 
    })
    
}

const handleDelete = function  () {

}

const handleError = function  () {

}

const combineEventListeners = function () {
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