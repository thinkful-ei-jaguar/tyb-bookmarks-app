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
    $('main').on('click', '.js-add-button', event => {
        event.preventDefault();
        store.toggleAddMenu();
        bookmarksmaker.render();
    })

}

const handleSumbitNewBookmark = function () {
    $('main').on('click', '.js-add-confirm', event => {
        event.preventDefault();
        const newBookmarkObj = {
            title: $('#bookmarktitle').val(),
            url: $('#url').val(),
            desc: $('#bookmarkdescription').val(),
            rating: $('#rating').val()
        };
        api.addBookmark(newBookmarkObj)
            .then(responseJson => {
                responseJson.expanded = false;
                store.addItem(responseJson);
                bookmarksmaker.render();})
            .catch((error) => {
                store.triggerError(error.message);
                console.log(store.error);
                bookmarksmaker.renderErrorMessage();
            });
        store.toggleAddMenu();
        bookmarksmaker.render();
        });
}

const handleCancelAdd = function () {
    $('main').on('click', '.js-dont-add', event => {
        event.preventDefault();
        store.toggleAddMenu();
        bookmarksmaker.render();
    })
}

const filterByRank = function  () {
   $('main').on('change', '.ratingDropDown', function () {
       let currentSelection = $(this).children('option:selected').val();
       store.changeRank(currentSelection);
       bookmarksmaker.render();
   })
}

const handleBookmarkExpand = function  () {
    $('main').on('click', '.js-arrow-button', event => {
        const id = getIdFromElement(event.currentTarget);
        const item = store.findById(id);
        store.findAndExpand(id, {expanded: !item.expanded});
        bookmarksmaker.render();
    })
    
}

const handleDelete = function  () {
    $('main').on('click', '.js-delete-button', event => {
        const desiredId = getIdFromElement(event.currentTarget);
        api.deleteBookmark(desiredId)
            .then(() => {
                store.deleteLiItem(desiredId);
                bookmarksmaker.render();
            })
            .catch((error) => {
                store.triggerError(error.message);
                console.log(store.error);
                bookmarksmaker.renderErrorMessage();
            });
    });
};

const handleError = function  () {
    $('main').on('click', '.js-cancel-error', event => {
        store.triggerError(null);
        console.log(store.error);
        bookmarksmaker.renderErrorMessage();
    })
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