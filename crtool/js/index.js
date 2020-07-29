const startPage = require( './startPage' );
import './analytics.js';

const app = {
  init: () => {
    startPage.init();
  }
};

window.addEventListener( 'load', app.init );
