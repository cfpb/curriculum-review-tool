import C from "./constants";

const Repository = {
    /*
     * Clear the repsoitory
     */
    clearAllData() {
        localStorage.clear();
    },

    /*
     * Establish default empty states for application data
     */
    resetApplicationData() {
        this.clearAllData();
        this.saveCurrentPage(this, C.START_PAGE);
        this.savePrintButtonPage(this, C.START_PAGE);
        this.saveFinishAddingEfficacyStudies(this, false);

        this.setDistinctiveStatus(this, C.CONTENT_PAGE, C.STATUS_IN_START);
        this.setDistinctiveStatus(this, C.UTILITY_PAGE, C.STATUS_IN_START);
        this.setDistinctiveStatus(this, C.QUALITY_PAGE, C.STATUS_IN_START);
        this.setDistinctiveStatus(this, C.EFFICACY_PAGE, C.STATUS_IN_START);

        this.setDistinctiveView(this, C.CONTENT_PAGE, false);
        this.setDistinctiveView(this, C.UTILITY_PAGE, false);
        this.setDistinctiveView(this, C.QUALITY_PAGE, false);
        this.setDistinctiveView(this, C.EFFICACY_PAGE, false);

        this.saveStudyAnsers(this, {});
        this.saveCriterionScores(this, {});
        this.saveCriterionAnswers(this, {});
        this.setCriterionTitleLinkClicked(this, {});
        this.saveCriterionEfficacyStudies(this, [0]);
        this.savedimensionOverallScores(this, {});
        this.saveDistinctiveCompletionDates(this, {});
        this.saveFinalSummaryShowEntireReview(this, "");
        this.saveCriterionGroupCompletionStatuses(this, {});
    },

    /*
     * Get data from localStorage
     */
    getCurrentPage() {
        return localStorage.getItem(C.START_PAGE) || C.START_PAGE;
    },

    getPrintButtonPage() {
        return localStorage.getItem("currentPrintButton") || C.START_PAGE;
    },

    getContentInProgress() {
        return localStorage.getItem(C.CONTENT_STATUS);
    },

    getQualityInProgress() {
        return localStorage.getItem(C.QUALITY_STATUS);
    },

    getUtilityInProgress() {
        return localStorage.getItem(C.UTILITY_STATUS);
    },

    getEfficacyInProgress() {
        return localStorage.getItem(C.EFFICACY_STATUS);
    },

    getContentIsDone() {
        return localStorage.getItem(C.CONTENT_IS_DONE);
    },

    getQualityIsDone() {
        return localStorage.getItem(C.QUALITY_IS_DONE);
    },

    getUtilityIsDone() {
        return localStorage.getItem(C.UTILITY_IS_DONE);
    },

    getEfficacyIsDone() {
        return localStorage.getItem(C.EFFICACY_IS_DONE);
    },

    getContentViewSummary() {
        return localStorage.getItem(C.CONTENT_SUMMARY_VIEW) || false;
    },

    getQualityViewSummary() {
        return localStorage.getItem(C.QUALITY_SUMMARY_VIEW) || false;
    },

    getUtilityViewSummary() {
        return localStorage.getItem(C.UTILITY_SUMMARY_VIEW) || false;
    },

    getEfficacyViewSummary() {
        return localStorage.getItem(C.EFFICACY_SUMMARY_VIEW) || false;
    },

    getCurriculumTitle() {
        return localStorage.getItem("curriculumTitle");
    },

    getPublicationDate() {
        return localStorage.getItem("publicationDate");
    },

    getGradeRange() {
        return localStorage.getItem("gradeRange");
    },

    getCriterionScores() {
        return JSON.parse(localStorage.getItem("criterionScores")) || {};
    },

    getStudyAnswers() {
        return JSON.parse(localStorage.getItem("studyAnswers")) || {};
    },

    getCriterionAnswers() {
        return JSON.parse(localStorage.getItem("criterionAnswers")) || {};
    },

    getCriterionEfficacyStudies() {
        return JSON.parse(localStorage.getItem("criterionEfficacyStudies")) || [0];
    },

    getFinishAddingEfficacyStudies() {
        return localStorage.getItem("finishAddingEfficacyStudies");
    },

    getDistinctiveCompletedDate() {
        return JSON.parse(localStorage.getItem("distinctiveCompletedDate")) || {};
    },

    getDimensionOverallScores() {
        return JSON.parse(localStorage.getItem("dimensionOverallScores")) || {};
    },

    getCriterionCompletionSatuses() {
        return JSON.parse(localStorage.getItem("criterionCompletionStatuses")) || {};
    },

    getFinalSummaryShowEntireReview() {
        return localStorage.getItem("finalSummaryShowEntireReview");
    },

    getCriterionClickedTitles() {
        return JSON.parse(localStorage.getItem("criterionClickedTitles")) || {};
    },

    savedimensionOverallScores(component, dimensionOverallScores) {
        localStorage.setItem("dimensionOverallScores", JSON.stringify(dimensionOverallScores));
        component.setState({dimensionOverallScores: dimensionOverallScores});
    },

    /*
     * Set state values for criterion score
     */
    saveDistinctiveCompletionDates(component, distinctiveCompletionDates) {
        localStorage.setItem("distinctiveCompletedDate", JSON.stringify(distinctiveCompletionDates));
        component.setState({distinctiveCompletedDate: distinctiveCompletionDates});
    },

    /*
     * Set state values for criterion score
     */
    saveCriterionScores(component, alteredCriterionScores) {
        localStorage.setItem("criterionScores", JSON.stringify(alteredCriterionScores));
        component.setState({criterionScores: alteredCriterionScores});
    },

    saveStudyAnsers(component, alteredStudies) {
        localStorage.setItem("studyAnswers", JSON.stringify(alteredStudies));
        component.setState({studyAnswers: alteredStudies});
    },

    /*
     * Set state values for all criterion values
     */
    saveCriterionAnswers(component, alteredCriterionAnswers) {
        localStorage.setItem("criterionAnswers", JSON.stringify(alteredCriterionAnswers));
        component.setState({criterionAnswers: alteredCriterionAnswers});
    },

    /*
     * Set state values for all criterion efficacy studies
     */
    saveCriterionEfficacyStudies(component, alteredCriterionEfficacyStudies) {
        localStorage.setItem("criterionEfficacyStudies", JSON.stringify(alteredCriterionEfficacyStudies));
        component.setState({criterionEfficacyStudies: alteredCriterionEfficacyStudies});
    },

    /*
     *
     */
    saveFinishAddingEfficacyStudies(component, value) {
        localStorage.setItem("finishAddingEfficacyStudies", value);
        component.setState({finishAddingEfficacyStudies: value});
    },

    /*
     * Set value for finalSummaryShowEntireReview
     */
    saveFinalSummaryShowEntireReview(component, value) {
        localStorage.setItem("finalSummaryShowEntireReview", value);
        component.setState({finalSummaryShowEntireReview: value});
    },

    /*
     * Set state values for all criterion completion statuses
     */
    saveCriterionGroupCompletionStatuses(component, alteredCriterionCompletionStatues) {
        localStorage.setItem("criterionCompletionStatuses", JSON.stringify(alteredCriterionCompletionStatues));
        component.setState({criterionCompletionStatuses: alteredCriterionCompletionStatues});
    },

    /*
     * Set the state values for all clicked criterion titles
     */
    setCriterionTitleLinkClicked(component, alteredCriterionClickedTitles) {
        localStorage.setItem("criterionClickedTitles", JSON.stringify(alteredCriterionClickedTitles));
        component.setState({criterionClickedTitles: alteredCriterionClickedTitles});
    },

    /*
     * Track the current Distinctive
     * Allows us to always load the last distinctive worked on
     */
    saveCurrentPage(component, clickedDistinctive) {
        localStorage.setItem(C.START_PAGE, clickedDistinctive);
        component.setState({currentPage: clickedDistinctive});
    },

    savePrintButtonPage(component, distinctiveName) {
        localStorage.setItem("currentPrintButton", distinctiveName);
        component.setState({currentPrintButton: distinctiveName});
    },

    /*
     * Set the current Distinctive button status
     */
    setDistinctiveStatus(component, changedDistinctive, distinctiveStatus) {
        switch(changedDistinctive) {
        case C.CONTENT_PAGE:
            localStorage.setItem(C.CONTENT_STATUS, distinctiveStatus);
            component.setState({contentInProgress: distinctiveStatus});
            break;
        case C.UTILITY_PAGE:
            localStorage.setItem(C.UTILITY_STATUS, distinctiveStatus);
            component.setState({utilityInProgress: distinctiveStatus});
            break;
        case C.QUALITY_PAGE:
            localStorage.setItem(C.QUALITY_STATUS, distinctiveStatus);
            component.setState({qualityInProgress: distinctiveStatus});
            break;
        case C.EFFICACY_PAGE:
            localStorage.setItem(C.EFFICACY_STATUS, distinctiveStatus);
            component.setState({efficacyInProgress: distinctiveStatus});
            break;
        default:
            break;
        }
    },

    /*
     * Set the current Distinctive Done status. Note: once a Distinctive
     * has been marked Done it stays done
     */
    setDistinctiveDoneStatus(component, changedDistinctive) {
        switch(changedDistinctive) {
        case C.CONTENT_PAGE:
            localStorage.setItem(C.CONTENT_IS_DONE, true);
            component.setState({contentIsDone: true});
            break;
        case C.UTILITY_PAGE:
            localStorage.setItem(C.UTILITY_IS_DONE, true);
            component.setState({utilityIsDone: true});
            break;
        case C.QUALITY_PAGE:
            localStorage.setItem(C.QUALITY_IS_DONE, true);
            component.setState({qualityIsDone: true});
            break;
        case C.EFFICACY_PAGE:
            localStorage.setItem(C.EFFICACY_IS_DONE, true);
            component.setState({efficacyIsDone: true});
            break;
        default:
            break;
        }
    },

    /*
     * Set the current Distinctive view to either Summary or Survey
     */
    setDistinctiveView(component, changedDistinctive, isSummaryView) {
        switch(changedDistinctive) {
        case C.CONTENT_PAGE:
            localStorage.setItem(C.CONTENT_SUMMARY_VIEW, isSummaryView);
            component.setState({contentIsSummaryView: isSummaryView});
            break;
        case C.UTILITY_PAGE:
            localStorage.setItem(C.UTILITY_SUMMARY_VIEW, isSummaryView);
            component.setState({utilityIsSummaryView: isSummaryView});
            break;
        case C.QUALITY_PAGE:
            localStorage.setItem(C.QUALITY_SUMMARY_VIEW, isSummaryView);
            component.setState({qualityIsSummaryView: isSummaryView});
            break;
        case C.EFFICACY_PAGE:
            localStorage.setItem(C.EFFICACY_SUMMARY_VIEW, isSummaryView);
            component.setState({efficacyIsSummaryView: isSummaryView});
            break;
        default:
            break;
        }
    }
}

export default Repository;
