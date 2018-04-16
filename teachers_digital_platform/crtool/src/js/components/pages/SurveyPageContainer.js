import React from "react";

import C from "../../constants";
import ContentElementaryCriterionPage from "./content/ContentElementaryCriterionPage";
import ContentMiddleCriterionPage from "./content/ContentMiddleCriterionPage";
import ContentHighCriterionPage from "./content/ContentHighCriterionPage";
import ContentSummaryPage from "./content/ContentSummaryPage";
import UtilityCriterionPage from "./UtilityCriterionPage";
import UtilitySummaryPage from "./UtilitySummaryPage";
import QualityCriterionPage from "./QualityCriterionPage";
import QualitySummaryPage from "./QualitySummaryPage";
import EfficacyCriterionPage from "./EfficacyCriterionPage";
import EfficacySummaryPage from "./EfficacySummaryPage";
import StartCriterionPage from "./StartCriterionPage";

export default class SurveyPageContainer extends React.Component {

    render() {
        const pageProps = {
            currentPage:this.props.currentPage,
            criterionAnswers:this.props.criterionAnswers,
            changeCriterionAnswer:this.props.changeCriterionAnswer,
            setDistinctiveComplete:this.props.setDistinctiveComplete, 
            curriculumTitle:this.props.curriculumTitle,
            publicationDate:this.props.publicationDate,
            gradeRange:this.props.gradeRange,
            initializeAnswerObjects:this.props.initializeAnswerObjects,
            criterionCompletionStatuses:this.props.criterionCompletionStatuses,
          };
        
        if (this.props.currentPage === C.CONTENT_PAGE) {

            if (this.props.contentInProgress === C.STATUS_COMPLETE) {
                return (<ContentSummaryPage {...pageProps} />);
            } else {
                if (this.props.gradeRange === C.GRADE_ELEMENTARY) {
                    return (<ContentElementaryCriterionPage {...pageProps} />);
                } else if (this.props.gradeRange === C.GRADE_MIDDLE) {
                    return (<ContentMiddleCriterionPage {...pageProps} />);
                } else {
                    return (<ContentHighCriterionPage {...pageProps} />);
                }
            }

        } else if (this.props.currentPage === C.UTILITY_PAGE) {

            if (this.props.utilityInProgress === C.STATUS_COMPLETE) {
                return (<UtilitySummaryPage {...pageProps} />);
            } else {
                return (<UtilityCriterionPage {...pageProps} /> );
            }

        } else if (this.props.currentPage === C.QUALITY_PAGE) {
            
            if (this.props.qualityInProgress === C.STATUS_COMPLETE) {
                return (<QualitySummaryPage {...pageProps} />);
            } else {
                return (<QualityCriterionPage {...pageProps} />);
            }

        } else if (this.props.currentPage === C.EFFICACY_PAGE) {
            
            if (this.props.efficacyInProgress === C.STATUS_COMPLETE) {
                return (<EfficacySummaryPage {...pageProps} />);
            } else {
                return (<EfficacyCriterionPage {...pageProps} />);
            }

        } else {
            return (<StartCriterionPage  {...pageProps} />);
        }
    }
}
