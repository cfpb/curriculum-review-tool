import React from "react";

import C from "../../constants"; 

export default class SummaryButton extends React.Component {
    
    handleSummaryButtonClick() {
        this.props.handleSummaryButtonClick();
    }

    render() {
        if (this.props.currentPage === C.CONTENT_PAGE &&
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
        else if (this.props.currentPage === C.EFFICACY_PAGE &&
                 this.props.efficacySummaryButton === C.STATUS_COMPLETE) {
            return (
                <button className="a-btn" onClick={(e) => {this.handleSummaryButtonClick()}} >
                    Continue to quality summary
                </button>
            );
        }
        else {
            return (
                <button className="a-btn" disabled >
                    Continue to summary
                </button>
            );
        }
    }
}
