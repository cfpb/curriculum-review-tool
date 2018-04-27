import React from "react";

import C from "../../business.logic/constants";
import QualityPrintPage from "./QualityPrintPage";
import UtilityPrintPage from "./UtilityPrintPage";
import ContentPrintPage from "./ContentPrintPage";
import EfficacyPrintPage from "./EfficacyPrintPage";
import FinalSummaryPage from "../pages/FinalSummaryPage";
import PrintIntroComponent from "./partial.pages/PrintIntroComponent";
import ContentCriterionBlockSummary from "./summary/ContentCriterionBlockSummary";
import UtilityCriterionBlockSummary from "./summary/UtilityCriterionBlockSummary";
import QualityCriterionBlockSummary from "./summary/QualityCriterionBlockSummary";
import EfficacyCriterionBlockSummary from "./summary/EfficacyCriterionBlockSummary";

export default class PrintAndSummaryPages extends React.Component {

    handleFinalSummaryButtonClick() {
        this.props.handleFinalSummaryButtonClick();
    }

    render() {
        if (this.props.currentPrintButton === C.QUALITY_PAGE) {
            return ( <QualityPrintPage showPrintIntro={true} {...this.props} /> );
        } else if (this.props.currentPrintButton === C.UTILITY_PAGE) {
            return ( <UtilityPrintPage showPrintIntro={true} {...this.props} /> );
        } else if (this.props.currentPrintButton === C.CONTENT_PAGE) {
            return ( <ContentPrintPage showPrintIntro={true} {...this.props} /> );
        } else if (this.props.currentPrintButton === C.EFFICACY_PAGE) {
            return ( <EfficacyPrintPage showPrintIntro={true} {...this.props} /> );
        } else {
            return (<FinalSummaryPage {...this.props} />);
        }
    }
}
