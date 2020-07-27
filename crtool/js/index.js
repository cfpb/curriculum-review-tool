const startPage = require( './startPage' );
import './analytics.js';

const app = {
  init: () => {
    console.log('crtool.js index.js app init: GOT HERE');
    startPage.init();
  }
};

window.addEventListener( 'load', app.init );
console.log('crtoo.js index.js test line 12: GOT HERE');