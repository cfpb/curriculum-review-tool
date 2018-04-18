import React from "react";

import C from "../../../constants";
import SaveWorkModal from "../../dialogs/SaveWorkModal";
import SvgIcon from "../../svgs/SvgIcon";

export default class ContentElementarySummaryPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.CONTENT_PAGE, key, checkedValue);
    }

    render() {
        return (
            <div>
                <div className="l-survey-top">
                    <SaveWorkModal />
                </div>

                <p>This is Content Elementary Summary!</p>
                <h1>{this.props.currentPage} Summary page coming soon!</h1>

                <h3>{this.props.curriculumTitle}</h3>
                <h3>{this.props.publicationDate}</h3>
                <h3>{this.props.gradeRange}</h3>
            </div>
        );
    }
}
