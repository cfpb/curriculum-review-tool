import React from "react";

import C from "../../constants";
import DistinctiveMenuBar from "../distinctives/DistinctiveMenuBar";
import ContentElementaryCriterionPage from "./content/ContentElementaryCriterionPage";
import ContentMiddleCriterionPage from "./content/ContentMiddleCriterionPage";
import ContentHighCriterionPage from "./content/ContentHighCriterionPage";
import ContentElementarySummaryPage from "./content/ContentElementarySummaryPage";
import ContentHighSummaryPage from "./content/ContentHighSummaryPage";
import ContentMiddleSummaryPage from "./content/ContentMiddleSummaryPage";
import UtilityCriterionPage from "./UtilityCriterionPage";
import UtilitySummaryPage from "./UtilitySummaryPage";
import QualityCriterionPage from "./QualityCriterionPage";
import QualitySummaryPage from "./QualitySummaryPage";
import EfficacyCriterionPage from "./EfficacyCriterionPage";
import EfficacySummaryPage from "./EfficacySummaryPage";
import StartCriterionPage from "./StartCriterionPage";

export default class SurveyPageContainer extends React.Component {

    renderDistinctiveMenuBar() {
        return (
            <DistinctiveMenuBar {...this.props} />
        );
    }

    render() {        
        if (this.props.currentPage === C.CONTENT_PAGE) {

            if (this.props.contentInProgress === C.STATUS_COMPLETE) {
                if (this.props.gradeRange === C.GRADE_ELEMENTARY) {
                    return (<React.Fragment><ContentElementarySummaryPage {...this.props} />{this.renderDistinctiveMenuBar()}</React.Fragment>);
                } else if (this.props.gradeRange === C.GRADE_MIDDLE) {
                    return (<React.Fragment><ContentMiddleSummaryPage {...this.props} />{this.renderDistinctiveMenuBar()}</React.Fragment>);
                } else {
                    return (<React.Fragment><ContentHighSummaryPage {...this.props} />{this.renderDistinctiveMenuBar()}</React.Fragment>);
                }
            } else {
                if (this.props.gradeRange === C.GRADE_ELEMENTARY) {
                    return (<ContentElementaryCriterionPage {...this.props} />);
                } else if (this.props.gradeRange === C.GRADE_MIDDLE) {
                    return (<ContentMiddleCriterionPage {...this.props} />);
                } else {
                    return (<ContentHighCriterionPage {...this.props} />);
                }
            }

        } else if (this.props.currentPage === C.UTILITY_PAGE) {

            if (this.props.utilityInProgress === C.STATUS_COMPLETE) {
                return (<React.Fragment><UtilitySummaryPage {...this.props} />{this.renderDistinctiveMenuBar()}</React.Fragment>);
            } else {
                return (<UtilityCriterionPage {...this.props} /> );
            }

        } else if (this.props.currentPage === C.QUALITY_PAGE) {
            
            if (this.props.qualityInProgress === C.STATUS_COMPLETE) {
                return (<React.Fragment><QualitySummaryPage {...this.props} />{this.renderDistinctiveMenuBar()}</React.Fragment>);
            } else {
                return (<QualityCriterionPage {...this.props} />);
            }

        } else if (this.props.currentPage === C.EFFICACY_PAGE) {
            
            if (this.props.efficacyInProgress === C.STATUS_COMPLETE) {
                return (<React.Fragment><EfficacySummaryPage {...this.props} />{this.renderDistinctiveMenuBar()}</React.Fragment>);
            } else {
                return (<EfficacyCriterionPage {...this.props} />);
            }

        } else {
            return (<StartCriterionPage  {...this.props} />);
        }
    }
}
