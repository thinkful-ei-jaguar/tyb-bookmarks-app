import $ from 'jquery';
import api from './api';
import store from './store';

const generateStarRating = function (rating) {
    let starHtml = '';
    for (let i=1; i<=5; i++) {
        if (i<=rating) {
            starHtml += `<span class="fa fa-star checked"></span>`;
        }
        else {
            starHtml += `<span class="fa fa-star"></span>`;
        }
    }
    return starHtml;
    /*for (let i=1; i<=item.rating; i++) {
        $( `li#${item.id}:nth-child(${i+1})`).addClass('checked');
    }*/
}

const generateBookmarkItem = function (item) {
    let htmlString = `<li class="bookmarks js-individual-bookmark" id="${item.id}"><p>${item.title}</p>`;
    htmlString += generateStarRating(item.rating) + `</li>`;
    return htmlString;
};

const generateBookmarkString = function (bookmarks) {
    const liItems = bookmarks.map((item) => generateBookmarkItem(item));
    return liItems.join('');
};

const generateAddForm = function () {
    if (!adding) {
    return `<section>
    <form id="addNewBookmark" class="addNew">
        <label for="bookmarktitle">Title:</label>
        <input type="text" name="title" id="bookmarktitle" required>
        <label for="url">URL:</label>
        <input type="text" name="url" id="url" required>
        <label for="rating">Rating:</label>
        <select name="rating" id="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <br><br>
        <label for="bookmarkdescription">Description:</label>
        <br><br>
        <input type="text" class="textbox" name="description" id="bookmarkdescription" maxlength="250" placeholder="max 250 characters">
        <br><br>
        <button type="submit">Add</button>
    </form>
</section>`;}
};

const render = function () {
   const bookmarkListString = generateBookmarkString(store.items);
   $('.js-bookmark-list').children().append(bookmarkListString);
};

export default {
    render,
};