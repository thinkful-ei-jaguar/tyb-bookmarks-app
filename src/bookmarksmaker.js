import $ from 'jquery';
import api from './api';
import store from './store';

const generateBookmarkItem = function (item) {
    if (!bookmark.expanded) {
       return `<li class="bookmarks expanded">
       <p>${store.items.bookmark.title}</p>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>
       <p>${bookmark.description}</p>
       <a href="${bookmark.url}">Website</a>
       <button type="submit">Remove</button>
       <button type="submit">Edit</button>
       </li>`};
    return `<li class="bookmarks"><p>${bookmark.title}</p>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    </li>`;
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
   const bookmarkListString = generateBookmarkItem(store.items);
   console.log(bookmarkListString);
};

export default {
    render,
};