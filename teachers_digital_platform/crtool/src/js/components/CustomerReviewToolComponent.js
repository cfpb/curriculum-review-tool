import React from "react";
import resolveUrl from "resolve-url";

import C from "../business.logic/constants";
import SaveWorkModal from "./dialogs/SaveWorkModal";
import DistinctiveMenuBar from "./distinctives/DistinctiveMenuBar";
import FooterButtonAreaComponent from "./pages/partial.pages/FooterButtonAreaComponent";
import SurveyPageContainer from "./pages/SurveyPageContainer";
import PageInstructionsComponent from "./PageInstructionsComponent";
import FinalSummaryPage from "./pages/FinalSummaryPage";
import FinalPrintPage from "./pages/FinalPrintPage";
import DateTimeFormater from "../business.logic/dateTimeFormatter";
import Repository from "../business.logic/repository";
import CriterionService from "../business.logic/criterionService";

export default class CustomerReviewToolComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: Repository.getCurrentPage(),
            finishAddingEfficacyStudies: Repository.getFinishAddingEfficacyStudies(),

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

            studyAnswers: Repository.getStudyAnswers(),
            criterionScores: Repository.getCriterionScores(),
            criterionAnswers: Repository.getCriterionAnswers(),
            criterionClickedTitles: Repository.getCriterionClickedTitles(),
            criterionEfficacyStudies: Repository.getCriterionEfficacyStudies(),
            distinctiveCompletedDate: Repository.getDistinctiveCompletedDate(),
            criterionCompletionStatuses: Repository.getCriterionCompletionSatuses(),
        };
    }

    /*
     * Remove all values frmo localStorage.
     * Used for starting a new review
     */
    clearLocalStorage() {
        Repository.resetApplicationData();

        this.navigateBackToStartPage();
    }

    navigateBackToStartPage() {
        let startPage = resolveUrl(window.location.href, C.START_PAGE_RELATIVE_URL);
        window.location = startPage;
    }

    /*
     * Set state values for dimention finish date
     */
    setDistinctiveCompletionDateNow(distinctiveName) {
        let distinctiveCompletionDates =  this.state.distinctiveCompletedDate;
        if (distinctiveCompletionDates[distinctiveName] === undefined ||
            distinctiveCompletionDates[distinctiveName] === "") {

            let completedDate = DateTimeFormater.getDateNowFormat();
            distinctiveCompletionDates[distinctiveName] = completedDate;
            Repository.saveDistinctiveCompletionDates(this, distinctiveCompletionDates);
        }
    }

    setDistinctiveBackToInProgress(distinctiveName) {
        Repository.setDistinctiveStatus(this, distinctiveName, C.STATUS_IN_PROGRESS);
        Repository.saveCurrentPage(this, distinctiveName);
    }

    distinctiveClicked(distinctiveName) {
        Repository.saveCurrentPage(this, distinctiveName);
    }

    handleFinalSummaryButtonClick() {
        this.setDistinctiveCompletionDateNow(C.FINAL_SUMMARY_PAGE);
        Repository.saveCurrentPage(this, C.FINAL_SUMMARY_PAGE);
    }

    handleSummaryButtonClick() {
        this.setDistinctiveCompletionDateNow(this.state.currentPage);
        Repository.setDistinctiveStatus(this, this.state.currentPage, C.STATUS_COMPLETE);
    }

    initializeStudyAnsers(key, study) {
        CriterionService.initializeStudyAnsers(this, key, study);
    }

    initializeAnswerObjects(fields) {
        CriterionService.initializeAnswerObjects(this, fields);
    }

    initializeEfficacyStudies(efficacyStudyNumber) {
        CriterionService.initializeEfficacyStudies(this, efficacyStudyNumber);
    }

    handleFinishAddingEfficacyStudies(value) {
        CriterionService.handleFinishAddingEfficacyStudies(this, value);
    }

    removeEfficacyStudy(efficacyStudyNumber) {
        CriterionService.removeEfficacyStudy(this, efficacyStudyNumber);
    }

    studyAnswerChanged(studyKey, changedQuestion, newValue) {
        CriterionService.studyAnswerChanged(this, studyKey, changedQuestion, newValue);
    }

    criterionAnswerChanged(distinctiveName, changedQuestion, newValue) {
        CriterionService.criterionAnswerChanged(this, distinctiveName, changedQuestion, newValue);
    }

    setCriterionStatusToInProgress(criterionKey) {
        CriterionService.setCriterionGroupCompletionStatuses(this, criterionKey, C.STATUS_IN_PROGRESS);
    }

    setCriterionTitleLinkClicked(criterionKey) {
        CriterionService.setCriterionTitleLinkClicked(this, criterionKey);
    }

    setCriterionStatusToInStart(criterionKey) {
        CriterionService.setCriterionGroupCompletionStatuses(this, criterionKey, C.STATUS_IN_START);
    }

    render() {
        const applicationProps = {
            currentPage:this.state.currentPage,
            curriculumTitle:this.state.curriculumTitle,
            publicationDate:this.state.publicationDate,
            distinctiveCompletedDate:this.state.distinctiveCompletedDate,
            gradeRange:this.state.gradeRange,
            finishAddingEfficacyStudies:this.state.finishAddingEfficacyStudies,

            contentInProgress:this.state.contentInProgress,
            utilityInProgress:this.state.utilityInProgress,
            qualityInProgress:this.state.qualityInProgress,
            efficacyInProgress:this.state.efficacyInProgress,

            studyAnswers:this.state.studyAnswers,
            criterionAnswers:this.state.criterionAnswers,
            criterionClickedTitles:this.state.criterionClickedTitles,
            criterionEfficacyStudies:this.state.criterionEfficacyStudies,
            criterionScores:this.state.criterionScores,
            criterionCompletionStatuses:this.state.criterionCompletionStatuses,

            removeEfficacyStudy:this.removeEfficacyStudy.bind(this),
            setCriterionStatusToInStart:this.setCriterionStatusToInStart.bind(this),
            studyAnswerChanged:this.studyAnswerChanged.bind(this),
            criterionAnswerChanged:this.criterionAnswerChanged.bind(this),
            clearLocalStorage:this.clearLocalStorage.bind(this),
            initializeStudyAnsers:this.initializeStudyAnsers.bind(this),
            initializeAnswerObjects:this.initializeAnswerObjects.bind(this),
            initializeEfficacyStudies:this.initializeEfficacyStudies.bind(this),
            handleFinishAddingEfficacyStudies:this.handleFinishAddingEfficacyStudies.bind(this),
            distinctiveClicked:this.distinctiveClicked.bind(this),
            setCriterionTitleLinkClicked: this.setCriterionTitleLinkClicked.bind(this),
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

            contentInProgress:this.state.contentInProgress,
            utilityInProgress:this.state.utilityInProgress,
            qualityInProgress:this.state.qualityInProgress,
            efficacyInProgress:this.state.efficacyInProgress,

            contentSummaryButton:this.state.contentSummaryButton,
            utilitySummaryButton:this.state.utilitySummaryButton,
            qualitySummaryButton:this.state.qualitySummaryButton,
            efficacySummaryButton:this.state.efficacySummaryButton,
            finishAddingEfficacyStudies:this.state.finishAddingEfficacyStudies,

            clearLocalStorage:this.clearLocalStorage.bind(this),
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

                    <FooterButtonAreaComponent {...summaryButtonProps} />
                </React.Fragment>
            );
        }
    }
}
