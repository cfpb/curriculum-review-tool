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
        clearLocalStorage:_clearLocalStorage.bind(this), 
        setDistinctiveComplete:_handleSummaryButtonClick.bind(this),
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