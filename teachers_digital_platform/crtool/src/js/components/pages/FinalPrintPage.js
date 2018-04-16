import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import StartOverModal from "../dialogs/StartOverModal";

export default class FinalPrintPage extends React.Component {

    render() {
        return (
            <div>
                <div className="l-survey-top">
                    <SaveWorkModal />
                </div>

                <p>This is {C.FINAL_SUMMARY_PAGE} Print Page!</p>
                <h1>{this.props.currentPage} Print page coming soon!</h1>

                <h3>{this.props.curriculumTitle}</h3>
                <h3>{this.props.publicationDate}</h3>
                <h3>{this.props.gradeRange}</h3>
                
                <br /><br />

                <button onClick={(e) => {this.props.distinctiveClicked(C.FINAL_SUMMARY_PAGE); e.preventDefault();}}>
                    Final Summary
                </button>

                <br /><br />

                <button onClick={(e) => {this.props.distinctiveClicked(C.START_PAGE); e.preventDefault();}}>
                    Back
                </button>

                <br /><br />

                <StartOverModal clearLocalStorage={(e) => {this.props.clearLocalStorage(); e.preventDefault();}}/>
            </div>
        );
    }
}
