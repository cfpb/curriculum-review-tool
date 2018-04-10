import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/constants';
import ContentCriterionPage from '../js/components/pages/content/ContentElementaryCriterionPage';
import renderer from 'react-test-renderer';

    let result;
    const contentProps = {
        currentPage:"ContentCriterionPage",
        criterionAnswers: {},
        criterionNotes:{},
        changeCriterionAnswer: _changeContentRadio.bind(this),
        changeCriterionNotes:_changeContentNotes.bind(this),
        clearLocalStorage:_clearLocalStorage.bind(this), 
        setDistinctiveComplete:_handleSummaryButtonClick.bind(this),
    }

    beforeAll(() => {
        result = renderer.create(
            <ContentCriterionPage {...contentProps}/>,
          );
      });
      
    afterAll(() => {
        result.unmount();
    });

    test ('Content Criterion Page uses state to populate values', () => {
      let tree = result.toJSON();
      expect(tree).toMatchSnapshot();
    });
  
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

    
    // let startButton = result.refs["crt-content-start-over"];

    // let tree = result.toJSON();
    // expect(tree).toMatchSnapshot();
    // tree.find("crt-content-start-over").onClick();
    // expect(LocalStorageClearedValue).toBe(true);