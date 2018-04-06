import React from 'react';
import ReactDOM from 'react-dom';
import DistinctiveButton from '../js/components/distinctives/DistinctiveButton';
import localStorage from 'mock-local-storage';
import renderer from 'react-test-renderer';
import jest from 'jest';

describe ('initial state', () => {

  it('renders without crashing', () => {
    const component = renderer.create(
      <DistinctiveButton />,
    );
  });  

  it('renders without crashing 2', () => {
    const component = renderer.create(
      '<DistinctiveButton distinctiveClicked={this.distinctiveClicked.bind(this)} {...distinctiveProps}/>',
    );
  }); 
})