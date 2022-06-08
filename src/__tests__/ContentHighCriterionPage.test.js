import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import ContentHighCriterionPage from '../js/components/pages/content/ContentHighCriterionPage';
import renderer from 'react-test-renderer';

let result;
const contentProps = {
  currentPage: 'Content',
  criterionAnswers: {},
  criterionNotes: {},
  criterionAnswerChanged:  () => { },
  changeCriterionNotes:  () => { },
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

test( 'Content Criterion Page uses state to populate values', () => {
  // Act
  result = renderer.create(
    <ContentHighCriterionPage {...contentProps}/>
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Content Criterion one - four complete with svg check', () => {
  // Arrange
  let criterionCompletionStatuses = { 'content-high-crt-question-1': 'check-round' };
  criterionCompletionStatuses['content-high-crt-question-2'] = 'check-round';
  criterionCompletionStatuses['content-high-crt-question-3'] = 'check-round';
  criterionCompletionStatuses['content-high-crt-question-4'] = 'check-round';
  criterionCompletionStatuses['content-high-crt-question-5'] = 'check-round';

  // Act
  result = renderer.create(
    <ContentHighCriterionPage {...contentProps} criterionCompletionStatuses={criterionCompletionStatuses} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Content Criterion criterion 2 was not clicked so it does not show', () => {
  // Arrange
  let criterionClickedTitles = {};

  // Act
  result = renderer.create(
    <ContentHighCriterionPage {...contentProps} criterionClickedTitles={criterionClickedTitles} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Content Criterion criterion 2 was clicked so it does show', () => {
  // Arrange
  let criterionClickedTitles = { 'content-high-crt-question-2': 'clicked' };

  // Act
  result = renderer.create(
    <ContentHighCriterionPage {...contentProps} criterionClickedTitles={criterionClickedTitles} />
  );

  // Assert
  let tree = result.toJSON();
  // snapshot contains the whole of criterion 2 so if something changes incorrectly we will know
  expect( tree ).toMatchSnapshot();
} );

test( 'Content Criterion criterion 2 & 3 & 4 were clicked so they show', () => {
  // Arrange
  let criterionClickedTitles = { 'content-high-crt-question-2': 'clicked' };
  criterionClickedTitles['content-high-crt-question-3'] = 'clicked';
  criterionClickedTitles['content-high-crt-question-4'] = 'clicked';
  criterionClickedTitles['content-high-crt-question-5'] = 'clicked';

  // Act
  result = renderer.create(
    <ContentHighCriterionPage {...contentProps} criterionClickedTitles={criterionClickedTitles} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

