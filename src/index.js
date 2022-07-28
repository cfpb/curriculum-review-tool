import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/promise';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import crtoolLocalStorage from './crtoolLocalStorage';

// Initialize Token HERE instead of in React App.
crtoolLocalStorage.init().then(
  () => {
    ReactDOM.render( <App />, document.getElementById( 'react' ) );
  },
  () => {
    // TODO handle initial failed DB get
  }
);
