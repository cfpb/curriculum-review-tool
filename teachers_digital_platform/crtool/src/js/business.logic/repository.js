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

        this.setDistinctiveStatus(this, C.CONTENT_PAGE, C.STATUS_IN_START);
        this.setDistinctiveStatus(this, C.UTILITY_PAGE, C.STATUS_IN_START);
        this.setDistinctiveStatus(this, C.QUALITY_PAGE, C.STATUS_IN_START);
        this.setDistinctiveStatus(this, C.EFFICACY_PAGE, C.STATUS_IN_START);

        this.saveStudyAnsers(this, {});
        this.saveCriterionScores(this, {});
        this.saveCriterionAnswers(this, {});
        this.setCriterionTitleLinkClicked(this, {});
        this.saveCriterionEfficacyStudies(this, [0]);
        this.saveDistinctiveCompletionDates(this, {});
        this.saveCriterionGroupCompletionStatuses(this, {});
    },

    /*
     * Get data from localStorage
     */
    getCurrentPage() {
        return localStorage.getItem(C.START_PAGE);
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

    getContentSummaryButton() {
        return localStorage.getItem(C.CONTENT_SUMMARY_BUTTON_ENABLED) || C.STATUS_IN_PROGRESS;
    },

    getQualitySummaryButton() {
        return localStorage.getItem(C.QUALITY_SUMMARY_BUTTON_ENABLED) || C.STATUS_IN_PROGRESS;
    },

    getUtilitySummaryButton() {
        return localStorage.getItem(C.UTILITY_SUMMARY_BUTTON_ENABLED) || C.STATUS_IN_PROGRESS;
    },

    getEfficacySummaryButton() {
        return localStorage.getItem(C.EFFICACY_SUMMARY_BUTTON_ENABLED) || C.STATUS_IN_PROGRESS;
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

    getDistinctiveCompletedDate() {
        return JSON.parse(localStorage.getItem("distinctiveCompletedDate")) || {};
    },

    getCriterionCompletionSatuses() {
        return JSON.parse(localStorage.getItem("criterionCompletionStatuses")) || {};
    },

    getCriterionClickedTitles() {
        return JSON.parse(localStorage.getItem("criterionClickedTitles")) || {};
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

    /*
     * Set the current criterion Summary Button status
     */
    setSummaryButtonEnabled(component, changedDistinctive, distinctiveStatus) {
        switch(changedDistinctive) {
        case C.CONTENT_PAGE:
            localStorage.setItem(C.CONTENT_SUMMARY_BUTTON_ENABLED, distinctiveStatus);
            component.setState({contentSummaryButton: distinctiveStatus});
            break;
        case C.UTILITY_PAGE:
            localStorage.setItem(C.UTILITY_SUMMARY_BUTTON_ENABLED, distinctiveStatus);
            component.setState({utilitySummaryButton: distinctiveStatus});
            break;
        case C.QUALITY_PAGE:
            localStorage.setItem(C.QUALITY_SUMMARY_BUTTON_ENABLED, distinctiveStatus);
            component.setState({qualitySummaryButton: distinctiveStatus});
            break;
        case C.EFFICACY_PAGE:
            localStorage.setItem(C.EFFICACY_SUMMARY_BUTTON_ENABLED, distinctiveStatus);
            component.setState({efficacySummaryButton: distinctiveStatus});
            break;
        default:
            break;
        }
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
    }
}

export default Repository;