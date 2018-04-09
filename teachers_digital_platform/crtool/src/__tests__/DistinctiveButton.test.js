import React from 'react';
import C from '../js/constants';
import DistinctiveButton from '../js/components/distinctives/DistinctiveButton';
import renderer from 'react-test-renderer';

let result;
let distinctiveButtonClickedValue = "false";
let distinctiveProps = {
  title:"Quality",
  criteria:"5 criteria",
  estimatedtime:"Est. time 30 min",
  description:"Accurate and well presented",
  distinctive:C.QUALITY_DISTINCTIVE,
  inProgress:"",
  distinctiveClicked:distinctiveClicked.bind(this),
}

function distinctiveClicked(name) {
  distinctiveButtonClickedValue = name;
}

beforeAll(() => {
  result = renderer.create(
    <DistinctiveButton 
      distinctiveClicked={distinctiveClicked.bind(this)} 
      {...distinctiveProps}
    />,
  );
});

afterAll(() => {
  result.unmount();
});

test('DistinctiveButton uses state to populate values', () => {
    let tree = result.toJSON();
    expect(tree).toMatchSnapshot();
});

test('DistinctiveButton correctly invokes onClick', () => {
  let tree = result.toJSON();
  tree.props.onClick(C.QUALITY_DISTINCTIVE);

  // makes sure that the function distinctiveClicked is called with the proper parameters
  expect(distinctiveButtonClickedValue).toBe(C.QUALITY_DISTINCTIVE);

  // re-rendering
  tree = result.toJSON();
  expect(tree).toMatchSnapshot();
});