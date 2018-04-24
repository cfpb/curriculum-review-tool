import React from "react";

import C from "../../business.logic/constants";

export default class FinalSummaryButton extends React.Component {

    handleFinalSummaryButtonClick() {
        this.props.handleFinalSummaryButtonClick();
    }

    render() {
        if (this.props.contentInProgress === C.STATUS_COMPLETE ||
            this.props.utilityInProgress === C.STATUS_COMPLETE ||
            this.props.qualityInProgress === C.STATUS_COMPLETE ||
            this.props.efficacyInProgress === C.STATUS_COMPLETE) {
                return (
                    <div className="u-center">
                        <button className="a-btn a-btn__super" onClick={(e) => {this.handleFinalSummaryButtonClick()}}>Final Summary</button>
                    </div>
                );
        } else {
            return (null);
        }
    }
}
