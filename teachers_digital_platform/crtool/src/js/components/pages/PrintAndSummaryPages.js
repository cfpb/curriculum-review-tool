import React from "react";

import C from "../../business.logic/constants";
import PrintIntroComponent from "./partial.pages/PrintIntroComponent";
import ContentBlockSummary from "./summary/ContentBlockSummary";
import UtilityBlockSummary from "./summary/UtilityBlockSummary";
import QualityBlockSummary from "./summary/QualityBlockSummary";
import EfficacyBlockSummary from "./summary/EfficacyBlockSummary";

export default class PrintAndSummaryPages extends React.Component {

    handleFinalSummaryButtonClick() {
        this.props.handleFinalSummaryButtonClick();
    }

    render() {
        return (
            <React.Fragment>
                <PrintIntroComponent {...this.props} />

                <ContentBlockSummary {...this.props} />

                <UtilityBlockSummary {...this.props} />

                <QualityBlockSummary {...this.props} />

                <EfficacyBlockSummary {...this.props} />

                <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.START_PAGE); e.preventDefault();}}>Back</button>
            </React.Fragment>
        );
    }
}
