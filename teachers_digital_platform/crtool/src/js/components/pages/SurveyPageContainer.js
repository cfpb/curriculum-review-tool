import React from "react";

import C from "../../constants";
import ContentCriterionPage from "./ContentCriterionPage";
import UtilityCriterionPage from "./UtilityCriterionPage";
import QualityCriterionPage from "./QualityCriterionPage";
import EfficacyCriterionPage from "./EfficacyCriterionPage";
import StartCriterionPage from "./StartCriterionPage";

export default class SurveyPageContainer extends React.Component {

    render() {
        if (this.props.currentPage === C.CONTENT_DISTINCTIVE) {
            return (
                <div>
                    <ContentCriterionPage currentPage={this.props.currentPage}
                        criterionAnswers={this.props.criterionAnswers}
                        criterionNotes={this.props.criterionNotes}
                        changeCriterionAnswer={this.props.changeCriterionAnswer}
                        changeCriterionNotes={this.props.changeCriterionNotes}
                        clearLocalStorage={this.props.clearLocalStorage} 
                        setDistinctiveComplete={this.props.setDistinctiveComplete} />
                </div>
            );
        } else if (this.props.currentPage === C.UTILITY_DISTINCTIVE) {
            return (
                <div>
                    <UtilityCriterionPage currentPage={this.props.currentPage}
                        criterionAnswers={this.props.criterionAnswers}
                        criterionNotes={this.props.criterionNotes}
                        changeCriterionAnswer={this.props.changeCriterionAnswer}
                        changeCriterionNotes={this.props.changeCriterionNotes}
                        clearLocalStorage={this.props.clearLocalStorage} 
                        setDistinctiveComplete={this.props.setDistinctiveComplete} />
                </div>
            );
        } else if (this.props.currentPage === C.QUALITY_DISTINCTIVE) {
            return (
                <div>
                    <QualityCriterionPage currentPage={this.props.currentPage}
                        criterionAnswers={this.props.criterionAnswers}
                        criterionNotes={this.props.criterionNotes}
                        changeCriterionAnswer={this.props.changeCriterionAnswer}
                        changeCriterionNotes={this.props.changeCriterionNotes}
                        clearLocalStorage={this.props.clearLocalStorage}
                        setDistinctiveComplete={this.props.setDistinctiveComplete} />
                </div>
            );
        } else if (this.props.currentPage === C.EFFICACY_DISTINCTIVE) {
            return (
                <div>
                    <EfficacyCriterionPage currentPage={this.props.currentPage}
                        criterionAnswers={this.props.criterionAnswers}
                        criterionNotes={this.props.criterionNotes}
                        changeCriterionAnswer={this.props.changeCriterionAnswer}
                        changeCriterionNotes={this.props.changeCriterionNotes}
                        clearLocalStorage={this.props.clearLocalStorage}
                        setDistinctiveComplete={this.props.setDistinctiveComplete} />
                </div>
            );
        } else {
            return (<StartCriterionPage currentPage={this.props.currentPage} />);
        }
    }
}
