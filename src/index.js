import $ from 'jquery';

import './index.css';

import bookmarks from './bookmarks';


function main() {
    console.log('DOM is loaded');
  
    const startMsg = $('<p>Webpack is working!</p>');
    $('#root').append(startMsg);
  }
  
  $(main);