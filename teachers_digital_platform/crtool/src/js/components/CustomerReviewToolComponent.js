import React from "react";
import resolveUrl from "resolve-url";

import C from "../business.logic/constants";
import SaveWorkModal from "./dialogs/SaveWorkModal";
import DistinctiveMenuBar from "./distinctives/DistinctiveMenuBar";
import FooterButtonAreaComponent from "./pages/partial.pages/FooterButtonAreaComponent";
import SurveyPageContainer from "./pages/SurveyPageContainer";
import PageInstructionsComponent from "./PageInstructionsComponent";
import FinalSummaryPage from "./pages/FinalSummaryPage";
import PrintAndSummaryPages from "./pages/PrintAndSummaryPages";
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

            contentIsSummaryView: Repository.getContentViewSummary(),
            qualityIsSummaryView: Repository.getQualityViewSummary(),
            utilityIsSummaryView: Repository.getUtilityViewSummary(),
            efficacyIsSummaryView: Repository.getEfficacyViewSummary(),

            curriculumTitle: Repository.getCurriculumTitle(),
            publicationDate: Repository.getPublicationDate(),
            gradeRange: Repository.getGradeRange(),

            studyAnswers: Repository.getStudyAnswers(),
            criterionScores: Repository.getCriterionScores(),
            criterionAnswers: Repository.getCriterionAnswers(),
            currentPrintButton: Repository.getPrintButtonPage(),
            dimensionOverallScores: Repository.getDimensionOverallScores(),
            criterionClickedTitles: Repository.getCriterionClickedTitles(),
            criterionEfficacyStudies: Repository.getCriterionEfficacyStudies(),
            distinctiveCompletedDate: Repository.getDistinctiveCompletedDate(),
            criterionCompletionStatuses: Repository.getCriterionCompletionSatuses(),
            finalSummaryShowEntireReview: Repository.getFinalSummaryShowEntireReview(),
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

    openPrintPage() {
        let surveyPage = resolveUrl(window.location.href, C.SURVEY_PAGE_RELATIVE_URL);
        window.open(surveyPage, '_blank');
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

    setDimensionSummaryView(dimensionName, isSummaryView) {
        Repository.setDistinctiveView(this, dimensionName, isSummaryView);
    }

    distinctiveClicked(distinctiveName) {
        Repository.saveCurrentPage(this, distinctiveName);
    }

    resetPrintButtonState(distinctiveName) {
        Repository.savePrintButtonPage(this, C.START_PAGE);
        this.setState({currentPrintButton: distinctiveName});
    }

    setPrintFinalSummaryShowEntireReview(newValue, showEverything) {
        Repository.saveFinalSummaryShowEntireReview(this, newValue);
        this.setState({finalSummaryShowEntireReview: newValue});

        if (newValue === "true" && showEverything === "true") {
            this.printButtonClicked(C.FINAL_PRINT_EVERYTHING);
        } else if (newValue === "true"){
            this.printButtonClicked(C.FINAL_PRINT_PAGE);
        } else {
            this.resetPrintButtonState(C.START_PAGE);
        }
    }

    printButtonClicked(distinctiveName) {
        //Set up navigation to load dimension print screen
        Repository.savePrintButtonPage(this, distinctiveName);
        Repository.saveCurrentPage(this, distinctiveName);

        if (distinctiveName !== C.START_PAGE) {
            this.openPrintPage();

            this.setState({currentPage: distinctiveName});
            this.setState({currentPrintButton: ""});
            this.setState({finalSummaryShowEntireReview: "false"});

            setTimeout(function(){
                localStorage.setItem(C.START_PAGE, distinctiveName);
                localStorage.setItem("currentPrintButton", "");
                localStorage.setItem("finalSummaryShowEntireReview", "false");
          },2000);
        }
    }

    handleFinalSummaryButtonClick() {
        this.setDistinctiveCompletionDateNow(C.FINAL_SUMMARY_PAGE);
        Repository.saveCurrentPage(this, C.FINAL_SUMMARY_PAGE);
    }

    handleSummaryButtonClick() {
        this.setDistinctiveCompletionDateNow(this.state.currentPage);
        Repository.setDistinctiveStatus(this, this.state.currentPage, C.STATUS_COMPLETE);
        this.setDimensionSummaryView(this.state.currentPage, true);
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
            dimensionOverallScores:this.state.dimensionOverallScores,
            distinctiveCompletedDate:this.state.distinctiveCompletedDate,
            gradeRange:this.state.gradeRange,
            finishAddingEfficacyStudies:this.state.finishAddingEfficacyStudies,

            contentInProgress:this.state.contentInProgress,
            utilityInProgress:this.state.utilityInProgress,
            qualityInProgress:this.state.qualityInProgress,
            efficacyInProgress:this.state.efficacyInProgress,

            contentIsSummaryView:this.state.contentIsSummaryView,
            utilityIsSummaryView:this.state.utilityIsSummaryView,
            qualityIsSummaryView:this.state.qualityIsSummaryView,
            efficacyIsSummaryView:this.state.efficacyIsSummaryView,

            studyAnswers:this.state.studyAnswers,
            criterionAnswers:this.state.criterionAnswers,
            currentPrintButton:this.state.currentPrintButton,
            criterionClickedTitles:this.state.criterionClickedTitles,
            criterionEfficacyStudies:this.state.criterionEfficacyStudies,
            criterionScores:this.state.criterionScores,
            criterionCompletionStatuses:this.state.criterionCompletionStatuses,
            finalSummaryShowEntireReview:this.state.finalSummaryShowEntireReview,

            handleSummaryButtonClick:this.handleSummaryButtonClick.bind(this),
            handleFinalSummaryButtonClick:this.handleFinalSummaryButtonClick.bind(this),
            resetPrintButtonState:this.resetPrintButtonState.bind(this),
            printButtonClicked:this.printButtonClicked.bind(this),
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
            setDimensionSummaryView:this.setDimensionSummaryView.bind(this),
            setCriterionTitleLinkClicked: this.setCriterionTitleLinkClicked.bind(this),
            setCriterionStatusToInProgress:this.setCriterionStatusToInProgress.bind(this),
            setPrintFinalSummaryShowEntireReview:this.setPrintFinalSummaryShowEntireReview.bind(this),
        };

        if (this.state.currentPage === C.FINAL_SUMMARY_PAGE ||
            this.state.currentPage === C.FINAL_PRINT_EVERYTHING ||
            this.state.currentPage === C.FINAL_PRINT_PAGE) {
            return (<FinalSummaryPage {...applicationProps} />);
        } else if (this.state.currentPrintButton !== undefined &&
                   this.state.currentPrintButton !== "" &&
                   this.state.currentPrintButton !== C.START_PAGE) {
            return (<PrintAndSummaryPages {...applicationProps} handleFinalSummaryButtonClick={this.handleFinalSummaryButtonClick.bind(this)} />);
        } else {
            return (
                <React.Fragment>
                    <div className="l-survey-top">
                        <SaveWorkModal
                            buttonText="Can I save my work?"
                            hasIcon="true" />
                    </div>
                    {
                        this.state.currentPage === C.START_PAGE &&
                        <React.Fragment>
                            <div class="h5 u-mb30">You’re reviewing</div>
                            <h1>{this.state.curriculumTitle}</h1>
                        </React.Fragment>
                    }
                    {
                        this.state.currentPage !== C.START_PAGE &&
                        <React.Fragment>
                            <div className="h4">You're Reviewing: {this.state.curriculumTitle}</div>
                        </React.Fragment>
                    }

                    <PageInstructionsComponent currentPage={this.state.currentPage} />
                    <DistinctiveMenuBar {...applicationProps} />
                    <SurveyPageContainer className="SurveyPage" {...applicationProps} {...applicationProps} />

                    <FooterButtonAreaComponent {...applicationProps} />

                    {
                        (
                            (this.state.currentPage === C.CONTENT_PAGE && this.state.contentIsSummaryView) ||
                            (this.state.currentPage === C.UTILITY_PAGE && this.state.utilityIsSummaryView) ||
                            (this.state.currentPage === C.QUALITY_PAGE && this.state.qualityIsSummaryView) ||
                            (this.state.currentPage === C.EFFICACY_PAGE && this.state.efficacyIsSummaryView)
                        ) &&

                        <div class="l-full-width">
                            <div class="o-inner-footer u-mt45">
                                <div class="wrapper content_wrapper">
                                    <div class="content_main">
                                        <h2>Choose another dimension or review the final summary</h2>
                                        <DistinctiveMenuBar {...applicationProps} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </React.Fragment>
            );
        }
    }
}
