import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";

export default class EfficacySummaryPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.EFFICACY_PAGE, key, checkedValue);
    }

    render() {
        return (
            <div>                
            <SaveWorkModal />
            
            <p>This is Efficacy Summary!</p>
                <h1>{this.props.currentPage} Summary page coming soon!</h1>
        
                <h3>{this.props.curriculumTitle}</h3>
                <h3>{this.props.publicationDate}</h3>
                <h3>{this.props.gradeRange}</h3>
            </div>
        );
    }
}
