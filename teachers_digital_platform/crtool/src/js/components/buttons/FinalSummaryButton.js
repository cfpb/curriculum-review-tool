import React from "react";

export default class FinalSummaryButton extends React.Component {

    handleFinalSummaryButtonClick() {
        this.props.handleFinalSummaryButtonClick();
        
        //HACK: need to scroll to top of screen after we navigate.
        setTimeout(function(){
            let main = document.getElementById("main");
            main.scrollIntoView();
        }, 100);
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
