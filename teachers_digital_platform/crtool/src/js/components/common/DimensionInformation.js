import React from "react";

export default class DimensionInformation extends React.Component {
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
                                block__padded-bottom">
                    <div className="h5">CFPB curriculum review tool</div>
                    <h1>{this.props.dimensionName} summary for {this.props.curriculumTitle}</h1>
                    <p className="lead-paragraph u-mb30">
                        {this.props.dimensionSummary}
                    </p>
                    <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
                    <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>
                    <p><strong>Reviewed on:</strong> {this.renderReviewedOnDate()}</p>
                </div>
            </React.Fragment>
        );
    }
}
