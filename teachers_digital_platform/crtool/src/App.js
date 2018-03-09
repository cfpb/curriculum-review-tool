import React, { Component } from 'react';
import './App.css';

import CustomerReviewToolComponent from "./js/components/CustomerReviewToolComponent";

class App extends Component {
  changeText(textdata) {
    this.setState({textdata});
  }

  render() {
    return (
      <div className="App">
        <CustomerReviewToolComponent />
      </div>
    );
  }
}

export default App;
