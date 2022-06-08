import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import QualityPrintPage from '../js/components/pages/quality/QualityPrintPage';
import renderer from 'react-test-renderer';

let result;

const qualityProps = {
  currentPage: 'QualityPrintPage',
  dimensionOverallScores: {},
  distinctiveCompletedDate: {},
  qualityInProgress: false,
  qualityIsDone: true,
  qualityIsSummaryView: true,
  resetPrintButtonState: () => {},

  studyAnswers: {},
  criterionAnswers: {},
  currentPrintButton: {},
  criterionClickedTitles: {},
  numberFinalSummaryViews: {},
  criterionEfficacyStudies: [],
  criterionScores: { 'efficacy-crt-1-0': { 'criterionName': 'efficacy-crt-1-0', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 9, 'essential_total_no': 0, 'beneficial_total_yes': 5, 'beneficial_total_no': 0, 'answered_all_complete': true, 'scopeOfEvidence': 'small' }, 'efficacy-crt-1-1': { 'criterionName': 'efficacy-crt-1-1', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 9, 'essential_total_no': 0, 'beneficial_total_yes': 5, 'beneficial_total_no': 0, 'answered_all_complete': true, 'scopeOfEvidence': 'small' }, 'efficacy-crt-2': { 'criterionName': 'efficacy-crt-2', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 0, 'essential_total_no': 0, 'beneficial_total_yes': 2, 'beneficial_total_no': 0, 'answered_all_complete': true }, 'efficacy-crt-3': { 'criterionName': 'efficacy-crt-3', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 2, 'essential_total_no': 0, 'beneficial_total_yes': 1, 'beneficial_total_no': 0, 'answered_all_complete': true }, 'quality-crt-1': { 'criterionName': 'quality-crt-1', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 4, 'essential_total_no': 0, 'beneficial_total_yes': 4, 'beneficial_total_no': 0, 'answered_all_complete': true, 'exceeds': true, 'meets': false, 'doesnotmeet': false }, 'quality-crt-2': { 'criterionName': 'quality-crt-2', 'has_beneficial': false, 'all_essential_yes': true, 'essential_total_yes': 4, 'essential_total_no': 0, 'beneficial_total_yes': 0, 'beneficial_total_no': 0, 'answered_all_complete': true, 'exceeds': false, 'meets': true, 'doesnotmeet': false }, 'quality-crt-3': { 'criterionName': 'quality-crt-3', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 6, 'essential_total_no': 0, 'beneficial_total_yes': 1, 'beneficial_total_no': 0, 'answered_all_complete': true, 'exceeds': true, 'meets': false, 'doesnotmeet': false }, 'quality-crt-4': { 'criterionName': 'quality-crt-4', 'has_beneficial': false, 'all_essential_yes': true, 'essential_total_yes': 8, 'essential_total_no': 0, 'beneficial_total_yes': 0, 'beneficial_total_no': 0, 'answered_all_complete': true, 'exceeds': false, 'meets': true, 'doesnotmeet': false }},
  criterionCompletionStatuses: {},
  finalSummaryShowEntireReview: false


};
afterAll( () => {
  result.unmount();
} );

test( 'Quality Print Page renders correctly', () => {
  result = renderer.create(
    <QualityPrintPage {...qualityProps}/>
  );

  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );
