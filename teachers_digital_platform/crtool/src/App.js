import "babel-polyfill";
import React, { Component } from 'react';

import CustomerReviewToolComponent from "./js/components/CustomerReviewToolComponent";

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