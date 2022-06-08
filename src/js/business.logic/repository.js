import C from './constants';
import crtoolLocalStorage from '../../crtoolLocalStorage';

const Repository = {

  /*
     * Clear the repository
     */
  clearAllData() {
    crtoolLocalStorage.clear();
  },

  /*
     * Establish default empty states for application data
     */
  resetApplicationData() {
    this.clearAllData();
  },

  /*
     * Get data from localStorage
     */
  getCurrentPage() {
    return crtoolLocalStorage.getItem( C.START_PAGE ) || C.START_PAGE;
  },

  getPrintButtonPage() {
    return crtoolLocalStorage.getItem( 'currentPrintButton' ) || C.START_PAGE;
  },

  getContentInProgress() {
    return crtoolLocalStorage.getItem( C.CONTENT_STATUS );
  },

  getQualityInProgress() {
    return crtoolLocalStorage.getItem( C.QUALITY_STATUS );
  },

  getUtilityInProgress() {
    return crtoolLocalStorage.getItem( C.UTILITY_STATUS );
  },

  getEfficacyInProgress() {
    return crtoolLocalStorage.getItem( C.EFFICACY_STATUS );
  },

  getContentShowErrors() {
    return crtoolLocalStorage.getItem( C.CONTENT_SHOW_ERRORS ) === 'true';
  },

  getQualityShowErrors() {
    return crtoolLocalStorage.getItem( C.QUALITY_SHOW_ERRORS ) === 'true';
  },

  getUtilityShowErrors() {
    return crtoolLocalStorage.getItem( C.UTILITY_SHOW_ERRORS ) === 'true';
  },

  getEfficacyShowErrors() {
    return crtoolLocalStorage.getItem( C.EFFICACY_SHOW_ERRORS ) === 'true';
  },

  getContentIsDone() {
    return crtoolLocalStorage.getItem( C.CONTENT_IS_DONE ) === 'true';
  },

  getQualityIsDone() {
    return crtoolLocalStorage.getItem( C.QUALITY_IS_DONE ) === 'true';
  },

  getUtilityIsDone() {
    return crtoolLocalStorage.getItem( C.UTILITY_IS_DONE ) === 'true';
  },

  getEfficacyIsDone() {
    return crtoolLocalStorage.getItem( C.EFFICACY_IS_DONE ) === 'true';
  },

  getContentViewSummary() {
    return crtoolLocalStorage.getItem( C.CONTENT_SUMMARY_VIEW ) === 'true';
  },

  getQualityViewSummary() {
    return crtoolLocalStorage.getItem( C.QUALITY_SUMMARY_VIEW ) === 'true';
  },

  getUtilityViewSummary() {
    return crtoolLocalStorage.getItem( C.UTILITY_SUMMARY_VIEW ) === 'true';
  },

  getEfficacyViewSummary() {
    return crtoolLocalStorage.getItem( C.EFFICACY_SUMMARY_VIEW ) === 'true';
  },

  getCurriculumTitle() {
    return crtoolLocalStorage.getItem( 'curriculumTitle' );
  },

  getCurriculumId() {
    return crtoolLocalStorage.getItem( 'id' );
  },

  getPublicationDate() {
    return crtoolLocalStorage.getItem( 'publicationDate' );
  },

  getGradeRange() {
    return crtoolLocalStorage.getItem( 'gradeRange' );
  },

  getCriterionScores() {
    return JSON.parse( crtoolLocalStorage.getItem( 'criterionScores' ) ) || {};
  },

  getStudyAnswers() {
    return JSON.parse( crtoolLocalStorage.getItem( 'studyAnswers' ) ) || {};
  },

  getNumberFinalSummaryViews() {
    return crtoolLocalStorage.getItem( 'numberFinalSummaryViews' ) || 0;
  },

  getCriterionAnswers() {
    return JSON.parse( crtoolLocalStorage.getItem( 'criterionAnswers' ) ) || {};
  },

  getCriterionEfficacyStudies() {
    return JSON.parse( crtoolLocalStorage.getItem( 'criterionEfficacyStudies' ) ) || [ 0 ];
  },

  getFinishAddingEfficacyStudies() {
    return crtoolLocalStorage.getItem( 'finishAddingEfficacyStudies' ) === 'true';
  },

  getDistinctiveCompletedDate() {
    return JSON.parse( crtoolLocalStorage.getItem( 'distinctiveCompletedDate' ) ) || {};
  },

  getDimensionOverallScores() {
    return JSON.parse( crtoolLocalStorage.getItem( 'dimensionOverallScores' ) ) || {};
  },

  getCriterionCompletionStatuses() {
    return JSON.parse( crtoolLocalStorage.getItem( 'criterionCompletionStatuses' ) ) || {};
  },

  getFinalSummaryShowEntireReview() {
    return crtoolLocalStorage.getItem( 'finalSummaryShowEntireReview' );
  },

  getCriterionClickedTitles() {
    return JSON.parse( crtoolLocalStorage.getItem( 'criterionClickedTitles' ) ) || {};
  },

  savedimensionOverallScores( component, dimensionOverallScores ) {
    crtoolLocalStorage.setItem( 'dimensionOverallScores', JSON.stringify( dimensionOverallScores ) );
    component.setState( { dimensionOverallScores: dimensionOverallScores } );
  },

  /*
     * Set state values for criterion score
     */
  saveDistinctiveCompletionDates( component, distinctiveCompletionDates ) {
    crtoolLocalStorage.setItem( 'distinctiveCompletedDate', JSON.stringify( distinctiveCompletionDates ) );
    component.setState( { distinctiveCompletedDate: distinctiveCompletionDates } );
  },

  /*
     * Set state values for criterion score
     */
  saveCriterionScores( component, alteredCriterionScores ) {
    crtoolLocalStorage.setItem( 'criterionScores', JSON.stringify( alteredCriterionScores ) );
    component.setState( { criterionScores: alteredCriterionScores } );
  },

  saveStudyAnswers( component, alteredStudies ) {
    crtoolLocalStorage.setItem( 'studyAnswers', JSON.stringify( alteredStudies ) );
    component.setState( { studyAnswers: alteredStudies } );
  },

  saveNumberFinalSummaryViews( component, count ) {
    crtoolLocalStorage.setItem( 'numberFinalSummaryViews', count );
    component.setState( { numberFinalSummaryViews: count } );
  },

  saveContentShowErrors( component, value ) {
    crtoolLocalStorage.setItem( C.CONTENT_SHOW_ERRORS, value );
    component.setState( { contentShowErrors: value } );
  },

  saveQualityShowErrors( component, value ) {
    crtoolLocalStorage.setItem( C.QUALITY_SHOW_ERRORS, value );
    component.setState( { qualityShowErrors: value } );
  },

  saveUtilityShowErrors( component, value ) {
    crtoolLocalStorage.setItem( C.UTILITY_SHOW_ERRORS, value );
    component.setState( { utilityShowErrors: value } );
  },

  saveEfficacyShowErrors( component, value ) {
    crtoolLocalStorage.setItem( C.EFFICACY_SHOW_ERRORS, value );
    component.setState( { efficacyShowErrors: value } );
  },

  /*
     * Set state values for all criterion values
     */
  saveCriterionAnswers( component, alteredCriterionAnswers ) {
    crtoolLocalStorage.setItem( 'criterionAnswers', JSON.stringify( alteredCriterionAnswers ) );
    component.setState( { criterionAnswers: alteredCriterionAnswers } );
  },

  /*
     * Set state values for all criterion efficacy studies
     */
  saveCriterionEfficacyStudies( component, alteredCriterionEfficacyStudies ) {
    crtoolLocalStorage.setItem( 'criterionEfficacyStudies', JSON.stringify( alteredCriterionEfficacyStudies ) );
    component.setState( { criterionEfficacyStudies: alteredCriterionEfficacyStudies } );
  },

  /*
     *
     */
  saveFinishAddingEfficacyStudies( component, value ) {
    crtoolLocalStorage.setItem( 'finishAddingEfficacyStudies', value );
    component.setState( { finishAddingEfficacyStudies: value } );
  },

  /*
     * Set value for finalSummaryShowEntireReview
     */
  saveFinalSummaryShowEntireReview( component, value ) {
    crtoolLocalStorage.setItem( 'finalSummaryShowEntireReview', value );
    component.setState( { finalSummaryShowEntireReview: value } );
  },

  /*
     * Set state values for all criterion completion statuses
     */
  saveCriterionGroupCompletionStatuses( component, alteredCriterionCompletionStatuses ) {
    crtoolLocalStorage.setItem( 'criterionCompletionStatuses', JSON.stringify( alteredCriterionCompletionStatuses ) );
    component.setState( { criterionCompletionStatuses: alteredCriterionCompletionStatuses } );
  },

  /*
     * Set the state values for all clicked criterion titles
     */
  setCriterionTitleLinkClicked( component, alteredCriterionClickedTitles ) {
    crtoolLocalStorage.setItem( 'criterionClickedTitles', JSON.stringify( alteredCriterionClickedTitles ) );
    component.setState( { criterionClickedTitles: alteredCriterionClickedTitles } );
  },

  /*
     * Track the current Distinctive
     * Allows us to always load the last distinctive worked on
     */
  saveCurrentPage( component, clickedDistinctive ) {
    crtoolLocalStorage.setItem( C.START_PAGE, clickedDistinctive );
    crtoolLocalStorage.saveIfDirty();
    component.setState( { currentPage: clickedDistinctive } );
  },

  savePrintButtonPage( component, distinctiveName ) {
    crtoolLocalStorage.setItem( 'currentPrintButton', distinctiveName );
    component.setState( { currentPrintButton: distinctiveName } );
  },

  /*
     * Set the current Distinctive button status
     */
  setDistinctiveStatus( component, changedDistinctive, distinctiveStatus ) {
    switch ( changedDistinctive ) {
      case C.CONTENT_PAGE:
        crtoolLocalStorage.setItem( C.CONTENT_STATUS, distinctiveStatus );
        component.setState( { contentInProgress: distinctiveStatus } );
        break;
      case C.UTILITY_PAGE:
        crtoolLocalStorage.setItem( C.UTILITY_STATUS, distinctiveStatus );
        component.setState( { utilityInProgress: distinctiveStatus } );
        break;
      case C.QUALITY_PAGE:
        crtoolLocalStorage.setItem( C.QUALITY_STATUS, distinctiveStatus );
        component.setState( { qualityInProgress: distinctiveStatus } );
        break;
      case C.EFFICACY_PAGE:
        crtoolLocalStorage.setItem( C.EFFICACY_STATUS, distinctiveStatus );
        component.setState( { efficacyInProgress: distinctiveStatus } );
        break;
      default:
        break;
    }
  },

  /*
     * Set the current Distinctive Done status. Note: once a Distinctive
     * has been marked Done it stays done
     */
  setDistinctiveDoneStatus( component, changedDistinctive ) {
    switch ( changedDistinctive ) {
      case C.CONTENT_PAGE:
        crtoolLocalStorage.setItem( C.CONTENT_IS_DONE, true );
        component.setState( { contentIsDone: true } );
        break;
      case C.UTILITY_PAGE:
        crtoolLocalStorage.setItem( C.UTILITY_IS_DONE, true );
        component.setState( { utilityIsDone: true } );
        break;
      case C.QUALITY_PAGE:
        crtoolLocalStorage.setItem( C.QUALITY_IS_DONE, true );
        component.setState( { qualityIsDone: true } );
        break;
      case C.EFFICACY_PAGE:
        crtoolLocalStorage.setItem( C.EFFICACY_IS_DONE, true );
        component.setState( { efficacyIsDone: true } );
        break;
      default:
        break;
    }
  },

  /*
     * Set the current Distinctive view to either Summary or Survey
     */
  setDistinctiveView( component, changedDistinctive, isSummaryView ) {
    switch ( changedDistinctive ) {
      case C.CONTENT_PAGE:
        crtoolLocalStorage.setItem( C.CONTENT_SUMMARY_VIEW, isSummaryView );
        component.setState( { contentIsSummaryView: isSummaryView } );
        break;
      case C.UTILITY_PAGE:
        crtoolLocalStorage.setItem( C.UTILITY_SUMMARY_VIEW, isSummaryView );
        component.setState( { utilityIsSummaryView: isSummaryView } );
        break;
      case C.QUALITY_PAGE:
        crtoolLocalStorage.setItem( C.QUALITY_SUMMARY_VIEW, isSummaryView );
        component.setState( { qualityIsSummaryView: isSummaryView } );
        break;
      case C.EFFICACY_PAGE:
        crtoolLocalStorage.setItem( C.EFFICACY_SUMMARY_VIEW, isSummaryView );
        component.setState( { efficacyIsSummaryView: isSummaryView } );
        break;
      default:
        break;
    }
  }
};

export default Repository;
