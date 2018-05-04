import React from "react";

export default class FinalSummaryButton extends React.Component {

    handleFinalSummaryButtonClick() {
        this.props.handleFinalSummaryButtonClick();
    }

    render() {
        if (this.props.contentIsDone ||
            this.props.utilityIsDone ||
            this.props.qualityIsDone ||
            this.props.efficacyIsDone) {
                return (
                    <div className="u-center">
                        <button className="a-btn a-btn__super" onClick={(e) => {this.handleFinalSummaryButtonClick()}}>Final summary</button>
                    </div>
                );
        } else {
            return (null);
        }
    }
}
