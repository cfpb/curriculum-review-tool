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

      curriculumTitle: localStorage.getItem("curriculumTitle"),
      publicationDate: localStorage.getItem("publicationDate"),
      gradeRange: localStorage.getItem("gradeRange"),

      criterionAnswers: JSON.parse(localStorage.getItem("criterionAnswers")) || {},
      criterionNotes: JSON.parse(localStorage.getItem("criterionNotes")) || {},
      criterionCompletionStatuses: JSON.parse(localStorage.getItem("criterionCompletionStatus")) || {},
    };
  }

  clearLocalStorage() {
    localStorage.clear();
    this.distinctiveClicked(C.START_PAGE);

    this.setDistinctiveStatus(C.CONTENT_PAGE, C.STATUS_IN_START);
    this.setDistinctiveStatus(C.UTILITY_PAGE, C.STATUS_IN_START);
    this.setDistinctiveStatus(C.QUALITY_PAGE, C.STATUS_IN_START);
    this.setDistinctiveStatus(C.EFFICACY_PAGE, C.STATUS_IN_START);

    this.setState({criterionAnswers: {} });
    this.setState({criterionNotes: {} });
    this.setState({criterionCompletionStatuses: {} });
    
    let startPage = resolveUrl(window.location.href, C.START_PAGE_RELATIVE_URL);
    window.location = startPage;
  }

  changeCriterionNotes(distinctive, key, val) {
    this.setCriterionNotesState(key, val);
    this.setDistinctiveInProgress(distinctive);
  }

  setCriterionNotesState(key, val) {
    let alteredCriterionNotes =  this.state.criterionNotes
    alteredCriterionNotes[key] = val;
    
    localStorage.setItem("criterionNotes", JSON.stringify(alteredCriterionNotes));
    this.setState({criterionNotes: alteredCriterionNotes})
  }

  changeCriterionAnswer(distinctive, key, val) {
    this.setCriterionAnswersState(key, val);
    this.setDistinctiveInProgress(distinctive);
  }

  setCriterionAnswersState(key, val) {
    let alteredCriterionAnswers =  this.state.criterionAnswers
    alteredCriterionAnswers[key] = val;
    
    localStorage.setItem("criterionAnswers", JSON.stringify(alteredCriterionAnswers));
    this.setState({criterionAnswers: alteredCriterionAnswers})
  }

  changeCriterionCompletionStatuses(distinctive, key, val) {
    this.setCriterionCompletionStatuses(key, val);
    //TODO: Calculate distinctive status [in progress, complete]
  }

  setCriterionCompletionStatuses(key, val) {
    let alteredCriterionAnswers =  this.state.criterionAnswers
    alteredCriterionAnswers[key] = val;
    
    localStorage.setItem("criterionAnswers", JSON.stringify(alteredCriterionAnswers));
    this.setState({criterionAnswers: alteredCriterionAnswers})
  }

  setDistinctiveInProgress(changedDistinctive) {
    this.setDistinctiveStatus(changedDistinctive, C.STATUS_IN_PROGRESS)
  }

  handleSummaryButtonClick() {
    this.setDistinctiveComplete(this.state.currentPage);
    alert("Comming Soon - Navigate to Summary for : " + this.state.currentPage);
    //TODO: navigate to Content Summary Page
  }

  setDistinctiveComplete(changedDistinctive) {
    this.setDistinctiveStatus(changedDistinctive, C.STATUS_COMPLETE)
  }

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

  distinctiveClicked(clickedDistinctive) {
    localStorage.setItem(C.START_PAGE, clickedDistinctive);
    this.setState({currentPage: clickedDistinctive});
  }

  render() {

    return (
      <div>
        <SaveWorkModal />
        <h1>You’re reviewing: {this.state.curriculumTitle}</h1>
        
        <PageInstructionsComponent currentPage={this.state.currentPage} />

        <DistinctiveMenuBar 
            distinctiveClicked={this.distinctiveClicked.bind(this)}
            currentPage={this.state.currentPage}
            contentInProgress={this.state.contentInProgress}
            utilityInProgress={this.state.utilityInProgress}
            qualityInProgress={this.state.qualityInProgress}
            efficacyInProgress={this.state.efficacyInProgress} />

        <div >
          <SurveyPageContainer className="SurveyPage" 
            currentPage={this.state.currentPage} 

            curriculumTitle={this.state.curriculumTitle}
            publicationDate={this.state.publicationDate}
            gradeRange={this.state.gradeRange}

            criterionAnswers={this.state.criterionAnswers}
            criterionNotes={this.state.criterionNotes}
            changeCriterionAnswer={this.changeCriterionAnswer.bind(this)}
            changeCriterionNotes={this.changeCriterionNotes.bind(this)}
            clearLocalStorage={this.clearLocalStorage.bind(this)}
            setDistinctiveComplete={this.setDistinctiveComplete.bind(this)}
             />
        </div>

        <div className="block
                    block__flush-bottom
                    block__padded-top
                    block__border-top">
            <div className="m-btn-group
                        m-btn-group__wide">
                <SummaryButton handleSummaryButtonClick={this.handleSummaryButtonClick.bind(this)} 
                               currentPage={this.state.currentPage}
                               criterionCompletionStatuses={this.state.criterionCompletionStatuses} />
                &nbsp;&nbsp;&nbsp;
                <StartOverModal clearLocalStorage={this.clearLocalStorage.bind(this)}/>
            </div>
        </div>
      </div>
    );
  }
}
