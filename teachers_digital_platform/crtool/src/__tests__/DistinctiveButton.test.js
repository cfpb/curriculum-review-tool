import React from 'react';
import C from '../js/constants';
import DistinctiveButton from '../js/components/distinctives/DistinctiveButton';
import renderer from 'react-test-renderer';

test('DistinctiveButton uses state to populate values', () => {
  const distinctiveProps = {
    title:"Quality",
    criteria:"5 criteria",
    estimatedtime:"Est. time 30 min",
    description:"Accurate and well presented",
    distinctive:C.QUALITY_DISTINCTIVE,
    inProgress:"",
    distinctiveClicked:distinctiveClicked.bind(this),
  }

  let distinctiveClickedValue = "false";
  function distinctiveClicked(distinctiveName) {
    distinctiveClickedValue = distinctiveName;
  }

  const component = renderer.create(
    <DistinctiveButton {...distinctiveProps}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onClick(C.QUALITY_DISTINCTIVE);

  // makes sure that the function distinctiveClicked is called with the proper parameters
  expect(distinctiveClickedValue).toBe(C.QUALITY_DISTINCTIVE);

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});