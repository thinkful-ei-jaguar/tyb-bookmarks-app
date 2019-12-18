import $ from 'jquery';

import './index.css';

import store from './store';
import bookmarksmaker from './bookmarksmaker';
import eventlisteners from './eventlisteners';
import api from './api';



function main() {
    console.log('DOM is loaded');
    api.retrieveBookmarks()
      .then(responseJson => {
        responseJson.forEach(element =>{
        element.expanded = false;
        store.addItem(element);
        bookmarksmaker.render();})
      });
      
    eventlisteners.combineEventListeners();
    bookmarksmaker.render();
  };
  
  $(main);
