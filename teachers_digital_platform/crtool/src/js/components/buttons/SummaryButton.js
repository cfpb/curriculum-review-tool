import React from "react";

import C from "../../business.logic/constants";

export default class SummaryButton extends React.Component {

    handleSummaryButtonClick() {
        this.props.handleSummaryButtonClick();
    }

    render() {
        if ( (this.props.currentPage === C.CONTENT_PAGE && this.props.contentInProgress === C.STATUS_COMPLETE) || 
             (this.props.currentPage === C.QUALITY_PAGE && this.props.qualityInProgress === C.STATUS_COMPLETE) || 
             (this.props.currentPage === C.UTILITY_PAGE && this.props.utilityInProgress === C.STATUS_COMPLETE) || 
             (this.props.currentPage === C.EFFICACY_PAGE && this.props.efficacyInProgress === C.STATUS_COMPLETE) ) {
                return (
                <button className="a-btn" onClick={(e) => {this.props.distinctiveClicked(C.FINAL_PRINT_PAGE); e.preventDefault();}}>
                    Print or save summary
                </button>
            );
        } 
        else if (this.props.currentPage === C.CONTENT_PAGE &&
            this.props.contentSummaryButton === C.STATUS_COMPLETE) {
            return (
                <button className="a-btn" onClick={(e) => {this.handleSummaryButtonClick()}} >
                    Continue to content summary
                </button>
            );
        }
        else if (this.props.currentPage === C.UTILITY_PAGE &&
                 this.props.utilitySummaryButton === C.STATUS_COMPLETE) {
            return (
                <button className="a-btn" onClick={(e) => {this.handleSummaryButtonClick()}} >
                    Continue to utility summary
                </button>
            );
        }
        else if (this.props.currentPage === C.QUALITY_PAGE &&
                 this.props.qualitySummaryButton === C.STATUS_COMPLETE) {
            return (
                <button className="a-btn" onClick={(e) => {this.handleSummaryButtonClick()}} >
                    Continue to quality summary
                </button>
            );
        }
        else if (this.props.currentPage === C.EFFICACY_PAGE && this.props.finishAddingEfficacyStudies) {
            return (
                <button className="a-btn" onClick={(e) => {this.handleSummaryButtonClick()}} >
                Continue to efficacy summary
                </button>
            );
        }
        else if (this.props.currentPage === C.EFFICACY_PAGE &&
                  this.props.efficacySummaryButton === C.STATUS_COMPLETE) {
            return (
                <button className="a-btn" onClick={(e) => {this.handleSummaryButtonClick()}} >
                    Continue to efficacy summary
                </button>
            );
        }
        else {
            if (this.props.currentPage === C.FINAL_SUMMARY_PAGE ||
                this.props.currentPage === C.START_PAGE) {
                return (null);
            } else {
                return (
                    <button className="a-btn" disabled >
                        Continue to summary
                    </button>
                );
            }
        }
    }
}
