import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/constants';
import QualityCriterionPage from '../js/components/pages/QualityCriterionPage';
import renderer from 'react-test-renderer';

let result;
const qualityProps = {
    currentPage:"QualityCriterionPage",
    criterionAnswers: {},
    criterionNotes:{},
    changeQualitynAnswer: _changeQualityRadio.bind(this),
    changeQualityNotes:_changeQualityNotes.bind(this),
    clearLocalStorage:_clearLocalStorage.bind(this), 
    setDistinctiveComplete:_handleSummaryButtonClick.bind(this),
}

beforeAll(() => {
  result = renderer.create(
    <QualityCriterionPage {...qualityProps}/>,
  );
});
  
afterAll(() => {
  result.unmount();
});

test ('Quality Criterion Page uses state to populate values', () => {
  let tree = result.toJSON();
  expect(tree).toMatchSnapshot();
});

function _changeQualityRadio (key, checkedValue) {
}

function _changeQualityNotes (key, textValue) {
}

let LocalStorageClearedValue = false;
function _clearLocalStorage () {
    LocalStorageClearedValue = true;
}

function _handleSummaryButtonClick () {

}


// let startButton = result.refs["crt-content-start-over"];

// let tree = result.toJSON();
// expect(tree).toMatchSnapshot();
// tree.find("crt-content-start-over").onClick();
// expect(LocalStorageClearedValue).toBe(true);