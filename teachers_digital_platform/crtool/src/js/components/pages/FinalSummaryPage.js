import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";

export default class FinalSummaryPage extends React.Component {

    render() {
        return (
            <div>
                <div className="l-survey-top">
                    <SaveWorkModal />
                </div>

                <p>This is {C.FINAL_SUMMARY_PAGE} Summary!</p>
                <h1>{this.props.currentPage} Summary page coming soon!</h1>

                <h3>{this.props.curriculumTitle}</h3>
                <h3>{this.props.publicationDate}</h3>
                <h3>{this.props.gradeRange}</h3>
            </div>
        );
    }
}
