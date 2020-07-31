import React from 'react';
import ReactDOM from 'react-dom';
import localStorage from 'mock-local-storage';
import renderer from 'react-test-renderer';
import jest from 'jest';

import crtoolLocalStorage from '../crtoolLocalStorage';
import App from '../App';

crtoolLocalStorage.initForTesting(localStorage);

it('renders without crashing', () => {
  const component = renderer.create(
    <App />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
