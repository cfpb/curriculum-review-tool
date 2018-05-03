import React from "react";

import C from "../../business.logic/constants";
import SaveWorkInformation from "../common/SaveWorkInformation";
import PrintOrSaveFinalSummary from "../common/PrintOrSaveFinalSummary";

export default class FinalCurriculumInformation extends React.Component {
    renderReviewedOnDate() {
        if (this.props.reviewedOnDate !== undefined) {
            return this.props.reviewedOnDate;
        }
        return this.props.distinctiveCompletedDate[this.props.currentPage]
    }
    render() {
        return (
            <React.Fragment>
                <div className="block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom">
                    <h1>Final summary for {this.props.curriculumTitle}</h1>
                    <p className="lead-paragraph u-mb30">
                        This summary shows the scores for all four dimensions.
                    </p>

                    <SaveWorkInformation />
                    <PrintOrSaveFinalSummary  {...this.props} />

                    <p><strong>Date completed:</strong> {this.props.distinctiveCompletedDate[C.FINAL_SUMMARY_PAGE]}</p>
                    <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
                    <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>
                    <p><strong>Reviewed on:</strong> {this.renderReviewedOnDate()}</p>
                </div>
            </React.Fragment>
        );
    }
}
