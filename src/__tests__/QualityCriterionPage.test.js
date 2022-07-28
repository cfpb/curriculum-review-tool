import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import QualityCriterionPage from '../js/components/pages/quality/QualityCriterionPage';
import renderer from 'react-test-renderer';

let result;
const qualityProps = {
  currentPage: 'QualityCriterionPage',
  criterionAnswers: {},
  criterionNotes: {},
  changeQualitynAnswer:  () => { },
  changeQualityNotes:  () => { },
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

test( 'Quality Criterion Page uses state to populate values', () => {
  result = renderer.create(
    <QualityCriterionPage {...qualityProps}/>
  );

  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Quality Criterion one - four complete with svg check', () => {
  // Arrange
  let criterionCompletionStatuses = { 'quality-crt-question-1': 'check-round' };
  criterionCompletionStatuses['quality-crt-question-2'] = 'check-round';
  criterionCompletionStatuses['quality-crt-question-3'] = 'check-round';
  criterionCompletionStatuses['quality-crt-question-4'] = 'check-round';

  // Act
  result = renderer.create(
    <QualityCriterionPage {...qualityProps} criterionCompletionStatuses={criterionCompletionStatuses} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Quality Criterion criterion 2 was not clicked so it does not show', () => {
  // Arrange
  let criterionClickedTitles = {};

  // Act
  result = renderer.create(
    <QualityCriterionPage {...qualityProps} criterionClickedTitles={criterionClickedTitles} />
  );

  // Assert
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );

test( 'Quality Criterion criterion 2 was clicked so it does show', () => {
  // Arrange
  let criterionClickedTitles = { 'quality-crt-question-2': 'clicked' };

  // Act
  result = renderer.create(
    <QualityCriterionPage {...qualityProps} criterionClickedTitles={criterionClickedTitles} />
  );

  // Assert
  let tree = result.toJSON();
  // snapshot contains the whole of criterion 2 so if something changes incorrectly we will know
  expect( tree ).toMatchSnapshot();
} );

test( 'Quality Criterion criterion 2 & 3 & 4 were clicked so they show', () => {
  // Arrange
  let criterionClickedTitles = { 'quality-crt-question-2': 'clicked' };
  criterionClickedTitles['quality-crt-question-3'] = 'clicked';
  criterionClickedTitles['quality-crt-question-4'] = 'clicked';

  // Act
  result = renderer.create(
    <QualityCriterionPage {...qualityProps} criterionClickedTitles={criterionClickedTitles} />
  );

  // Assert
  let tree = result.toJSON();
  // snapshot contains the whole of criterion 2 so if something changes incorrectly we will know
  expect( tree ).toMatchSnapshot();
} );
