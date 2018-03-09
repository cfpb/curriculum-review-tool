import React from "react";

import C from "../constants"; 
import ContentDistinctive from "./distinctives/ContentDistinctive";
import UtilityDistinctive from "./distinctives/UtilityDistinctive";
import QualityDistinctive from "./distinctives/QualityDistinctive";
import EfficacyDistinctive from "./distinctives/EfficacyDistinctive";
import SurveyPageContainer from "./pages/SurveyPageContainer";

export default class CustomerReviewToolComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: localStorage.getItem(C.START_DISTINCTIVE),

      contentInProgress: localStorage.getItem(C.CONTENT_STATUS),
      qualityInProgress: localStorage.getItem(C.QUALITY_STATUS),
      utilityInProgress: localStorage.getItem(C.UTILITY_STATUS),
      efficacyInProgress: localStorage.getItem(C.EFFICACY_STATUS),

      criterionAnswers: localStorage.getItem("criterionAnswers") === null ? {} : JSON.parse(localStorage.getItem("criterionAnswers")),
      criterionNotes: localStorage.getItem("criterionNotes") === null ? {} : JSON.parse(localStorage.getItem("criterionNotes")),
    };
  }

  clearLocalstorage() {
    localStorage.clear();
    console.log('clearLocalstorage')
    this.distinctiveClicked(C.START_DISTINCTIVE);

    this.setDistinctiveStatus(C.CONTENT_DISTINCTIVE, C.STATUS_IN_START);
    this.setDistinctiveStatus(C.UTILITY_DISTINCTIVE, C.STATUS_IN_START);
    this.setDistinctiveStatus(C.QUALITY_DISTINCTIVE, C.STATUS_IN_START);
    this.setDistinctiveStatus(C.EFFICACY_DISTINCTIVE, C.STATUS_IN_START);

    this.setState({criterionAnswers: {} });
    this.setState({criterionNotes: {} });
    // localStorage.clear();
  }

  changeCriterionNotes(distinctive, key, val) {
    this.setCriterionNotesState(key, val);
    this.setDistinctiveInProgress(distinctive);
  }

  setCriterionNotesState(key, val) {
    let alteredCriterionNotes =  this.state.criterionNotes
    alteredCriterionNotes[key] = val;
    
    localStorage.setItem("criterionNotes", JSON.stringify(alteredCriterionNotes));
    this.setState({criterionNotes: JSON.parse(localStorage.getItem("criterionNotes"))})
  }

  changeCriterionAnswer(distinctive, key, val) {
    this.setCriterionAnswersState(key, val);
    this.setDistinctiveInProgress(distinctive);
  }

  setCriterionAnswersState(key, val) {
    let alteredCriterionAnswers =  this.state.criterionAnswers
    alteredCriterionAnswers[key] = val;
    
    localStorage.setItem("criterionAnswers", JSON.stringify(alteredCriterionAnswers));
    this.setState({criterionAnswers: JSON.parse(localStorage.getItem("criterionAnswers"))})
  }

  setDistinctiveInProgress(changedDistinctive) {
    this.setDistinctiveStatus(changedDistinctive, C.STATUS_IN_PROGRESS)
  }

  setDistinctiveComplete(changedDistinctive) {
    this.setDistinctiveStatus(changedDistinctive, C.STATUS_COMPLETE)
  }

  setDistinctiveStatus(changedDistinctive, distinctiveStatus) {
    switch(changedDistinctive) {
      case C.CONTENT_DISTINCTIVE:
        localStorage.setItem(C.CONTENT_STATUS, distinctiveStatus);
        this.setState({contentInProgress: localStorage.getItem(C.CONTENT_STATUS)});
        break;
      case C.UTILITY_DISTINCTIVE:
        localStorage.setItem(C.UTILITY_STATUS, distinctiveStatus);
        this.setState({utilityInProgress: localStorage.getItem(C.UTILITY_STATUS)});
        break;
      case C.QUALITY_DISTINCTIVE:
        localStorage.setItem(C.QUALITY_STATUS, distinctiveStatus);
        this.setState({qualityInProgress: localStorage.getItem(C.QUALITY_STATUS)});
        break;
      case C.EFFICACY_DISTINCTIVE:
        localStorage.setItem(C.EFFICACY_STATUS, distinctiveStatus);
        this.setState({efficacyInProgress: localStorage.getItem(C.EFFICACY_STATUS)});
        break;
      default:
        break;
    }
  }

  distinctiveClicked(clickedDistinctive) {
    localStorage.setItem(C.START_DISTINCTIVE, clickedDistinctive);
    this.setState({currentPage: localStorage.getItem(C.START_DISTINCTIVE)});
  }

  render() {
    return (
      <div className="block block__flush-top">
        <h1>Curriculum Review</h1>
        <p>Middle School Example Curriculum</p>
        <p>Start the review by selecting a dimension. You do not need to complete all dimensions in one sitting. You’ll be able to download a dimension report for each dimension as well as a summary report at the end.</p>
        
        <div className="DistinctivesBlock" >
          <ContentDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} inProgress={this.state.contentInProgress} title="Content" criteria="6 criteria" estimatedtime="Est. time 30 min" description="Covers core knowledge and skills in content standards" />
          <UtilityDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} inProgress={this.state.utilityInProgress} title="Utility"  criteria="7 criteria" estimatedtime="Est. time 30 min" description="Supports effective teaching" />
          <QualityDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} inProgress={this.state.qualityInProgress} title="Quality" criteria="5 criteria" estimatedtime="Est. time 30 min" description="Accurate and well presented" />
          <EfficacyDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} inProgress={this.state.efficacyInProgress} title="Efficacy" criteria="3 criteria" estimatedtime="Est. time 30 min" description="Improves financial knowledge, skills, or behaviors" />
        </div>
        <div >
          <SurveyPageContainer className="SurveyPage" 
            currentPage={this.state.currentPage} 

            criterionAnswers={this.state.criterionAnswers}
            criterionNotes={this.state.criterionNotes}
            changeCriterionAnswer={this.changeCriterionAnswer.bind(this)}
            changeCriterionNotes={this.changeCriterionNotes.bind(this)}
            clearLocalstorage={this.clearLocalstorage.bind(this)}
            setDistinctiveComplete={this.setDistinctiveComplete.bind(this)}
             />
        </div>
      </div>
    );
  }
}
