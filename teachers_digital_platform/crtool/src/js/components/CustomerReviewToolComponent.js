import React from "react";
import resolveUrl from "resolve-url";

import C from "../constants";
import SummaryButton from "./buttons/SummaryButton";
import SaveWorkModal from "./dialogs/SaveWorkModal";
import StartOverModal from "./dialogs/StartOverModal";
import DistinctiveMenuBar from "./distinctives/DistinctiveMenuBar";
import SurveyPageContainer from "./pages/SurveyPageContainer";
import PageInstructionsComponent from "./PageInstructionsComponent";

export default class CustomerReviewToolComponent extends React.Component {
    constructor() {
        super();
        this.state = {
        currentPage: localStorage.getItem(C.START_PAGE),

        contentInProgress: localStorage.getItem(C.CONTENT_STATUS),
        qualityInProgress: localStorage.getItem(C.QUALITY_STATUS),
        utilityInProgress: localStorage.getItem(C.UTILITY_STATUS),
        efficacyInProgress: localStorage.getItem(C.EFFICACY_STATUS),

        contentSummaryButton: localStorage.getItem(C.CONTENT_SUMMARY_BUTTON_ENABLED) || C.STATUS_IN_PROGRESS,
        qualitySummaryButton: localStorage.getItem(C.QUALITY_SUMMARY_BUTTON_ENABLED) || C.STATUS_IN_PROGRESS,
        utilitySummaryButton: localStorage.getItem(C.UTILITY_SUMMARY_BUTTON_ENABLED) || C.STATUS_IN_PROGRESS,
        efficacySummaryButton: localStorage.getItem(C.EFFICACY_SUMMARY_BUTTON_ENABLED) || C.STATUS_IN_PROGRESS,

        curriculumTitle: localStorage.getItem("curriculumTitle"),
        publicationDate: localStorage.getItem("publicationDate"),
        gradeRange: localStorage.getItem("gradeRange"),

        criterionAnswers: JSON.parse(localStorage.getItem("criterionAnswers")) || {},
        criterionCompletionStatuses: JSON.parse(localStorage.getItem("criterionCompletionStatus")) || {},
        };
    }

    /*
     * Remove all values frmo localStorage.
     * Used for starting a new review
     */
    clearLocalStorage() {
        localStorage.clear();
        this.distinctiveClicked(C.START_PAGE);

        this.setDistinctiveStatus(C.CONTENT_PAGE, C.STATUS_IN_START);
        this.setDistinctiveStatus(C.UTILITY_PAGE, C.STATUS_IN_START);
        this.setDistinctiveStatus(C.QUALITY_PAGE, C.STATUS_IN_START);
        this.setDistinctiveStatus(C.EFFICACY_PAGE, C.STATUS_IN_START);

        this.setState({criterionAnswers: {} });
        this.setState({criterionCompletionStatuses: {} });

        let startPage = resolveUrl(window.location.href, C.START_PAGE_RELATIVE_URL);
        window.location = startPage;
    }

    isCriterionValueEmpty(key, alteredCriterionObjects) {
        return alteredCriterionObjects[key] === "" || alteredCriterionObjects === undefined;
    }

    isKeyInCriterion(key, currentCriterion) {
        return key.startsWith(currentCriterion.toLowerCase());
    }

    /*
     * Verify all the criteria for a single criterion has been met
     */
    isCriterionComplete(alteredCriterionObjects, currentCriterion) {
        for (var key in alteredCriterionObjects) {
            if (this.isKeyInCriterion(key, currentCriterion) && 
                this.isRequiredCriterion(key) &&
                this.isCriterionValueEmpty(key, alteredCriterionObjects)) {
                return false;
            }
        }
        return true;
    }

    /*
     * Verify all the criteria for a whole distinctive has been met
     */
    isDistinctiveComplete(alteredCriterionObjects, changedDistinctive) {
        for (var key in alteredCriterionObjects) {
            if (this.isCriterionInDistinctive(key, changedDistinctive) && 
                this.isRequiredCriterion(key) &&
                this.isCriterionValueEmpty(key, alteredCriterionObjects)) {
                return false;
            }
        }
        return true;
    }

    isCriterionInDistinctive(key, changedDistinctive) {
        return key.startsWith(changedDistinctive.toLowerCase());
    }

    isRequiredCriterion(key) {
        return !key.includes("optional");
    }

    initializeAnswerObjects(fields) {
        let alteredCriterionObjects =  this.state.criterionAnswers;
        let alteredCriterionStatuses =  this.state.criterionCompletionStatuses;
        for (const key in fields) {
            if (alteredCriterionObjects[key] === undefined) {
                alteredCriterionObjects[key] = "";
            }

            let currentCriterion = key.substring(0, key.indexOf("."));
            if (alteredCriterionStatuses[currentCriterion] === undefined) {
                alteredCriterionStatuses[currentCriterion] = "";
            }
        }

        this.saveCriterionAnswers(alteredCriterionObjects);
        this.saveCriterionCompletionStatuses(alteredCriterionStatuses);
    }

    /*
     * The value of a criterion has changed we need to update localStorage 
     * and update any other states in the application
     */
    changeCriterionAnswer(distinctive, key, val) {
        let alteredCriterionObjects =  this.state.criterionAnswers
        alteredCriterionObjects[key] = val;

        alteredCriterionObjects = this.setCriterionAnswersState(alteredCriterionObjects);

        this.calculateCriterionCompletion(alteredCriterionObjects, distinctive, key);
        this.calculateDistinctiveCompletion(alteredCriterionObjects, distinctive);
    }

    calculateCriterionCompletion(alteredCriterionObjects, changedDistinctive, key) {
        let currentCriterion = key.substring(0, key.indexOf("."));

        if (this.isCriterionComplete(alteredCriterionObjects, currentCriterion)) {
            // Use the ICON Check so we can just pass that down and now have to add logic later
            this.setCriterionCompletionStatuses(currentCriterion, C.ICON_CHECK);
        }
        else {
            this.setCriterionCompletionStatuses(currentCriterion, C.STATUS_IN_PROGRESS);
        }
    }

    calculateDistinctiveCompletion(alteredCriterionObjects, changedDistinctive) {
        if (this.isDistinctiveComplete(alteredCriterionObjects, changedDistinctive)) {
            this.setSummaryButtonEnabled(changedDistinctive, C.STATUS_COMPLETE);
        }
        else {
            this.setDistinctiveStatus(changedDistinctive, C.STATUS_IN_PROGRESS);
        }
    }

    /*
     * Manage state for specified criterion
     */
    setCriterionAnswersState(key, val) {
        let alteredCriterionAnswers =  this.state.criterionAnswers
        alteredCriterionAnswers[key] = val;

        this.saveCriterionAnswers(alteredCriterionAnswers);
        return alteredCriterionAnswers;
    }

    /*
     * Set state values for all criterion values
     */
    saveCriterionAnswers(alteredCriterionAnswers) {
        localStorage.setItem("criterionAnswers", JSON.stringify(alteredCriterionAnswers));
        this.setState({criterionAnswers: alteredCriterionAnswers});
    }

    /*
     * Set state values for all criterion completion statuses
     */
    saveCriterionCompletionStatuses(alteredCriterionCompletionStatues) {
        localStorage.setItem("criterionCompletionStatuses", JSON.stringify(alteredCriterionCompletionStatues));
        this.setState({criterionCompletionStatuses: alteredCriterionCompletionStatues});
    }

    /*
     * Save the Completion Status of each criterion.  This will allow
     * Ease of work flow when loading pages based on Criterion status
     */
    setCriterionCompletionStatuses(criterion, status) {
        let alteredData =  this.state.criterionCompletionStatuses
        alteredData[criterion] = status;

        localStorage.setItem("criterionCompletionStatus", JSON.stringify(alteredData));
        this.setState({criterionCompletionStatus: alteredData})
    }

    handleFinalSummaryButtonClick() {
        this.distinctiveClicked(C.FINAL_SUMMARY_PAGE);
    }

    handleSummaryButtonClick() {
        this.setDistinctiveStatus(this.state.currentPage, C.STATUS_COMPLETE);
    }

    /*
     * Set the current criterion Summary Button status
     */
    setSummaryButtonEnabled(changedDistinctive, distinctiveStatus) {
        switch(changedDistinctive) {
        case C.CONTENT_PAGE:
            localStorage.setItem(C.CONTENT_SUMMARY_BUTTON_ENABLED, distinctiveStatus);
            this.setState({contentSummaryButton: distinctiveStatus});
            break;
        case C.UTILITY_PAGE:
            localStorage.setItem(C.UTILITY_SUMMARY_BUTTON_ENABLED, distinctiveStatus);
            this.setState({utilitySummaryButton: distinctiveStatus});
            break;
        case C.QUALITY_PAGE:
            localStorage.setItem(C.QUALITY_SUMMARY_BUTTON_ENABLED, distinctiveStatus);
            this.setState({qualitySummaryButton: distinctiveStatus});
            break;
        case C.EFFICACY_PAGE:
            localStorage.setItem(C.EFFICACY_SUMMARY_BUTTON_ENABLED, distinctiveStatus);
            this.setState({efficacySummaryButton: distinctiveStatus});
            break;
        default:
            break;
        }
    }

    /*
     * Set the current Distinctive button status
     */
    setDistinctiveStatus(changedDistinctive, distinctiveStatus) {
        switch(changedDistinctive) {
        case C.CONTENT_PAGE:
            localStorage.setItem(C.CONTENT_STATUS, distinctiveStatus);
            this.setState({contentInProgress: distinctiveStatus});
            break;
        case C.UTILITY_PAGE:
            localStorage.setItem(C.UTILITY_STATUS, distinctiveStatus);
            this.setState({utilityInProgress: distinctiveStatus});
            break;
        case C.QUALITY_PAGE:
            localStorage.setItem(C.QUALITY_STATUS, distinctiveStatus);
            this.setState({qualityInProgress: distinctiveStatus});
            break;
        case C.EFFICACY_PAGE:
            localStorage.setItem(C.EFFICACY_STATUS, distinctiveStatus);
            this.setState({efficacyInProgress: distinctiveStatus});
            break;
        default:
            break;
        }
    }

    /*
     * Track the current Distinctive
     * Allows us to always load the last distinctive worked on
     */
    distinctiveClicked(clickedDistinctive) {
        localStorage.setItem(C.START_PAGE, clickedDistinctive);
        this.setState({currentPage: clickedDistinctive});
    }

    render() {
        return (
            <React.Fragment>
                <div className="l-survey-top">
                  <SaveWorkModal />
                </div>
                <div class="h5 u-mb30">You’re reviewing</div>
                <h1>{this.state.curriculumTitle}</h1>

                <PageInstructionsComponent
                    currentPage={this.state.currentPage} />

                <DistinctiveMenuBar
                    distinctiveClicked={this.distinctiveClicked.bind(this)}
                    currentPage={this.state.currentPage}
                    contentInProgress={this.state.contentInProgress}
                    utilityInProgress={this.state.utilityInProgress}
                    qualityInProgress={this.state.qualityInProgress}
                    efficacyInProgress={this.state.efficacyInProgress}

                    handleFinalSummaryButtonClick={this.handleFinalSummaryButtonClick.bind(this)}
                    contentSummaryButton={this.state.contentSummaryButton}
                    utilitySummaryButton={this.state.utilitySummaryButton}
                    qualitySummaryButton={this.state.qualitySummaryButton}
                    efficacySummaryButton={this.state.efficacySummaryButton} />

                <SurveyPageContainer className="SurveyPage"
                    currentPage={this.state.currentPage}

                    curriculumTitle={this.state.curriculumTitle}
                    publicationDate={this.state.publicationDate}
                    gradeRange={this.state.gradeRange}

                    contentInProgress={this.state.contentInProgress}
                    utilityInProgress={this.state.utilityInProgress}
                    qualityInProgress={this.state.qualityInProgress}
                    efficacyInProgress={this.state.efficacyInProgress}

                    criterionAnswers={this.state.criterionAnswers}
                    changeCriterionAnswer={this.changeCriterionAnswer.bind(this)}
                    clearLocalStorage={this.clearLocalStorage.bind(this)}
                    initializeAnswerObjects={this.initializeAnswerObjects.bind(this)}
                    criterionCompletionStatuses={this.state.criterionCompletionStatuses} />

                <div className="block
                                block__flush-bottom
                                block__padded-top
                                block__border-top">
                    <div className="m-btn-group
                                    m-btn-group__wide">
                        <SummaryButton handleSummaryButtonClick={this.handleSummaryButtonClick.bind(this)}
                            currentPage={this.state.currentPage}
                            contentSummaryButton={this.state.contentSummaryButton}
                            utilitySummaryButton={this.state.utilitySummaryButton}
                            qualitySummaryButton={this.state.qualitySummaryButton}
                            efficacySummaryButton={this.state.efficacySummaryButton} />

                        <StartOverModal clearLocalStorage={this.clearLocalStorage.bind(this)}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
