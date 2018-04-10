import React from "react";
import resolveUrl from "resolve-url";

import C from "../constants"; 
import DistinctiveButton from "./distinctives/DistinctiveButton";
import SurveyPageContainer from "./pages/SurveyPageContainer";

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
      criterionNotes: JSON.parse(localStorage.getItem("criterionNotes")) || {}
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

  setDistinctiveInProgress(changedDistinctive) {
    this.setDistinctiveStatus(changedDistinctive, C.STATUS_IN_PROGRESS)
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

    const distinctiveProps = [
      {
        title:"Content",
        criteria:"6 criteria",
        estimatedtime:"Est. time 30 min",
        description:"Covers core knowledge and skills in content standards",
        distinctive:C.CONTENT_PAGE,
        inProgress:this.state.contentInProgress,
        distinctiveClicked:this.distinctiveClicked.bind(this),
      },
      {
        title:"Utility",
        criteria:"7 criteria",
        estimatedtime:"Est. time 30 min",
        description:"Supports effective teaching",
        distinctive:C.UTILITY_PAGE,
        inProgress:this.state.utilityInProgress,
        distinctiveClicked:this.distinctiveClicked.bind(this),
      },
      {
        title:"Quality",
        criteria:"5 criteria",
        estimatedtime:"Est. time 30 min",
        description:"Accurate and well presented",
        distinctive:C.QUALITY_PAGE,
        inProgress:this.state.qualityInProgress,
        distinctiveClicked:this.distinctiveClicked.bind(this),
      },
      {
        title:"Efficacy",
        criteria:"3 criteria",
        estimatedtime:"Est. time 30 min",
        description:"Improves financial knowledge, skills, or behaviors",
        distinctive:C.EFFICACY_PAGE,
        inProgress:this.state.efficacyInProgress,
        distinctiveClicked:this.distinctiveClicked.bind(this),
      }
    ]

    return (
      <div className="block block__flush-top">
        <h1>Curriculum Review</h1>
        <p>Middle School Example Curriculum</p>
        <p>Start the review by selecting a dimension. You do not need to complete all dimensions in one sitting. You’ll be able to download a dimension report for each dimension as well as a summary report at the end.</p>
        
        <div className="DistinctivesBlock" >
          {distinctiveProps.map((distinctiveProps, i) => <DistinctiveButton key={i} {...distinctiveProps}/>)}
        </div>
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
      </div>
    );
  }
}
