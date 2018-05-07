import "babel-polyfill";
import 'core-js/es6/map';
import 'core-js/es6/set';
import React, { Component } from 'react';

import CustomerReviewToolComponent from "./js/components/CustomerReviewToolComponent";

require("babel-polyfill");

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerReviewToolComponent />
      </div>
    );
  }
}

export default App;