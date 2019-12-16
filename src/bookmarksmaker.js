import $ from 'jquery';
import api from './api';
import store from './store';
import eventlisteners from './eventlisteners';

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
  
}

const generateBookmarkItem = function (item) {
    let htmlString = `<li class="bookmarks js-individual-bookmark" id="${item.id}"><p>${item.title}</p>`;
    if (item.expanded === false) {
        htmlString += generateStarRating(item.rating) + `<span class="fa fa-chevron-down js-down-arrow"></span></li>`;
        return htmlString;
    }
    else {
        htmlString += generateStarRating(item.rating) + `<p>${item.desc}</p>
        <a href="${item.url}">Website</a>
        <button type="submit">Remove</button>
        <button type="submit">Edit</button><span class="fa fa-chevron-up js-up-arrow"></span></li>`;
        return htmlString;
    }
};

/*const generateExpandedItem = function (item) {
    let htmlString = `<li class="bookmarks js-individual-bookmark" id="${item.id}"><p>${item.title}</p>`;
    
}*/

const generateBookmarkString = function (bookmarks) {
    const liItems = bookmarks.map((item) => generateBookmarkItem(item));
    return liItems.join('');
};

const generateAddForm = function () {
    /*if (!adding) {
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
</section>`;}*/
};

const render = function () {
        const bookmarkListString = generateBookmarkString(store.items);
        $('.js-bookmark-list').children().html(bookmarkListString);
};

export {
    generateStarRating,
    generateBookmarkItem,
    //generateExpandedItem,
    generateBookmarkString,
    generateAddForm,
}

export default {
    render,
};

  /*for (let i=1; i<=item.rating; i++) {
        $( `li#${item.id}:nth-child(${i+1})`).addClass('checked');
    }*/