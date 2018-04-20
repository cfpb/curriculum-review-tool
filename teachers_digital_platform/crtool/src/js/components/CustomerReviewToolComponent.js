import React from "react";
import resolveUrl from "resolve-url";

import C from "../constants";
import SummaryButton from "./buttons/SummaryButton";
import SaveWorkModal from "./dialogs/SaveWorkModal";
import StartOverModal from "./dialogs/StartOverModal";
import DistinctiveMenuBar from "./distinctives/DistinctiveMenuBar";
import SurveyPageContainer from "./pages/SurveyPageContainer";
import PageInstructionsComponent from "./PageInstructionsComponent";
import FinalSummaryPage from "./pages/FinalSummaryPage";
import FinalPrintPage from "./pages/FinalPrintPage";
import DateTimeFormater from "../dateTimeFormatter";
import Repository from "../repository";

export default class CustomerReviewToolComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: Repository.getCurrentPage(),

            contentInProgress: Repository.getContentInProgress(),
            qualityInProgress: Repository.getQualityInProgress(),
            utilityInProgress: Repository.getUtilityInProgress(),
            efficacyInProgress: Repository.getEfficacyInProgress(),

            contentSummaryButton: Repository.getContentSummaryButton(),
            qualitySummaryButton: Repository.getQualitySummaryButton(),
            utilitySummaryButton: Repository.getUtilitySummaryButton(),
            efficacySummaryButton: Repository.getEfficacySummaryButton(),

            curriculumTitle: Repository.getCurriculumTitle(),
            publicationDate: Repository.getPublicationDate(),
            gradeRange: Repository.getGradeRange(),

            criterionScores: Repository.getCriterionScores(),
            criterionAnswers: Repository.getCriterionAnswers(),
            distinctiveCompletedDate: Repository.getDistinctiveCompletedDate(),
            criterionCompletionStatuses: Repository.getCriterionCompletionSatuses(),
        };
    }

    /*
     * Remove all values frmo localStorage.
     * Used for starting a new review
     */
    clearLocalStorage() {
        Repository.clearAllData();
        Repository.saveCurrentPage(this, C.START_PAGE);

        Repository.setDistinctiveStatus(this, C.CONTENT_PAGE, C.STATUS_IN_START);
        Repository.setDistinctiveStatus(this, C.UTILITY_PAGE, C.STATUS_IN_START);
        Repository.setDistinctiveStatus(this, C.QUALITY_PAGE, C.STATUS_IN_START);
        Repository.setDistinctiveStatus(this, C.EFFICACY_PAGE, C.STATUS_IN_START);

        Repository.saveCriterionScores(this, {});
        Repository.saveCriterionAnswers(this, {});
        Repository.saveDistinctiveCompletionDates(this, {});
        Repository.saveCriterionCompletionStatuses(this, {});

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
        let criterionScore = {
            all_yes:true,
            total_yes:0,
            total_no:0,
        }

        let isCriterionCompleteReturnValue = true;
        let currentCriterionGroup = this.getCriterionGroupName(currentCriterion);
        for (var key in alteredCriterionObjects) {
            if (this.isKeyInCriterion(key, currentCriterion) &&
                this.isRequiredCriterion(key) &&
                this.isCriterionValueEmpty(key, alteredCriterionObjects)) {

                criterionScore.all_yes = false;
                isCriterionCompleteReturnValue = false;
            }
            else if (this.isKeyInCriterion(key, currentCriterion) &&
                     this.isRequiredCriterion(key)) {

                if (alteredCriterionObjects[key] === "no") {
                    criterionScore.total_no += 1;
                    criterionScore.all_yes = false;
                }
                else {
                    criterionScore.total_yes += 1;
                }
            }
        }

        this.setCriterionScoreState(currentCriterionGroup, criterionScore);
        return isCriterionCompleteReturnValue;
    }

    getCriterionGroupName(currentCriterion) {
        if (currentCriterion.includes(".")){
            return (currentCriterion.substring(0, currentCriterion.lastIndexOf(".")));
        }

        return currentCriterion;
    }

    /*
     * Verify all the criteria for a whole distinctive has been met
     */
    isDistinctiveComplete(alteredCriterionObjects, changedDistinctive) {
        for (var statusKey in this.state.criterionCompletionStatuses) {
            if (this.isCriterionInDistinctive(statusKey, changedDistinctive) &&
                this.state.criterionCompletionStatuses[statusKey] !== C.ICON_CHECK_ROUND) {
                    return false;
            }
        }

        for (var criterionKey in alteredCriterionObjects) {
            if (this.isCriterionInDistinctive(criterionKey, changedDistinctive) &&
                this.isRequiredCriterion(criterionKey) &&
                this.isCriterionValueEmpty(criterionKey, alteredCriterionObjects)) {
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
        let alteredCriterionScores =  this.state.criterionScores;
        let alteredCriterionObjects =  this.state.criterionAnswers;
        let alteredCriterionStatuses =  this.state.criterionCompletionStatuses;
        for (const key in fields) {
            if (alteredCriterionObjects[key] === undefined) {
                alteredCriterionObjects[key] = "";
            }

            let currentCriterion = key.substring(0, key.indexOf("."));
            let currentCriterionGroup = this.getCriterionGroupName(currentCriterion);
            if (alteredCriterionStatuses[currentCriterion] === undefined) {
                alteredCriterionStatuses[currentCriterion] = C.STATUS_IN_START;

                let criterionScore = {
                    all_yes:false,
                    total_yes:0,
                    total_no:0,
                }
                alteredCriterionScores[currentCriterionGroup] = criterionScore;
            }
        }

        Repository.saveCriterionScores(this, alteredCriterionScores);
        Repository.saveCriterionAnswers(this, alteredCriterionObjects);
        Repository.saveCriterionCompletionStatuses(this, alteredCriterionStatuses);
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
        let criterionKey = key.substring(0, key.indexOf("."));

        if (this.isCriterionComplete(alteredCriterionObjects, criterionKey)) {
            // Use the ICON Check so we can just pass that down and now have to add logic later
            this.setCriterionCompletionStatuses(criterionKey, C.ICON_CHECK_ROUND);
        }
        else {
            this.setCriterionCompletionStatuses(criterionKey, C.STATUS_IN_PROGRESS);
        }
    }

    setDistinctiveBackToInProgress(distinctiveName) {
        Repository.setDistinctiveStatus(this, distinctiveName, C.STATUS_IN_PROGRESS);
        Repository.saveCurrentPage(this, distinctiveName);
    }

    distinctiveClicked(distinctiveName) {
        Repository.saveCurrentPage(this, distinctiveName);
    }

    setCriterionStatusToInProgress(criterionKey) {
        this.setCriterionCompletionStatuses(criterionKey, C.STATUS_IN_PROGRESS);
    }

    setCriterionStatusToInStart(criterionKey) {
        this.setCriterionCompletionStatuses(criterionKey, C.STATUS_IN_START);
    }

    calculateDistinctiveCompletion(alteredCriterionObjects, changedDistinctive) {
        if (this.isDistinctiveComplete(alteredCriterionObjects, changedDistinctive)) {
            Repository.setSummaryButtonEnabled(this, changedDistinctive, C.STATUS_COMPLETE);
        }
        else {
            Repository.setDistinctiveStatus(this, changedDistinctive, C.STATUS_IN_PROGRESS);
        }
    }

    /*
     * Set state values for dimention finish date
     */
    setDistinctiveCompletionDateNow(distinctiveName) {
        let distinctiveCompletionDates =  this.state.distinctiveCompletedDate;

        console.log("setDistinctiveCompletionDateNow: " + distinctiveName);
        console.log("current value: " + distinctiveCompletionDates[distinctiveName]);
        if (distinctiveCompletionDates[distinctiveName] === undefined ||
            distinctiveCompletionDates[distinctiveName] === "") {
                
            let completedDate = DateTimeFormater.getDateNowFormat();
            distinctiveCompletionDates[distinctiveName] = completedDate;

            console.log("new value: " + completedDate);

            Repository.saveDistinctiveCompletionDates(this, distinctiveCompletionDates);
        }
    }

    /*
     * Manage state for specified criterion
     */
    setCriterionScoreState(key, val) {
        let alteredCriterionScores =  this.state.criterionScores;
        alteredCriterionScores[key] = val;

        Repository.saveCriterionScores(this, alteredCriterionScores);
        return alteredCriterionScores;
    }

    /*
     * Manage state for specified criterion
     */
    setCriterionAnswersState(key, val) {
        let alteredCriterionAnswers =  this.state.criterionAnswers
        alteredCriterionAnswers[key] = val;

        Repository.saveCriterionAnswers(this, alteredCriterionAnswers);
        return alteredCriterionAnswers;
    }

    /*
     * Save the Completion Status of each criterion.  This will allow
     * Ease of work flow when loading pages based on Criterion status
     */
    setCriterionCompletionStatuses(criterion, status) {
        let alteredData =  this.state.criterionCompletionStatuses
        alteredData[criterion] = status;

        Repository.saveCriterionCompletionStatuses(this, alteredData);
    }

    handleFinalSummaryButtonClick() {
        Repository.saveCurrentPage(this, C.FINAL_SUMMARY_PAGE);
    }

    handleSummaryButtonClick() {
        this.setDistinctiveCompletionDateNow(this.state.currentPage);
        Repository.setDistinctiveStatus(this, this.state.currentPage, C.STATUS_COMPLETE);
    }

    render() {
        const applicationProps = {
            currentPage:this.state.currentPage,
            curriculumTitle:this.state.curriculumTitle,
            publicationDate:this.state.publicationDate,
            distinctiveCompletedDate:this.state.distinctiveCompletedDate,
            gradeRange:this.state.gradeRange,

            contentInProgress:this.state.contentInProgress,
            utilityInProgress:this.state.utilityInProgress,
            qualityInProgress:this.state.qualityInProgress,
            efficacyInProgress:this.state.efficacyInProgress,

            criterionAnswers:this.state.criterionAnswers,
            criterionScores:this.state.criterionScores,
            criterionCompletionStatuses:this.state.criterionCompletionStatuses,

            setCriterionStatusToInStart:this.setCriterionStatusToInStart.bind(this),
            changeCriterionAnswer:this.changeCriterionAnswer.bind(this),
            clearLocalStorage:this.clearLocalStorage.bind(this),
            initializeAnswerObjects:this.initializeAnswerObjects.bind(this),
            distinctiveClicked:this.distinctiveClicked.bind(this),
            setDistinctiveBackToInProgress:this.setDistinctiveBackToInProgress.bind(this),
            setCriterionStatusToInProgress:this.setCriterionStatusToInProgress.bind(this),
        };

        const dimensionMenuProps = {
            currentPage:this.state.currentPage,
            contentInProgress:this.state.contentInProgress,
            utilityInProgress:this.state.utilityInProgress,
            qualityInProgress:this.state.qualityInProgress,
            efficacyInProgress:this.state.efficacyInProgress,

            contentSummaryButton:this.state.contentSummaryButton,
            utilitySummaryButton:this.state.utilitySummaryButton,
            qualitySummaryButton:this.state.qualitySummaryButton,
            efficacySummaryButton:this.state.efficacySummaryButton,

            distinctiveClicked:this.distinctiveClicked.bind(this),
            handleFinalSummaryButtonClick:this.handleFinalSummaryButtonClick.bind(this),
        };

        const summaryButtonProps = {
            currentPage:this.state.currentPage,

            contentSummaryButton:this.state.contentSummaryButton,
            utilitySummaryButton:this.state.utilitySummaryButton,
            qualitySummaryButton:this.state.qualitySummaryButton,
            efficacySummaryButton:this.state.efficacySummaryButton,

            handleSummaryButtonClick:this.handleSummaryButtonClick.bind(this),
        };

        if (this.state.currentPage === C.FINAL_SUMMARY_PAGE) {
            return (<FinalSummaryPage {...applicationProps} />);
        } else if (this.state.currentPage === C.FINAL_PRINT_PAGE) {
            return (<FinalPrintPage {...applicationProps} handleFinalSummaryButtonClick={this.handleFinalSummaryButtonClick.bind(this)} />);
        } else {
            return (
                <React.Fragment>
                    <div className="l-survey-top">
                        <SaveWorkModal
                            buttonText="Can I save my work?"
                            hasIcon="true" />
                    </div>
                    <div class="h5 u-mb30">You’re reviewing</div>
                    <h1>{this.state.curriculumTitle}</h1>

                    <PageInstructionsComponent currentPage={this.state.currentPage} />
                    <DistinctiveMenuBar {...dimensionMenuProps} />
                    <SurveyPageContainer className="SurveyPage" {...applicationProps} {...dimensionMenuProps} />

                    <div className="block
                                block__flush-bottom
                                block__padded-top
                                block__border-top">
                        <div className="m-btn-group
                                    m-btn-group__wide">
                            <SummaryButton {...summaryButtonProps} />
                            <StartOverModal clearLocalStorage={this.clearLocalStorage.bind(this)}/>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}
