import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import EfficacyPrintPage from '../js/components/pages/efficacy/EfficacyPrintPage';
import renderer from 'react-test-renderer';

let result;

const efficacyProps = {
  currentPage: 'EfficacyPrintPage',
  criterionAnswers: {},
  criterionClickedTitles: {},
  criterionCompletionStatuses: {},
  criterionEfficacyStudies: {},
  criterionScores: {},
  currentPrintButton: {},
  curriculumTitle: '',
  dimensionOverallScores: {},
  distinctiveCompletedDate: {},
  resetPrintButtonState: () => {}
};

afterAll( () => {
  result.unmount();
} );

test( 'Efficacy Print Page renders correctly', () => {
  result = renderer.create(
    <EfficacyPrintPage {...efficacyProps}/>
  );
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );
