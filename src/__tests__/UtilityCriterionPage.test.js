import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import UtilityCriterionPage from '../js/components/pages/utility/UtilityCriterionPage';
import renderer from 'react-test-renderer';

let result;
const utilityProps = {
  currentPage: 'UtilityCriterionPage',
  criterionAnswers: {},
  criterionNotes: {},
  changeUtilityAnswer:  () => { },
  changeUtilityNotes:  () => { },
  setDistinctiveComplete:  () => { },
  initializeAnswerObjects:  () => { },
  criterionCompletionStatuses:  () => {},
  setCriterionStatusToInStart:  () => {},
  renderFormLevelErrorMessage:  () => {},
  showErrorsForCurrentPage:  () => {}
};

afterAll( () => {
  result.unmount();
} );

test( 'Utility Criterion Page uses state to populate values', () => {
  // Act
  result = renderer.create(
    <UtilityCriterionPage {...utilityProps}/>
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Utility Criterion one - four complete with svg check', () => {
  // Arrange
  let criterionCompletionStatuses = { 'utility-crt-question-1': 'check-round' };
  criterionCompletionStatuses['utility-crt-question-2'] = 'check-round';
  criterionCompletionStatuses['utility-crt-question-3'] = 'check-round';
  criterionCompletionStatuses['utility-crt-question-4'] = 'check-round';
  criterionCompletionStatuses['utility-crt-question-5'] = 'check-round';

  // Act
  result = renderer.create(
    <UtilityCriterionPage {...utilityProps} criterionCompletionStatuses={criterionCompletionStatuses} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Utility Criterion criterion 2 was not clicked so it does not show', () => {
  // Arrange
  let criterionClickedTitles = {};

  // Act
  result = renderer.create(
    <UtilityCriterionPage {...utilityProps} criterionClickedTitles={criterionClickedTitles} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Utility Criterion criterion 2 was clicked so it does show', () => {
  // Arrange
  let criterionClickedTitles = { 'utility-crt-question-2': 'clicked' };

  // Act
  result = renderer.create(
    <UtilityCriterionPage {...utilityProps} criterionClickedTitles={criterionClickedTitles} />
  );

  // Assert
  let tree = result.toJSON();
  // snapshot contains the whole of criterion 2 so if something changes incorrectly we will know
  expect( tree ).toMatchSnapshot();
} );

test( 'Utility Criterion criterion 2 & 3 & 4 were clicked so they show', () => {
  // Arrange
  let criterionClickedTitles = { 'utility-crt-question-2': 'clicked' };
  criterionClickedTitles['utility-crt-question-3'] = 'clicked';
  criterionClickedTitles['utility-crt-question-4'] = 'clicked';
  criterionClickedTitles['utility-crt-question-5'] = 'clicked';

  // Act
  result = renderer.create(
    <UtilityCriterionPage {...utilityProps} criterionClickedTitles={criterionClickedTitles} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );
