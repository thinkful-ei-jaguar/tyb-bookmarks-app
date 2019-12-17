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
        htmlString += generateStarRating(item.rating) + `<span class="far fa-trash-alt js-delete-button"></span><span class="fa fa-chevron-down js-arrow-button"></span></li>`;
        return htmlString;
    }
    else {
        htmlString += `<p>${item.desc}</p>` + generateStarRating(item.rating) +
        `<button onclick="window.location.href = '${item.url}';">Website</button>
        <button type="submit">Edit</button><span class="far fa-trash-alt js-delete-button"></span><span class="fa fa-chevron-up js-arrow-button"></span>
        </li>`;
        return htmlString;
    }
};

const generateBookmarkString = function (bookmarks) {
    const liItems = bookmarks.map((item) => generateBookmarkItem(item));
    return liItems.join('');
};

const generateButtonString = function () {
    return `<section class="addandfilter js-add-and-filter">
    <button class="formbutton js-add-button" type="submit">Add Bookmark</button>
    <button class="formbutton" type="submit">Filter by Rating</button>
    </section>`;
}

const generateAddForm = function () {
    return `<section>
    <form id="addNewBookmark" class="addNewBookmark js-bookmark-form">
        <label for="bookmarktitle">Title:</label>
        <input type="text" name="title" id="bookmarktitle" required>
        <label for="url">URL:</label>
        <input type="url" name="url" id="url" pattern="https://.*" required>
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
        <textarea class="textbox" name="description" id="bookmarkdescription" maxlength="250" placeholder="max 250 characters"></textarea>
        <br><br>
        <button type="submit" class="js-add-confirm">Add</button>
        <button type="reset" class="js-dont-add">Cancel</button>
    </form>
</section>`;
};

const render = function () {
        if (store.adding === true) {
            const addMenu = generateAddForm();
            $('.js-add-and-filter').html(addMenu);
        }
        else {
        const buttonString = generateButtonString();
        const bookmarkListString = generateBookmarkString(store.items);
        $('.js-add-and-filter').html(buttonString);
        $('.js-bookmark-list').children().html(bookmarkListString);
        }
};

export {
    generateStarRating,
    generateBookmarkItem,
    generateBookmarkString,
    generateAddForm,
}

export default {
    render,
};

  /*for (let i=1; i<=item.rating; i++) {
        $( `li#${item.id}:nth-child(${i+1})`).addClass('checked');
    }*/