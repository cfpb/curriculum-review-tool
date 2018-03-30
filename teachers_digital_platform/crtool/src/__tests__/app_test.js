import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import localStorage from 'mock-local-storage';
import renderer from 'react-test-renderer';

describe ('initial state', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
})