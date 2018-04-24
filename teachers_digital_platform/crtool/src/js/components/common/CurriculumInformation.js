import React from "react";

export default class CurriculumInformation extends React.Component {
    renderReviewedOnDate() {
        if (this.props.reviewedOnDate !== undefined) {
            return this.props.reviewedOnDate;
        }
        return this.props.distinctiveCompletedDate[this.props.currentPage]
    }
    render() {
        return (
            <React.Fragment>
            <hr className="hr
                u-mb45
                u-mt30" />
            <h2>Curriculum information</h2>
            <p><strong>Curriculum title:</strong> {this.props.curriculumTitle}</p>
            <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>
            <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
            <p><strong>Reviewed on:</strong> {this.renderReviewedOnDate()}</p>
            <hr className="hr
                            u-mb45
                            u-mt30" />
            </React.Fragment>
        );
    }
}
