import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import C from '../js/constants';
import DistinctiveButton from '../js/components/distinctives/DistinctiveButton';
import renderer from 'react-test-renderer';
import { listeners } from 'cluster';

let wrapper;
let distinctiveAnchorClickedValue = "false";
let distinctiveProps = {
  title:"Quality",
  criteria:"5 criteria",
  estimatedtime:"Est. time 30 min",
  description:"Accurate and well presented",
  distinctive:"some distinctive value",
  inProgress:"",
  distinctiveClicked:((clickedName) => { distinctiveAnchorClickedValue = clickedName; }),
};

beforeAll(() => {
  wrapper = shallow(
    <DistinctiveButton {...distinctiveProps} />,
  );
});

afterAll(() => {
  wrapper.unmount();
});

test('Anchor tag with class name exists', () => {
  expect(wrapper.find('a.o-dimension-section-bar_selector').length).toBe(1);
});

it('DistinctiveButton onHandleClick correctly invokes distinctiveClicked(name)', () => {
  const onButtonClick = sinon.spy();
  const wrapper = shallow(<DistinctiveButton handleOnClick={onButtonClick} {...distinctiveProps} />);
  
  wrapper.find('a').simulate('click');

  expect("some distinctive value").toBe(distinctiveAnchorClickedValue);
  console.log("local value: " + distinctiveAnchorClickedValue);
  console.log("other value: " + "some distinctive value");
});
