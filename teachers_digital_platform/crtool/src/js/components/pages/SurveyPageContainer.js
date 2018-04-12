import React from "react";

import C from "../../constants";
import ContentElementaryCriterionPage from "./content/ContentElementaryCriterionPage";
import ContentMiddleCriterionPage from "./content/ContentMiddleCriterionPage";
import ContentHighCriterionPage from "./content/ContentHighCriterionPage";
import UtilityCriterionPage from "./UtilityCriterionPage";
import QualityCriterionPage from "./QualityCriterionPage";
import EfficacyCriterionPage from "./EfficacyCriterionPage";
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
          };

        if (this.props.currentPage === C.CONTENT_PAGE) {
            if (this.props.gradeRange === C.GRADE_ELEMENTARY) {
                return (<ContentElementaryCriterionPage {...pageProps} />);
            }
            else if (this.props.gradeRange === C.GRADE_MIDDLE) {
                return (<ContentMiddleCriterionPage {...pageProps} />);
            }
            else {
                return (<ContentHighCriterionPage {...pageProps} />);
            }
        } else if (this.props.currentPage === C.UTILITY_PAGE) {
            return (<UtilityCriterionPage {...pageProps} /> );
        } else if (this.props.currentPage === C.QUALITY_PAGE) {
            return (<QualityCriterionPage {...pageProps} />);
        } else if (this.props.currentPage === C.EFFICACY_PAGE) {
            return (<EfficacyCriterionPage {...pageProps} />);
        } else {
            return (<StartCriterionPage  {...pageProps} />);
        }
    }
}
