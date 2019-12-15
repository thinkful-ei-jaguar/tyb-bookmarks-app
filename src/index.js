import $ from 'jquery';

import './index.css';

import store from './store';
import bookmarksmaker from './bookmarksmaker';
import eventlisteners from './eventlisteners';
import api from './api';



function main() {
    console.log('DOM is loaded');
    console.log(api.retrieveBookmarks());
      /*.then((items) => {
        items.forEach((bookmark) => StorageEvent.addItem(bookmark));
        bookmarksmaker.render();
      });

    eventlisteners.combineEventListeners();
    bookmarksmaker.render();*/
  };
  
  $(main);