import $ from 'jquery';

import './index.css';

import store from './store';
import bookmarksmaker from './bookmarksmaker';
import eventlisteners from './eventlisteners';
import api from './api';



function main() {
    console.log('DOM is loaded');
    api.retrieveBookmarks()
      .then(response => response.json())
      .then(responseJson => responseJson.forEach(element => store.addItem(element)));

    eventlisteners.combineEventListeners();
    bookmarksmaker.render();
  };
  
  $(main);