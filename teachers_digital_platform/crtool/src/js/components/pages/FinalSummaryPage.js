import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import StartOverModal from "../dialogs/StartOverModal";

export default class FinalSummaryPage extends React.Component {
    render() {
        return (
            <div>
                <div className="l-survey-top">
                    <SaveWorkModal />
                </div>

                <p>This is {C.FINAL_SUMMARY_PAGE} This is the Final Summary!</p>
                <h1>{this.props.currentPage} Summary page coming soon!</h1>

                <h3>{this.props.curriculumTitle}</h3>
                <h3>{this.props.publicationDate}</h3>
                <h3>{this.props.gradeRange}</h3>

                <br /><br />

                <div className="u-center">
                    <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.FINAL_PRINT_PAGE); e.preventDefault();}}>Final Print</button>
                </div>

                <br /><br />

                <div className="u-center">
                    <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.START_PAGE); e.preventDefault();}}>Back</button>
                </div>

                <br /><br />

                <StartOverModal clearLocalStorage={(e) => {this.props.clearLocalStorage(); e.preventDefault();}}/>
            </div>
        );
    }
}
