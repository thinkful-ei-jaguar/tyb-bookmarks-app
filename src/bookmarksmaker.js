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
    if (item.rating < store.filter) {
        return "";
    }
    if (item.expanded === false) {
        let htmlString = `<li class="bookmarks js-individual-bookmark" id="${item.id}"><p class="title">${item.title}</p><section class="starrating">` + generateStarRating(item.rating) + `</section>` +
        `<section class="bookmarkButtons"><button class="btn js-delete-button"><i class="far fa-trash-alt"></i></button>
        <button class="btn js-arrow-button"><i class="fa fa-chevron-down"></i></button></section>`;
        return htmlString;
    }
    else {
        let htmlString = `<li class="expanded js-individual-bookmark" id="${item.id}"><section class="expandedRowOne"><p class="title">${item.title}</p><section class="starrating">` + generateStarRating(item.rating) + `</section>` +
        `<button class="btn js-delete-button"><i class="far fa-trash-alt"></i></button>
        <button class="btn js-arrow-button"><i class="fa fa-chevron-up"></i></button></section>` +
        `<section class="expandedRowTwo"><p class="desc">${item.desc}</p>
        <button class="website" onclick="window.location.href = '${item.url}';">Website</button></section>
        </li>`;
        return htmlString;
    }
};

const generateBookmarkString = function (bookmarks) {
    const liItems = bookmarks.map((item) => generateBookmarkItem(item));
    const liTogether = liItems.join('');
    return `<section class="js-bookmark-list bookmarkSection"><ul class="bookmarklist">${liTogether}</ul></section>`
};

const generateButtonString = function () {
    return `<section class="addandfilter js-add-and-filter"><button class="formbutton js-add-button" type="submit">Add Bookmark</button>
        <select name="rating" class="ratingDropDown" id="ratingFilter">
            <option value="0">Minimum Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </section>
        <section class='js-error-message'> 
        </section>`;
}

const generateAddForm = function () {
    return `<section>
    <form id="addNewBookmark" class="addNewBookmark js-bookmark-form">
        <label for="bookmarktitle">Title:</label>
        <input type="text" name="title" id="bookmarktitle" required>
        <label for="url">URL:</label>
        <input type="url" name="url" id="url" required>
        <label for="rating">Rating:</label>
        <select name="rating" id="rating" class="ratingform">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <label for="bookmarkdescription">Description:</label>
        <textarea class="textbox" name="description" id="bookmarkdescription" maxlength="250" placeholder="max 250 characters"></textarea>
        <section class="formButtons">
        <button type="submit" class="addFormButton js-add-confirm">Add</button>
        <button type="reset" class="dontAddButton js-dont-add">Cancel</button>
        </section>
    </form>
</section>`;
};

const generateErrorMessage = function (message) {
    return `<section class="errorWindow">
                <p class="errorP">${message}</p>
                <button id="cancelError" class="cancelError js-cancel-error"><i class="far fa-times-circle"></i></button>
            </section>`
}

const renderErrorMessage = function () {
    if (store.error) {
        const em = generateErrorMessage(store.error);
        console.log(em);
        $('.js-error-message').html(em);
    }
    else {
        $('.js-error-message').empty();
    }
}

const render = function () {
        renderErrorMessage();
        if (store.adding === true) {
            const addMenu = generateAddForm();
            $('.js-add-and-filter').html(addMenu);
        }
        else {
        const buttonString = generateButtonString();
        const bookmarkListString = generateBookmarkString(store.items);
        $('main').html(buttonString + bookmarkListString);
    }
};

export {
    generateErrorMessage,
    generateStarRating,
    generateBookmarkItem,
    generateBookmarkString,
    generateAddForm,
}

export default {
    render,
    renderErrorMessage
};

/*pattern="https://.*"*/ 