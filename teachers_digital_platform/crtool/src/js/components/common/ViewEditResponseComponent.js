import React from "react";


import SvgIcon from "../svgs/SvgIcon";

export default class ViewEditResponseComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="l-survey-top">
                    <button className="a-btn a-btn__link" onClick={(e) => {this.props.setDistinctiveBackToInProgress(this.props.criterionPage)}}>
                        <SvgIcon
                            icon="pencil"
                            islarge="true"
                            hasSpaceAfter="true" />
                        View or edit responses
                    </button>
                </div>
            </React.Fragment>
        );
    }
}




