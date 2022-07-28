import React from 'react';
import ReactDOM from 'react-dom';
import 'mock-local-storage';
import renderer from 'react-test-renderer';

import crtoolLocalStorage from '../crtoolLocalStorage';
import App from '../App';

crtoolLocalStorage.isReady = () => true;
crtoolLocalStorage.saveIfDirty = () => 1;

it( 'renders without crashing', () => {
  const component = renderer.create(
    <App />
  );

  let tree = component.toJSON();
  expect( tree ).toMatchSnapshot();
} );
