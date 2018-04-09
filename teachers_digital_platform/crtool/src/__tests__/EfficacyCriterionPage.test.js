import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/constants';
import EfficacyCriterionPage from '../js/components/pages/EfficacyCriterionPage';
import renderer from 'react-test-renderer';

let result;
const efficacyProps = {
    currentPage:"EfficacyCriterionPage",
    criterionAnswers: {},
    criterionNotes:{},
    changeEfficacyAnswer: _changeEfficacyRadio.bind(this),
    changeEfficacyNotes:_changeEfficacyNotes.bind(this),
    clearLocalStorage:_clearLocalStorage.bind(this), 
    setDistinctiveComplete:_handleSummaryButtonClick.bind(this),
}

beforeAll(() => {
  result = renderer.create(
    <EfficacyCriterionPage {...efficacyProps}/>,
  );
});
      
afterAll(() => {
    result.unmount();
});

test ('Efficacy Criterion Page uses state to populate values', () => {
    let tree = result.toJSON();
    expect(tree).toMatchSnapshot();
});

function _changeEfficacyRadio (key, checkedValue) {

}

function _changeEfficacyNotes (key, textValue) {

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