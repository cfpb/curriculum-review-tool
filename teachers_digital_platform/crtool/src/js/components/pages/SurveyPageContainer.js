import React from "react";

import C from "../../business.logic/constants";
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
    render() {
        if (this.props.currentPage === C.CONTENT_PAGE) {
            if (this.props.contentIsSummaryView) {
                if (this.props.gradeRange === C.GRADE_ELEMENTARY) {
                    return (<ContentElementarySummaryPage {...this.props} />);
                } else if (this.props.gradeRange === C.GRADE_MIDDLE) {
                    return (<ContentMiddleSummaryPage {...this.props} />);
                } else {
                    return (<ContentHighSummaryPage {...this.props} />);
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
            if (this.props.utilityIsSummaryView) {
                return (<UtilitySummaryPage {...this.props} />);
            } else {
                return (<UtilityCriterionPage {...this.props} /> );
            }
        } else if (this.props.currentPage === C.QUALITY_PAGE) {
            if (this.props.qualityIsSummaryView) {
                return (<QualitySummaryPage {...this.props} />);
            } else {
                return (<QualityCriterionPage {...this.props} />);
            }
        } else if (this.props.currentPage === C.EFFICACY_PAGE) {
            if (this.props.efficacyIsSummaryView) {
                return (<EfficacySummaryPage {...this.props} />);
            } else {
                return (<EfficacyCriterionPage {...this.props} />);
            }
        } else {
            return (<StartCriterionPage  {...this.props} />);
        }
    }
}
