import React from "react";
import resolveUrl from "resolve-url";

import C from "../constants"; 
import SaveWorkModal from "./dialogs/SaveWorkModal";
import StartOverModal from "./dialogs/StartOverModal";
import DistinctiveMenuBar from "./distinctives/DistinctiveMenuBar";
import SurveyPageContainer from "./pages/SurveyPageContainer";

export default class CustomerReviewToolPage extends React.Component {
  render() {
    function PageInstructions() {
        if (this.props.currentPage === C.START_PAGE) {
            return (
                <span>
                    <SaveWorkModal />
                    <div className="h5 u-mb30">You’re reviewing</div>
                    <h1>{this.state.curriculumTitle}</h1>
                    <p className="lead-paragraph">
                        Select any dimension to start your review. We recommend starting with Content and moving to Utility, Quality, and Efficacy, but you can complete the four dimensions in any order.
                    </p>
                    <p>You can complete all dimensions in one sitting or over the course of many sessions. You’ll be able to print or save a summary for each dimension as you finish it, and then print or save a final summary for the overall review.</p>
                </span>
            );
        }
        return <GuestGreeting />;
    };

    return (
        <div>
        
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
                    <button className="a-btn" onClick={(e) => {this.handleSummaryButtonClick()}} >
                        Continue to summary
                    </button>
                    <StartOverModal clearLocalStorage={this.clearLocalStorage.bind(this)}/>
                </div>
            </div>
        </div>
        );
    }
}
