import React from "react";

import C from "../../business.logic/constants";
import QualityPrintPage from "./QualityPrintPage";
import UtilityPrintPage from "./UtilityPrintPage";
import EfficacyPrintPage from "./EfficacyPrintPage";
import FinalSummaryPage from "../pages/FinalSummaryPage";


import ContentPrintElemenataryPage from "./ContentPrintElementaryPage";
import ContentPrintMiddlePage from "./ContentPrintMiddlePage";
import ContentPrintHighPage from "./ContentPrintHighPage";

export default class PrintAndSummaryPages extends React.Component {

    handleFinalSummaryButtonClick() {
        this.props.handleFinalSummaryButtonClick();
    }

    render() {
        if (this.props.currentPrintButton === C.CONTENT_PAGE) {
            // Since each content group has different content for the scoring we need different Print pages for each
            if (this.props.gradeRange === C.GRADE_ELEMENTARY) {
                return ( <ContentPrintElemenataryPage showPrintIntro={true} {...this.props} /> );
            } else if (this.props.gradeRange === C.GRADE_MIDDLE) {
                return ( <ContentPrintMiddlePage showPrintIntro={true} {...this.props} /> );
            } else {
                return ( <ContentPrintHighPage showPrintIntro={true} {...this.props} /> );
            }
        } else if (this.props.currentPrintButton === C.QUALITY_PAGE) {
            return ( <QualityPrintPage showPrintIntro={true} {...this.props} /> );
        } else if (this.props.currentPrintButton === C.UTILITY_PAGE) {
            return ( <UtilityPrintPage showPrintIntro={true} {...this.props} /> );
        } else if (this.props.currentPrintButton === C.EFFICACY_PAGE) {
            return ( <EfficacyPrintPage showPrintIntro={true} {...this.props} /> );
        } else {
            return (<FinalSummaryPage {...this.props} />);
        }
    }
}


