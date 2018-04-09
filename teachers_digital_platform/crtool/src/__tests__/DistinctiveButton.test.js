import React from 'react';
import C from '../js/constants';
import DistinctiveButton from '../js/components/distinctives/DistinctiveButton';
import renderer from 'react-test-renderer';

const distinctiveProps = {
  title:"Quality",
  criteria:"5 criteria",
  estimatedtime:"Est. time 30 min",
  description:"Accurate and well presented",
  distinctive:C.QUALITY_DISTINCTIVE,
  inProgress:"",
  distinctiveClicked:distinctiveClicked.bind(this),
}

let distinctiveButtonClickedValue = "false";
function distinctiveClicked(name) {
  distinctiveButtonClickedValue = name;
}

test('DistinctiveButton uses state to populate values', () => {
  const component = renderer.create(
    <DistinctiveButton {...distinctiveProps}/>,
  );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('DistinctiveButton correctly invokes onClick', () => {
  const component = renderer.create(
    <DistinctiveButton {...distinctiveProps}/>,
  );

  // manually trigger the callback
  let tree = component.toJSON();
  tree.props.onClick(C.QUALITY_DISTINCTIVE);

  // makes sure that the function distinctiveClicked is called with the proper parameters
  expect(distinctiveButtonClickedValue).toBe(C.QUALITY_DISTINCTIVE);

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});