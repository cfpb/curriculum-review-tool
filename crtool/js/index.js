import './analytics.js';
const startPage = require( './startPage' );
const crtoolSession = require( './crtoolSession' );

const app = {
  init: () => {
    console.log('app init: GOT HERE');
    startPage.init();
  }
};

window.addEventListener( 'load', app.init );
console.log('test line 15: GOT HERE');