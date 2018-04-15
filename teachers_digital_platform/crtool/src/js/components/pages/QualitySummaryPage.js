import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";

export default class QualitySummaryPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.QUALITY_PAGE, key, checkedValue);
    }

    render() {
        return (
            <div>
                <div className="l-survey-top">
                    <SaveWorkModal />
                </div>

                <p>This is Quality Summary!</p>
                <h1>{this.props.currentPage} Summary page coming soon!</h1>

                <h3>{this.props.curriculumTitle}</h3>
                <h3>{this.props.publicationDate}</h3>
                <h3>{this.props.gradeRange}</h3>
            </div>
        );
    }
}
