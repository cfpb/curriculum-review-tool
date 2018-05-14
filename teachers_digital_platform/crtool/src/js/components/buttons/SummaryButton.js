import React from "react";

import C from "../../business.logic/constants";

export default class SummaryButton extends React.Component {

    handleSummaryButtonClick() {
        this.props.handleSummaryButtonClick();

        //HACK: need to scroll to top of screen after we navigate.
        setTimeout(function(){
            let main = document.getElementById("main");
            main.scrollIntoView();
        }, 100);
    }

    render() {
        if (this.props.currentPage === undefined ||
            this.props.currentPage === null ||
            this.props.currentPage === C.FINAL_SUMMARY_PAGE ||
            this.props.currentPage === C.START_PAGE) {
            return (null);
        } else if ( (this.props.currentPage === C.CONTENT_PAGE && this.props.contentIsSummaryView === true) ||
                    (this.props.currentPage === C.QUALITY_PAGE && this.props.qualityIsSummaryView === true) ||
                    (this.props.currentPage === C.UTILITY_PAGE && this.props.utilityIsSummaryView === true) ||
                    (this.props.currentPage === C.EFFICACY_PAGE && this.props.efficacyIsSummaryView === true) ) {
           return (
               <button className="a-btn" data-gtm_ignore="true" onClick={(e) => {this.props.printButtonClicked(this.props.currentPage); e.preventDefault();}}>
                   Print or save summary
               </button>
           );
        } else if ((this.props.currentPage && this.props.currentPage !== C.START_PAGE) &&
                   ((this.props.currentPage === C.CONTENT_PAGE && this.props.contentInProgress === C.STATUS_COMPLETE) ||
                    (this.props.currentPage === C.QUALITY_PAGE && this.props.qualityInProgress === C.STATUS_COMPLETE) ||
                    (this.props.currentPage === C.UTILITY_PAGE && this.props.utilityInProgress === C.STATUS_COMPLETE) ||
                    (this.props.currentPage === C.EFFICACY_PAGE && this.props.efficacyInProgress === C.STATUS_COMPLETE) )
            ) {
            return (
                <button className="a-btn" onClick={(e) => {this.handleSummaryButtonClick()}} >
                    Continue to {this.props.currentPage.toLowerCase()} summary
                </button>
            );
        } else {
            return (
                <button className="a-btn" disabled>
                    Continue to {this.props.currentPage.toLowerCase()} summary
                </button>
            );
        }
    }
}
