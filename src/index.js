import $ from 'jquery';

import './index.css';

import store from './store';
import bookmarksmaker from './bookmarksmaker';
import eventlisteners from './eventlisteners';
import api from './api';



function main() {
  api.addBookmark({title: 'Pinterest', url: 'www.pinterest.com', desc: 'A picture saving website', rating: 5})
  .then(res => res.json())
  .then((newBookmark) => {
    return api.retrieveBookmarks();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  });

    console.log('DOM is loaded');
    api.retrieveBookmarks()
      .then(res => res.json())
  };
  
  $(main);