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

const handleAddBookmarkOpen = function  () {
    $('.js-add-and-filter').on('click', '.js-add-button', event => {
        event.preventDefault();
        store.toggleAddMenu();
        bookmarksmaker.render();
    })

}

const handleSumbitNewBookmark = function () {
    $('.js-add-and-filter').on('click', '.js-add-confirm', event => {
        event.preventDefault();
        const newBookmarkObj = {
            title: $('#bookmarktitle').val(),
            url: $('#url').val(),
            desc: $('#bookmarkdescription').val(),
            rating: $('#rating').val()
        };
        api.addBookmark(newBookmarkObj)
            .then(res => res.json())
            .then(responseJson => {
                responseJson.expanded = false;
                store.addItem(responseJson);
                bookmarksmaker.render();});
        store.toggleAddMenu();
        bookmarksmaker.render();
        });
}

const handleCancelAdd = function () {
    $('.js-add-and-filter').on('click', '.js-dont-add', event => {
        event.preventDefault();
        store.toggleAddMenu();
        bookmarksmaker.render();
    })
}

const filterByRank = function  () {
   $('select.ratingDropDown').change(function () {
       let currentSelection = $(this).children('option:selected').val();
       store.changeRank(currentSelection);
       console.log(store.filter);
   })
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
    handleAddBookmarkOpen(),
    handleCancelAdd(),
    handleSumbitNewBookmark(),
    filterByRank(),
    handleDelete(),
    handleError()
}

export default {
    combineEventListeners,
}