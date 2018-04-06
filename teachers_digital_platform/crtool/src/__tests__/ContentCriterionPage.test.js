import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/constants';
import ContentCriterionPage from '../js/components/pages/ContentCriterionPage';
import renderer from 'react-test-renderer';

test('ContentCriterionPage loads with the correct values', () => {
    const contentProps = {
        currentPage:"ContentCriterionPage",
        criterionAnswers: {},
        criterionNotes:{},
        changeCriterionAnswer: _changeContentRadio.bind(this),
        changeCriterionNotes:_changeContentNotes.bind(this),
        clearLocalStorage:_clearLocalStorage.bind(this), 
        setDistinctiveComplete:_handleSummaryButtonClick.bind(this),
    }
  
    function _changeContentRadio (key, checkedValue) {

    }

    function _changeContentNotes (key, textValue) {

    }

    let LocalStorageClearedValue = false;
    function _clearLocalStorage () {
        LocalStorageClearedValue = true;
    }

    function _handleSummaryButtonClick () {

    }
     
    const component = renderer.create(
      <ContentCriterionPage {...contentProps}/>,
    );

    
    let startButton = component.refs["crt-content-start-over"];

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.find("crt-content-start-over").onClick();
    expect(LocalStorageClearedValue).toBe(true);
  });