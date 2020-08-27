import React from "react";

import C from "../../business.logic/constants";
import crtoolLocalStorage from "../../../crtoolLocalStorage";

export default class SaveButton extends React.Component {

    handleSaveButtonClick() {
       crtoolLocalStorage.saveIfDirty();
    }

    render() {
        if (this.props.currentPage === undefined ||
            this.props.currentPage === null ||
            this.props.currentPage === C.FINAL_SUMMARY_PAGE ||
            this.props.currentPage === C.START_PAGE ||
            (this.props.currentPage === C.CONTENT_PAGE && this.props.contentIsSummaryView === true) ||
            (this.props.currentPage === C.QUALITY_PAGE && this.props.qualityIsSummaryView === true) ||
            (this.props.currentPage === C.UTILITY_PAGE && this.props.utilityIsSummaryView === true) ||
            (this.props.currentPage === C.EFFICACY_PAGE && this.props.efficacyIsSummaryView === true) ) {
            return (null);
        }  else {
            return (
                <button className="a-btn" onClick={(e) => {this.handleSaveButtonClick()}} >
                    Save my work
                </button>
            );

        }
    }
}
