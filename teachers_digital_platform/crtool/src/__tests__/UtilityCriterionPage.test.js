import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/constants';
import UtilityCriterionPage from '../js/components/pages/UtilityCriterionPage';
import renderer from 'react-test-renderer';

let result;
const utilityProps = {
    currentPage:"UtilityCriterionPage",
    criterionAnswers: {},
    criterionNotes:{},
    changeUtilityAnswer: _changeUtilityRadio.bind(this),
    changeUtilityNotes:_changeUtilityNotes.bind(this),
    setDistinctiveComplete:_handleSummaryButtonClick.bind(this),
    initializeAnswerObjects:(() => { }),
}

beforeAll(() => {
  result = renderer.create(
    <UtilityCriterionPage {...utilityProps}/>,
  );
});
  
afterAll(() => {
  result.unmount();
});

test ('Utility Criterion Page uses state to populate values', () => {
  let tree = result.toJSON();
  expect(tree).toMatchSnapshot();
});

function _changeUtilityRadio (key, checkedValue) {
}

function _changeUtilityNotes (key, textValue) {
}

function _handleSummaryButtonClick () {
}