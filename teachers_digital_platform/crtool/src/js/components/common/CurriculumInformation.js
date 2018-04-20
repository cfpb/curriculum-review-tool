import React from "react";      

import C from "../../constants";

export default class CurriculumInformation extends React.Component {
    render() {
        console.log(this.props.currentPage);
        console.log(this.props.distinctiveCompletedDate[C.UTILITY_PAGE])
        console.log(this.props.distinctiveCompletedDate[this.props.currentPage]);
        return (
            <React.Fragment>
            <hr className="hr
                u-mb45
                u-mt30" />
            <h2>Curriculum information</h2>
            <p><strong>Curriculum title:</strong> {this.props.curriculumTitle}</p>
            <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>
            <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
            <p><strong>Reviewed on:</strong> {this.props.distinctiveCompletedDate[this.props.currentPage]}</p>
            <hr className="hr
                            u-mb45
                            u-mt30" />
            </React.Fragment>
        );
    }
}
