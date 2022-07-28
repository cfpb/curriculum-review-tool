import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import UtilityPrintPage from '../js/components/pages/utility/UtilityPrintPage';
import renderer from 'react-test-renderer';

let result;

const utilityProps = {
  currentPage: 'UtilityPrintPage',
  criterionAnswers: {},
  criterionScores: { 'utility-crt-1': { 'criterionName': 'utility-crt-1', 'has_beneficial': false, 'all_essential_yes': true, 'essential_total_yes': 10, 'essential_total_no': 0, 'beneficial_total_yes': 0, 'beneficial_total_no': 0, 'answered_all_complete': true, 'exceeds': false, 'meets': true, 'doesnotmeet': false }, 'utility-crt-2': { 'criterionName': 'utility-crt-2', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 12, 'essential_total_no': 0, 'beneficial_total_yes': 9, 'beneficial_total_no': 0, 'answered_all_complete': true, 'exceeds': true, 'meets': false, 'doesnotmeet': false }, 'utility-crt-3': { 'criterionName': 'utility-crt-3', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 8, 'essential_total_no': 0, 'beneficial_total_yes': 5, 'beneficial_total_no': 0, 'answered_all_complete': true, 'exceeds': true, 'meets': false, 'doesnotmeet': false }, 'utility-crt-4': { 'criterionName': 'utility-crt-4', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 8, 'essential_total_no': 0, 'beneficial_total_yes': 4, 'beneficial_total_no': 0, 'answered_all_complete': true, 'exceeds': true, 'meets': false, 'doesnotmeet': false }, 'utility-crt-5': { 'criterionName': 'utility-crt-5', 'has_beneficial': true, 'all_essential_yes': true, 'essential_total_yes': 2, 'essential_total_no': 0, 'beneficial_total_yes': 3, 'beneficial_total_no': 0, 'answered_all_complete': true, 'exceeds': true, 'meets': false, 'doesnotmeet': false }},
  criterionClickedTitles: {},
  criterionCompletionStatuses: {},
  criterionEfficacyStudies: {},
  currentPrintButton: {},
  curriculumTitle: '',
  dimensionOverallScores: {},
  distinctiveCompletedDate: {},
  resetPrintButtonState: () => {}
};

afterAll( () => {
  result.unmount();
} );

test( 'Utility Print Page renders correctly', () => {
  result = renderer.create(
    <UtilityPrintPage {...utilityProps}/>
  );
  let tree = result.toJSON();
  expect( tree ).toMatchSnapshot();
} );
