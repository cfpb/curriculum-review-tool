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
    setDistinctiveComplete:_handleSummaryButtonClick.bind(this),
    initializeAnswerObjects:(() => { }),
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
    
function _handleSummaryButtonClick () {
}