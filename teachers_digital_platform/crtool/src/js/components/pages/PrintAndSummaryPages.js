import React from "react";

import C from "../../business.logic/constants";
import QualityPrintPage from "./QualityPrintPage";
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
            return (
                <React.Fragment>
                    <QualityPrintPage 
                                    showPrintIntro={true}
                                    {...this.props} />
                </React.Fragment>
            );
        } else {

            return (
                <React.Fragment>
                    <PrintIntroComponent {...this.props} />

                    <ContentCriterionBlockSummary {...this.props} /> {/* Criterion Information */}

                    <UtilityCriterionBlockSummary {...this.props} /> {/* Criterion Information */}

                    <QualityCriterionBlockSummary {...this.props} /> {/* Criterion Information */}

                    <EfficacyCriterionBlockSummary {...this.props} /> {/* Criterion Information */}

                    <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.START_PAGE); e.preventDefault();}}>Back</button>
                </React.Fragment>
            );
        }
    }
}
