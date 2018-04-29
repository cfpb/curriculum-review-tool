import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";

export default class ViewEditResponseComponent extends React.Component {
    render() {
        if (this.props.currentPrintButton === C.START_PAGE ||
            this.props.currentPrintButton === "") {
            return (
                <React.Fragment>
                    <div className="l-survey-top">
                        <button className="a-btn a-btn__link a-btn__no-line" onClick={(e) => {this.props.setDistinctiveBackToInProgress(this.props.criterionPage)}}>
                            <SvgIcon
                                icon="pencil"
                                islarge="true"
                                hasSpaceAfter="true" />
                            View or edit responses
                        </button>
                    </div>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}
