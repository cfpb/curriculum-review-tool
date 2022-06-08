import React from 'react';
import resolveUrl from 'resolve-url';

import C from '../business.logic/constants';
import Analytics from '../business.logic/analytics';
import AccessCodeModal from './dialogs/AccessCodeModal';
import DistinctiveMenuBar from './distinctives/DistinctiveMenuBar';
import FooterButtonAreaComponent from './pages/partial.pages/FooterButtonAreaComponent';
import SurveyPageContainer from './pages/SurveyPageContainer';
import PageInstructionsComponent from './PageInstructionsComponent';
import FinalSummaryPage from './pages/FinalSummaryPage';
import PrintAndSummaryPages from './pages/PrintAndSummaryPages';
import DateTimeFormater from '../business.logic/dateTimeFormatter';
import Repository from '../business.logic/repository';
import CriterionService from '../business.logic/criterionService';
import EfficacyCalculationService from '../business.logic/summary/efficacyCalculationService';
import crtoolLocalStorage from '../../crtoolLocalStorage';

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

      contentShowErrors: Repository.getContentShowErrors(),
      qualityShowErrors: Repository.getQualityShowErrors(),
      utilityShowErrors: Repository.getUtilityShowErrors(),
      efficacyShowErrors: Repository.getEfficacyShowErrors(),

      contentIsSummaryView: Repository.getContentViewSummary(),
      qualityIsSummaryView: Repository.getQualityViewSummary(),
      utilityIsSummaryView: Repository.getUtilityViewSummary(),
      efficacyIsSummaryView: Repository.getEfficacyViewSummary(),

      curriculumTitle: Repository.getCurriculumTitle(),
      curriculumId: Repository.getCurriculumId(),
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
      criterionCompletionStatuses: Repository.getCriterionCompletionStatuses(),
      finalSummaryShowEntireReview: Repository.getFinalSummaryShowEntireReview()
    };
  }

  componentDidMount() {
    //If we are on a print page we need to configure after print for data analytics
    if ( this.state.currentPrintButton === C.FINAL_PRINT_EVERYTHING ) {
      this.afterPrint( C.FINAL_PRINT_ENTIRE_BUTTON_TEXT );
    } else if ( this.state.currentPrintButton === C.FINAL_PRINT_PAGE ) {
      this.afterPrint( C.FINAL_PRINT_BUTTON_TEXT );
    }
  }

  afterPrint( printButtonText ) {
    // Not positive the below method is 100% cross browser supported
    window.onafterprint = function( evt ) {
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'print or save', printButtonText ) );
    };
  }

  /*
     * Remove all values from localStorage.
     * Used for starting a new review
     */
  clearLocalStorage() {
    Repository.resetApplicationData();

    //Analytics clicked start over with new review
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'Starting over modal', 'Yes' ) );

    this.navigateBackToStartPage();
  }

  navigateBackToStartPage() {
    let startPage = resolveUrl( window.location.href, C.START_PAGE_RELATIVE_URL );
    window.location.href = startPage;
  }

  openPrintPage() {
    let surveyPage = resolveUrl( window.location.href, C.SURVEY_PAGE_RELATIVE_URL );
    window.open( surveyPage, '_blank' );
  }

  /*
     * Set state values for dimention finish date
     */
  setDistinctiveCompletionDateNow( distinctiveName ) {
    let distinctiveCompletionDates = this.state.distinctiveCompletedDate;
    if ( distinctiveCompletionDates[distinctiveName] === undefined ||
            distinctiveCompletionDates[distinctiveName] === '' ) {

      let completedDate = DateTimeFormater.getDateNowFormat();
      distinctiveCompletionDates[distinctiveName] = completedDate;
      Repository.saveDistinctiveCompletionDates( this, distinctiveCompletionDates );
    }
  }

  setDimensionSummaryView( dimensionName, isSummaryView, criterionNumber ) {
    Repository.setDistinctiveView( this, dimensionName, isSummaryView );

    //Analytics user clicked View or edit responses
    if ( isSummaryView === false ) {
      let eventLabel = dimensionName + ' criterion ' + criterionNumber;
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'link clicked: View or edit responses', eventLabel ) );
    }
  }

  distinctiveClicked( distinctiveName ) {
    Repository.saveCurrentPage( this, distinctiveName );

    //Analytics dimension button clicked
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'dimension selected', distinctiveName ) );
  }

  resetPrintButtonState( distinctiveName ) {
    Repository.savePrintButtonPage( this, C.START_PAGE );
    this.setState( { currentPrintButton: distinctiveName } );
  }

  setPrintFinalSummaryShowEntireReview( newValue, showEverything ) {
    Repository.saveFinalSummaryShowEntireReview( this, newValue );
    this.setState( { finalSummaryShowEntireReview: newValue } );

    //Analytics print final summary button clicked
    if ( newValue === 'true' && showEverything === 'true' ) {
      this.printButtonClicked( C.FINAL_PRINT_EVERYTHING, false );
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'button clicked', C.FINAL_PRINT_ENTIRE_BUTTON_TEXT ) );
    } else if ( newValue === 'true' ) {
      this.printButtonClicked( C.FINAL_PRINT_PAGE, false );
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'button clicked', C.FINAL_PRINT_BUTTON_TEXT ) );
    } else {
      this.resetPrintButtonState( C.START_PAGE );
    }
  }

  printButtonClicked( distinctiveName, sendAnalytics ) {
    //Set up navigation to load dimension print screen
    Repository.savePrintButtonPage( this, distinctiveName );
    Repository.saveCurrentPage( this, distinctiveName );

    if ( sendAnalytics !== undefined && sendAnalytics === true ) {
      let label = distinctiveName + ': Print or save summary';
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'button clicked', label ) );
    }

    if ( distinctiveName !== C.START_PAGE ) {
      this.openPrintPage();

      if ( distinctiveName === C.FINAL_PRINT_PAGE || distinctiveName === C.FINAL_PRINT_EVERYTHING ) {
        distinctiveName = C.FINAL_SUMMARY_PAGE;
      }

      this.setState( { currentPage: distinctiveName } );
      this.setState( { currentPrintButton: '' } );
      this.setState( { finalSummaryShowEntireReview: 'false' } );

      setTimeout( function() {
        crtoolLocalStorage.setItem( C.START_PAGE, distinctiveName );
        crtoolLocalStorage.setItem( 'currentPrintButton', '' );
        crtoolLocalStorage.setItem( 'finalSummaryShowEntireReview', 'false' );
      }, 3000 );
    }
  }

  handleFinalSummaryButtonClick() {
    this.setDistinctiveCompletionDateNow( C.FINAL_SUMMARY_PAGE );
    Repository.saveCurrentPage( this, C.FINAL_SUMMARY_PAGE );

    //Count number of times user clicked Final Summary
    let finalSummaryViews = Number( this.state.numberFinalSummaryViews ) + 1;
    Repository.saveNumberFinalSummaryViews( this, finalSummaryViews );

    //Analytics number of times they clicked final summary button
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'button clicked', 'Final summary: clicked ' + finalSummaryViews + ' times' ) );

    //Analytics overal score or not reviewed for each (content, utility, quality, efficacy)
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'overall score',
      'content:' + this.getOveralScoreForDimension( C.CONTENT_PAGE ) + ', ' +
                            'utility:' + this.getOveralScoreForDimension( C.UTILITY_PAGE ) + ', ' +
                            'quality:' + this.getOveralScoreForDimension( C.QUALITY_PAGE ) + ', ' +
                            'efficacy:' + this.getOveralScoreForDimension( C.EFFICACY_PAGE )
    ) );
  }

  getOveralScoreForDimension( dimensionName ) {
    if ( this.state.dimensionOverallScores[dimensionName] ) {
      return this.state.dimensionOverallScores[dimensionName];
    }

    return 'not reviewed';
  }

  showErrorsForCurrentPage() {
    if ( ( this.state.currentPage === C.CONTENT_PAGE && this.state.contentShowErrors ) ||
             ( this.state.currentPage === C.QUALITY_PAGE && this.state.qualityShowErrors ) ||
             ( this.state.currentPage === C.UTILITY_PAGE && this.state.utilityShowErrors ) ||
             ( this.state.currentPage === C.EFFICACY_PAGE && this.state.efficacyShowErrors ) ) {
      return true;
    }

    return false;
  }

  currentDimensionHasErrors() {
    if ( ( this.state.currentPage === C.CONTENT_PAGE && this.state.contentInProgress === C.STATUS_COMPLETE ) ||
             ( this.state.currentPage === C.QUALITY_PAGE && this.state.qualityInProgress === C.STATUS_COMPLETE ) ||
             ( this.state.currentPage === C.UTILITY_PAGE && this.state.utilityInProgress === C.STATUS_COMPLETE ) ||
             ( this.state.currentPage === C.EFFICACY_PAGE && this.state.efficacyInProgress === C.STATUS_COMPLETE ) ) {
      return false;
    }

    return true;
  }

  handleSummaryButtonClick() {
    if ( this.currentDimensionHasErrors() ) {
      if ( this.state.currentPage === C.CONTENT_PAGE ) {
        Repository.saveContentShowErrors( this, true );
      } else if ( this.state.currentPage === C.QUALITY_PAGE ) {
        Repository.saveQualityShowErrors( this, true );
      } else if ( this.state.currentPage === C.UTILITY_PAGE ) {
        Repository.saveUtilityShowErrors( this, true );
      } else if ( this.state.currentPage === C.EFFICACY_PAGE ) {
        Repository.saveEfficacyShowErrors( this, true );
      }

      this.handleSummaryButtonClickPostEvent( true );
    } else {
      this.setDistinctiveCompletionDateNow( this.state.currentPage );
      Repository.setDistinctiveDoneStatus( this, this.state.currentPage );
      Repository.setDistinctiveStatus( this, this.state.currentPage, C.STATUS_COMPLETE );
      this.setDimensionSummaryView( this.state.currentPage, true, '' );

      this.handleSummaryButtonClickPostEvent( false );
    }

    //Analytics click on "continue to {{dimension}} summary"
    let label = 'Continue to ' + this.state.currentPage.toLowerCase() + ' summary';
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'button clicked', label ) );
  }

  handleSummaryButtonClickPostEvent( hasErrors ) {
    //HACK: need to scroll to top of screen after we navigate.
    setTimeout( function() {
      let element = document.getElementById( 'main' );

      if ( hasErrors ) {
        element = document.getElementById( 'form-level-errror-messaging' );
      }

      element.scrollIntoView();
    }, 100 );
  }

  initializeStudyAnswers( key, study ) {
    CriterionService.initializeStudyAnswers( this, key, study );
  }

  initializeAnswerObjects( fields ) {
    CriterionService.initializeAnswerObjects( this, fields );
  }

  initializeEfficacyStudies( efficacyStudyNumber ) {
    CriterionService.initializeEfficacyStudies( this, efficacyStudyNumber );

    //Analytics Review another study clicked
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'button clicked', 'Review another study' ) );
  }

  handleFinishAddingEfficacyStudies( value ) {
    CriterionService.handleFinishAddingEfficacyStudies( this, value );

    //Analytics Efficacy number of completed studies
    this.sendCompletedStudiesAnalytics();

    //Do not send analytics if studies are unfinished or skipped. If unfinished exist form/field errors will show
    if ( EfficacyCalculationService.unfinishedEfficacyStudyExists() ) {
      this.handleSummaryButtonClickPostEvent( true );
    } else if ( EfficacyCalculationService.efficacyStudiesAreBeingSkipped() ||
                   EfficacyCalculationService.unfinishedEfficacyStudyExists() === false ) {

      let efficacyStudiesAreBeingSkipped = EfficacyCalculationService.efficacyStudiesAreBeingSkipped();
      if ( efficacyStudiesAreBeingSkipped === false ) {
        //Analytics Efficacy Criterion 1 is now complete
        Analytics.sendEvent( Analytics.getDataLayerOptions( 'completed criterion', 'Efficacy: 1' ) );

        //Analytics individual study scores
        Analytics.sendEvent( Analytics.getDataLayerOptions( 'study scores', EfficacyCalculationService.getAllEfficacyStudyScoresForAnalytics( this ) ) );
      }
    }
  }

  sendCompletedStudiesAnalytics() {
    let numberOfStudies = this.state.criterionEfficacyStudies.length;
    let numberOfUnfinishedStudies = EfficacyCalculationService.getCountOfUnfinishedEfficacyStudies();
    let completedStudies = numberOfStudies - numberOfUnfinishedStudies;

    //If efficacy studies are being skipped then we do not want to send Analytics 0 were completed
    if ( EfficacyCalculationService.efficacyStudiesAreBeingSkipped() ) {
      completedStudies = 0;
    }

    //Analytics I'm done reviewing studies
    let actionLabel = 'Number of studies completed: ' + completedStudies;
    if ( EfficacyCalculationService.efficacyStudiesAreBeingSkipped() === false && numberOfUnfinishedStudies > 0 ) {
      actionLabel += '; Number of studies incomplete: ' + numberOfUnfinishedStudies;
    }
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'I am done reviewing studies', actionLabel ) );
  }

  removeEfficacyStudy( efficacyStudyNumber ) {
    CriterionService.removeEfficacyStudy( this, efficacyStudyNumber );

    //Analytics use clicked remove efficacy study
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'efficacy modal', 'Yes, remove it' ) );
  }

  studyAnswerChanged( studyKey, changedQuestion, newValue ) {
    //Analytics study criterion changed
    if ( newValue !== this.state.studyAnswers[changedQuestion] ) {
      this.sendAnalyticsForCriterionChanged( C.EFFICACY_PAGE, changedQuestion );
    }

    CriterionService.studyAnswerChanged( this, studyKey, changedQuestion, newValue );
  }

  criterionAnswerChanged( distinctiveName, changedQuestion, newValue ) {
    //Analytics criterion changed
    if ( newValue !== this.state.criterionAnswers[changedQuestion] ) {
      this.sendAnalyticsForCriterionChanged( distinctiveName, changedQuestion );
    }

    CriterionService.criterionAnswerChanged( this, distinctiveName, changedQuestion, newValue );
  }

  sendAnalyticsForCriterionChanged( distinctiveName, changedQuestion ) {
    let distinctiveNameLower = distinctiveName.toLowerCase();
    let criterionNumber = changedQuestion.replace( distinctiveNameLower + '-', '' ).replace( '-question', '' ).replace( '-optional', '' ).replace( '-crt', '' ).replace( 'crt-', '' );

    //Analytics we need to treat the notes fields different than the radio buttons
    if ( changedQuestion.indexOf( 'notes' ) > 0 ||
            changedQuestion.indexOf( 'text' ) > 0 ||
            changedQuestion.indexOf( 'study' ) > 0 ||
            changedQuestion.indexOf( 'gaps' ) > 0 ||
            changedQuestion.indexOf( 'assets' ) > 0 ||
            changedQuestion.indexOf( 'takeaways' ) > 0 ) {
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'text box completed', distinctiveName + ': ' + criterionNumber ) );
    } else {
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'criterion radio button', distinctiveName + ': ' + criterionNumber ) );
    }
  }

  setCriterionStatusToInProgress( criterionKey ) {
    CriterionService.setCriterionGroupCompletionStatuses( this, criterionKey, C.STATUS_IN_PROGRESS );
  }

  setCriterionTitleLinkClicked( criterionKey ) {
    CriterionService.setCriterionTitleLinkClicked( this, criterionKey );

    // Since the efficacy page invokes this method for the efficacy-crt-question-2
    // for the user automatically if/when user completes studies and 2 are strong
    if ( criterionKey !== 'efficacy-crt-question-2' ) {
      //Analytics criterion expandable clicked
      let label = this.state.currentPage + ': ' + criterionKey.replace( this.state.currentPage.toLowerCase() + '-', '' ).replace( '-question', '' ).replace( '-optional', '' ).replace( '-crt', '' ).replace( 'crt-', '' );
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'expandable opened', label ) );
    }
  }

  /*
     * Save Insturctions link clicked
     */
  sendAnalyticsForLinkClick( link_text, link_url ) {
    //Analytics opened how to save your work
    Analytics.sendEvent( Analytics.getDataLayerOptions( link_text, link_url, 'Download' ) );
  }

  setCriterionStatusToInStart( criterionKey ) {
    CriterionService.setCriterionGroupCompletionStatuses( this, criterionKey, C.STATUS_IN_START );
  }

  render() {
    const applicationProps = {
      currentPage: this.state.currentPage,
      curriculumTitle: this.state.curriculumTitle,
      curriculumId: this.state.curriculumId,
      publicationDate: this.state.publicationDate,
      dimensionOverallScores: this.state.dimensionOverallScores,
      distinctiveCompletedDate: this.state.distinctiveCompletedDate,
      gradeRange: this.state.gradeRange,
      finishAddingEfficacyStudies: this.state.finishAddingEfficacyStudies,

      contentInProgress: this.state.contentInProgress,
      utilityInProgress: this.state.utilityInProgress,
      qualityInProgress: this.state.qualityInProgress,
      efficacyInProgress: this.state.efficacyInProgress,

      contentIsDone: this.state.contentIsDone,
      qualityIsDone: this.state.qualityIsDone,
      utilityIsDone: this.state.utilityIsDone,
      efficacyIsDone: this.state.efficacyIsDone,

      contentShowErrors: this.state.contentShowErrors,
      qualityShowErrors: this.state.qualityShowErrors,
      utilityShowErrors: this.state.utilityShowErrors,
      efficacyShowErrors: this.state.efficacyShowErrors,

      contentIsSummaryView: this.state.contentIsSummaryView,
      utilityIsSummaryView: this.state.utilityIsSummaryView,
      qualityIsSummaryView: this.state.qualityIsSummaryView,
      efficacyIsSummaryView: this.state.efficacyIsSummaryView,

      studyAnswers: this.state.studyAnswers,
      criterionAnswers: this.state.criterionAnswers,
      currentPrintButton: this.state.currentPrintButton,
      criterionClickedTitles: this.state.criterionClickedTitles,
      numberFinalSummaryViews: this.state.numberFinalSummaryViews,
      criterionEfficacyStudies: this.state.criterionEfficacyStudies,
      criterionScores: this.state.criterionScores,
      criterionCompletionStatuses: this.state.criterionCompletionStatuses,
      finalSummaryShowEntireReview: this.state.finalSummaryShowEntireReview,

      showErrorsForCurrentPage: this.showErrorsForCurrentPage.bind( this ),
      sendAnalyticsForLinkClick: this.sendAnalyticsForLinkClick.bind( this ),
      handleSummaryButtonClick: this.handleSummaryButtonClick.bind( this ),
      handleFinalSummaryButtonClick: this.handleFinalSummaryButtonClick.bind( this ),
      resetPrintButtonState: this.resetPrintButtonState.bind( this ),
      printButtonClicked: this.printButtonClicked.bind( this ),
      removeEfficacyStudy: this.removeEfficacyStudy.bind( this ),
      setCriterionStatusToInStart: this.setCriterionStatusToInStart.bind( this ),
      studyAnswerChanged: this.studyAnswerChanged.bind( this ),
      criterionAnswerChanged: this.criterionAnswerChanged.bind( this ),
      clearLocalStorage: this.clearLocalStorage.bind( this ),
      initializeStudyAnswers: this.initializeStudyAnswers.bind( this ),
      initializeAnswerObjects: this.initializeAnswerObjects.bind( this ),
      initializeEfficacyStudies: this.initializeEfficacyStudies.bind( this ),
      handleFinishAddingEfficacyStudies: this.handleFinishAddingEfficacyStudies.bind( this ),
      distinctiveClicked: this.distinctiveClicked.bind( this ),
      setDimensionSummaryView: this.setDimensionSummaryView.bind( this ),
      setCriterionTitleLinkClicked: this.setCriterionTitleLinkClicked.bind( this ),
      setCriterionStatusToInProgress: this.setCriterionStatusToInProgress.bind( this ),
      setPrintFinalSummaryShowEntireReview: this.setPrintFinalSummaryShowEntireReview.bind( this )
    };

    if ( this.state.currentPage === C.FINAL_SUMMARY_PAGE ||
            this.state.currentPage === C.FINAL_PRINT_EVERYTHING ||
            this.state.currentPage === C.FINAL_PRINT_PAGE ) {
      return <FinalSummaryPage {...applicationProps} />;
    } else if ( this.state.currentPrintButton !== undefined &&
                   this.state.currentPrintButton !== '' &&
                   this.state.currentPrintButton !== C.START_PAGE ) {
      return <PrintAndSummaryPages {...applicationProps} handleFinalSummaryButtonClick={this.handleFinalSummaryButtonClick.bind( this )} />;
    } else {
      return (
        <React.Fragment>
          {
            this.state.currentPage === C.START_PAGE &&
                        <React.Fragment>
                          <div className='h5 u-mb30'>You’re reviewing</div>
                          <h1>{this.state.curriculumTitle}</h1>
                          <div className='h4 u-mb30'>
                                Access code: <strong>{this.state.curriculumId}</strong>
                            <div className='u-inline-block u-ml15'>
                              <AccessCodeModal
                                buttonText='Use this to save your work'
                                hasIcon='true'
                                {...applicationProps}/>
                            </div>
                          </div>
                        </React.Fragment>
          }
          {
            this.state.currentPage !== C.START_PAGE &&
                        <React.Fragment>
                          <div className='h4'>You’re reviewing: <strong>{this.state.curriculumTitle}</strong></div>
                          <div className='h4'>
                                Access code: <strong>{this.state.curriculumId}</strong>
                            <div className='u-inline-block u-ml15'>
                              <AccessCodeModal
                                buttonText='Use this to save your work'
                                hasIcon='true'
                                {...applicationProps}/>
                            </div>
                          </div>
                        </React.Fragment>
          }

          <PageInstructionsComponent currentPage={this.state.currentPage} />
          <DistinctiveMenuBar {...applicationProps} />
          <SurveyPageContainer className='SurveyPage' {...applicationProps} {...applicationProps} />

          <FooterButtonAreaComponent {...applicationProps} />

          {
            (
              ( this.state.currentPage === C.CONTENT_PAGE && this.state.contentIsSummaryView ) ||
                            ( this.state.currentPage === C.UTILITY_PAGE && this.state.utilityIsSummaryView ) ||
                            ( this.state.currentPage === C.QUALITY_PAGE && this.state.qualityIsSummaryView ) ||
                            ( this.state.currentPage === C.EFFICACY_PAGE && this.state.efficacyIsSummaryView )
            ) &&

                        <div className='l-full-width'>
                          <div className='o-inner-footer u-mt45'>
                            <div className='wrapper content_wrapper'>
                              <div className='content_main'>
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
