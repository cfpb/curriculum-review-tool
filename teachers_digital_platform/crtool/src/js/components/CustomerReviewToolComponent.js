import React from "react";
import resolveUrl from "resolve-url";

import C from "../business.logic/constants";
import Analytics from "../business.logic/analytics";
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
import efficacyCalculationService from "../business.logic/summary/efficacyCalculationService";

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

            contentIsDone: Repository.getContentIsDone(),
            qualityIsDone: Repository.getQualityIsDone(),
            utilityIsDone: Repository.getUtilityIsDone(),
            efficacyIsDone: Repository.getEfficacyIsDone(),

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
            numberFinalSummaryViews: Repository.getNumberFinalSummaryViews(),
            criterionEfficacyStudies: Repository.getCriterionEfficacyStudies(),
            distinctiveCompletedDate: Repository.getDistinctiveCompletedDate(),
            criterionCompletionStatuses: Repository.getCriterionCompletionSatuses(),
            finalSummaryShowEntireReview: Repository.getFinalSummaryShowEntireReview(),
        };
    }

    componentDidMount() {

        //If we are on a print page we need to configure after print for data analytics
        if (this.state.currentPrintButton === C.FINAL_PRINT_EVERYTHING) {
            this.afterPrint(C.FINAL_PRINT_ENTIRE_BUTTON_TEXT);
        } else if (this.state.currentPrintButton === C.FINAL_PRINT_PAGE) {
            this.afterPrint(C.FINAL_PRINT_BUTTON_TEXT);
        }
    }

    afterPrint(printButtonText) {
        // Not positive the below method is 100% cross browser supported
        window.onafterprint = function(evt) { 
            Analytics.sendEvent(Analytics.getDataLayerOptions("print or save", printButtonText));
        };
    }

    /*
     * Remove all values frmo localStorage.
     * Used for starting a new review
     */
    clearLocalStorage() {
        Repository.resetApplicationData();

        //Analytics clicked start over with new review
        Analytics.sendEvent(Analytics.getDataLayerOptions("Starting over modal", "Yes"));

        this.navigateBackToStartPage();
    }

    navigateBackToStartPage() {
        let startPage = resolveUrl(window.location.href, C.START_PAGE_RELATIVE_URL);
        window.location.href = startPage;
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

        //Analytics dimension button clicked
        Analytics.sendEvent(Analytics.getDataLayerOptions("dimension selected", distinctiveName));
    }

    resetPrintButtonState(distinctiveName) {
        Repository.savePrintButtonPage(this, C.START_PAGE);
        this.setState({currentPrintButton: distinctiveName});
    }

    setPrintFinalSummaryShowEntireReview(newValue, showEverything) {
        Repository.saveFinalSummaryShowEntireReview(this, newValue);
        this.setState({finalSummaryShowEntireReview: newValue});

        //Analytics print finaly summary clicked
        if (newValue === "true" && showEverything === "true") {
            this.printButtonClicked(C.FINAL_PRINT_EVERYTHING, false);
            Analytics.sendEvent(Analytics.getDataLayerOptions("button clicked", C.FINAL_PRINT_ENTIRE_BUTTON_TEXT));
        } else if (newValue === "true"){
            this.printButtonClicked(C.FINAL_PRINT_PAGE, false);
            Analytics.sendEvent(Analytics.getDataLayerOptions("button clicked", C.FINAL_PRINT_BUTTON_TEXT));
        } else {
            this.resetPrintButtonState(C.START_PAGE);
        }
    }

    printButtonClicked(distinctiveName, sendAnalytics) {
        //Set up navigation to load dimension print screen
        Repository.savePrintButtonPage(this, distinctiveName);
        Repository.saveCurrentPage(this, distinctiveName);

        if (sendAnalytics !== undefined && sendAnalytics !== false) {
            let label = distinctiveName + " Print or save summary";
            Analytics.sendEvent(Analytics.getDataLayerOptions("button clicked", label));
        } 

        if (distinctiveName !== C.START_PAGE) {
            this.openPrintPage();

            if (distinctiveName === C.FINAL_PRINT_PAGE || distinctiveName === C.FINAL_PRINT_EVERYTHING) {
                distinctiveName = C.FINAL_SUMMARY_PAGE;
            }

            this.setState({currentPage: distinctiveName});
            this.setState({currentPrintButton: ""});
            this.setState({finalSummaryShowEntireReview: "false"});

            setTimeout(function(){
                localStorage.setItem(C.START_PAGE, distinctiveName);
                localStorage.setItem("currentPrintButton", "");
                localStorage.setItem("finalSummaryShowEntireReview", "false");
          },3000);
        }
    }

    handleFinalSummaryButtonClick() {
        this.setDistinctiveCompletionDateNow(C.FINAL_SUMMARY_PAGE);
        Repository.saveCurrentPage(this, C.FINAL_SUMMARY_PAGE);

        let finalSummaryViews = Number(this.state.numberFinalSummaryViews) + 1;
        Repository.saveNumberFinalSummaryViews(this, finalSummaryViews);

        //Analytics number of times they clicked final summary button
        Analytics.sendEvent(Analytics.getDataLayerOptions("button clicked", "Final summary: clicked " + finalSummaryViews + " times"));

        //Analytics final summary button clicked
        Analytics.sendEvent(Analytics.getDataLayerOptions("button clicked", "Final summary"));

        //Analytics overal score or not reviewed for each (content, utility, quality, efficacy)
        Analytics.sendEvent(Analytics.getDataLayerOptions("overall score", 
                            "content:" + this.getOveralScoreForDimension(C.CONTENT_PAGE) + ", " + 
                            "utility:" + this.getOveralScoreForDimension(C.UTILITY_PAGE) + ", " + 
                            "quality:" + this.getOveralScoreForDimension(C.QUALITY_PAGE) + ", " + 
                            "efficacy:" + this.getOveralScoreForDimension(C.EFFICACY_PAGE)
                            ));
    }

    getOveralScoreForDimension(dimensionName) {
        if (this.state.dimensionOverallScores[dimensionName]) {
            return this.state.dimensionOverallScores[dimensionName];
        }

        return "not reviewed";
    }

    handleSummaryButtonClick() {
        this.setDistinctiveCompletionDateNow(this.state.currentPage);
        Repository.setDistinctiveDoneStatus(this, this.state.currentPage);
        Repository.setDistinctiveStatus(this, this.state.currentPage, C.STATUS_COMPLETE);
        this.setDimensionSummaryView(this.state.currentPage, true);

        //Analytics click on "continue to {{dimension}} summary"
        let label = "Continue to " + this.state.currentPage.toLowerCase() + " summary"
        Analytics.sendEvent(Analytics.getDataLayerOptions("button clicked", label));
    }

    initializeStudyAnsers(key, study) {
        CriterionService.initializeStudyAnsers(this, key, study);
    }

    initializeAnswerObjects(fields) {
        CriterionService.initializeAnswerObjects(this, fields);
    }

    initializeEfficacyStudies(efficacyStudyNumber) {
        CriterionService.initializeEfficacyStudies(this, efficacyStudyNumber);

        //Analytics Review another study clicked
        Analytics.sendEvent(Analytics.getDataLayerOptions("button clicked", "Review another study"));
    }

    handleFinishAddingEfficacyStudies(value) {
        CriterionService.handleFinishAddingEfficacyStudies(this, value);
        var numberOfStudies = this.state.criterionEfficacyStudies.length;

        //Analytics number of studies
        Analytics.sendEvent(Analytics.getDataLayerOptions("number of studies",numberOfStudies));

        //Analytics individual study scores
        Analytics.sendEvent(Analytics.getDataLayerOptions("study scores", efficacyCalculationService.getAllEfficacyStudyScoresForAnalytics(this)));
    }

    removeEfficacyStudy(efficacyStudyNumber) {
        CriterionService.removeEfficacyStudy(this, efficacyStudyNumber);
        Analytics.sendEvent(Analytics.getDataLayerOptions("button clicked", "Remove"));
    }

    studyAnswerChanged(studyKey, changedQuestion, newValue) {
        CriterionService.studyAnswerChanged(this, studyKey, changedQuestion, newValue);

        //Analytics study criterion changed
        this.sendAnalyticsForCriterionChanged(C.EFFICACY_PAGE, changedQuestion);
    }

    criterionAnswerChanged(distinctiveName, changedQuestion, newValue) {
        CriterionService.criterionAnswerChanged(this, distinctiveName, changedQuestion, newValue);

        //Analytics criterion changed
        this.sendAnalyticsForCriterionChanged(distinctiveName, changedQuestion);
    }

    sendAnalyticsForCriterionChanged(distinctiveName, changedQuestion) {
        let criterionNumber = changedQuestion.replace("-question", "").replace("-optional", "").replace("-crt", "");

        if (changedQuestion.indexOf("notes") > 0) {
            Analytics.sendEvent(Analytics.getDataLayerOptions("text box completed", distinctiveName + " : " + criterionNumber));
        } else {
            Analytics.sendEvent(Analytics.getDataLayerOptions("criterion radio button", distinctiveName + " : " + criterionNumber));
        }
    }

    setCriterionStatusToInProgress(criterionKey) {
        CriterionService.setCriterionGroupCompletionStatuses(this, criterionKey, C.STATUS_IN_PROGRESS);
    }

    setCriterionTitleLinkClicked(criterionKey) {
        CriterionService.setCriterionTitleLinkClicked(this, criterionKey);

        if (criterionKey !== "efficacy-crt-question-2") {
            //Analytics criterion expandable clicked
            let label = this.state.currentPage + " " + criterionKey.replace("-question", "").replace("-optional", "").replace("-crt", "");
            Analytics.sendEvent(Analytics.getDataLayerOptions("expandable opened", label));
        }
    }

    /* 
     * Save Insturctions link clicked 
     */
    sendAnalyticsForLinkClick(link_text, link_url) {
        //Analytics opened how to save your work
        Analytics.sendEvent(Analytics.getDataLayerOptions(link_text, link_url, "Download"));
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

            contentIsDone:this.state.contentIsDone,
            qualityIsDone:this.state.qualityIsDone,
            utilityIsDone:this.state.utilityIsDone,
            efficacyIsDone:this.state.efficacyIsDone,

            contentIsSummaryView:this.state.contentIsSummaryView,
            utilityIsSummaryView:this.state.utilityIsSummaryView,
            qualityIsSummaryView:this.state.qualityIsSummaryView,
            efficacyIsSummaryView:this.state.efficacyIsSummaryView,

            studyAnswers:this.state.studyAnswers,
            criterionAnswers:this.state.criterionAnswers,
            currentPrintButton:this.state.currentPrintButton,
            criterionClickedTitles:this.state.criterionClickedTitles,
            numberFinalSummaryViews:this.state.numberFinalSummaryViews,
            criterionEfficacyStudies:this.state.criterionEfficacyStudies,
            criterionScores:this.state.criterionScores,
            criterionCompletionStatuses:this.state.criterionCompletionStatuses,
            finalSummaryShowEntireReview:this.state.finalSummaryShowEntireReview,

            sendAnalyticsForLinkClick:this.sendAnalyticsForLinkClick.bind(this),
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
                            hasIcon="true" 
                            {...applicationProps}/>
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
                            <div className="h4">You’re reviewing: <strong>{this.state.curriculumTitle}</strong></div>
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
