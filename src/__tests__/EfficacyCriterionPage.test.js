import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import EfficacyCriterionPage from '../js/components/pages/efficacy/EfficacyCriterionPage';
import renderer from 'react-test-renderer';

let result;
const efficacyProps = {
  currentPage: 'EfficacyCriterionPage',
  criterionAnswers: {},
  criterionNotes: {},
  criterionEfficacyStudies: [ 0 ],
  studyCount: 0,
  finishAddingEfficacyStudies: true,
  studyAnswers: { 0: 'efficacy-crt-question-#0#study' },
  changeEfficacyAnswer:  () => { },
  changeEfficacyNotes:  () => { },
  setDistinctiveComplete:  () => { },
  initializeAnswerObjects:  () => { },
  criterionCompletionStatuses:  () => {},
  criterionScores:  () => {},
  setCriterionStatusToInStart:  () => {},
  setCriterionTitleLinkClicked:  () => {},
  initializeStudyAnswers:  () => {},
  renderFormLevelErrorMessage:  () => {},
  showErrorsForCurrentPage:  () => {}
};

afterAll( () => {
  result.unmount();
} );

test( 'Efficacy Criterion Page uses state to populate values', () => {
  // Arrange
  let finishAddingEfficacyStudies = false;

  // Act
  result = renderer.create(
    <EfficacyCriterionPage {...efficacyProps}
      finishAddingEfficacyStudies={finishAddingEfficacyStudies}/>
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Efficacy Criterion one - four complete with svg check', () => {
  // Arrange
  let finishAddingEfficacyStudies = true;
  let criterionCompletionStatuses = { 'efficacy-crt-question-1': 'check-round' };
  criterionCompletionStatuses['efficacy-crt-question-2'] = 'check-round';
  criterionCompletionStatuses['efficacy-crt-question-3'] = 'check-round';

  // Act
  result = renderer.create(
    <EfficacyCriterionPage {...efficacyProps}
      criterionCompletionStatuses={criterionCompletionStatuses}
      finishAddingEfficacyStudies={finishAddingEfficacyStudies} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Efficacy Criterion criterion 2 always shows if two Strong Studies exist and finished studies', () => {
  // Arrange
  let finishAddingEfficacyStudies = true;
  let criterionScores = {};
  criterionScores['efficacy-crt-1-0'] = { all_essential_yes: true };
  criterionScores['efficacy-crt-1-1'] = { all_essential_yes: true };
  let criterionClickedTitles = { 'efficacy-crt-question-2': 'clicked' };

  // Act
  result = renderer.create(
    <EfficacyCriterionPage {...efficacyProps}
      criterionScores={criterionScores}
      criterionClickedTitles={criterionClickedTitles}
      finishAddingEfficacyStudies={finishAddingEfficacyStudies} />
  );

  // Assert
  let tree = result.toJSON();
  // snapshot contains the whole of criterion 2 so if something changes incorrectly we will know
  expect( tree ).toMatchSnapshot();
} );

test( 'Efficacy Criterion criterion 3 was clicked so it shows', () => {
  // Arrange
  let finishAddingEfficacyStudies = true;
  let criterionScores = {};
  criterionScores['efficacy-crt-1-0'] = { all_essential_yes: true };
  criterionScores['efficacy-crt-1-1'] = { all_essential_yes: true };
  let criterionClickedTitles = {};
  criterionClickedTitles = { 'efficacy-crt-question-2': 'clicked' };
  criterionClickedTitles['efficacy-crt-question-3'] = 'clicked';

  // Act
  result = renderer.create(
    <EfficacyCriterionPage {...efficacyProps}
      criterionScores={criterionScores}
      criterionClickedTitles={criterionClickedTitles}
      finishAddingEfficacyStudies={finishAddingEfficacyStudies} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );
