import React from "react";

import C from "../../business.logic/constants";
import SaveWorkInformation from "../common/SaveWorkInformation";
import PrintOrSaveFinalSummary from "../common/PrintOrSaveFinalSummary";
import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";

export default class FinalCurriculumInformation extends React.Component {
    renderReviewedOnDate() {
        if (this.props.reviewedOnDate !== undefined) {
            return this.props.reviewedOnDate;
        }
        return this.props.distinctiveCompletedDate[this.props.currentPage]
    }

    isPrintMode() {
        let isPrintMode = false;
        isPrintMode = this.props.currentPrintButton !== "" && this.props.currentPrintButton !== C.START_PAGE;
        return isPrintMode;
    }

    render() {
        return (
            <React.Fragment>
                {this.isPrintMode() &&
                    <PrintIntroComponent {...this.props} />
                }
                <div className="block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom">
                    <h1>Final summary for {this.props.curriculumTitle}</h1>
                    <p className="lead-paragraph u-mb30">
                        This summary shows the scores for all four dimensions.
                    </p>
                    {this.props.finalSummaryShowEntireReview !== "true" &&
                        <span>
                            <SaveWorkInformation />
                            <PrintOrSaveFinalSummary {...this.props} />
                        </span>
                    }

                    <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
                    <p><strong>Date completed:</strong> {this.props.distinctiveCompletedDate[C.FINAL_SUMMARY_PAGE]}</p>
                    {this.props.publicationDate !== "" && <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>}
                    <p><strong>Reviewed on:</strong> {this.renderReviewedOnDate()}</p>
                </div>
            </React.Fragment>
        );
    }
}
