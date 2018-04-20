import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";

export default class CriterionLinkWrapper extends React.Component {

    renderChildren() {
        return this.props.children
    }

    handleCriterionTitleClick(criterionKey) {
        this.props.setCriterionStatusToInProgress(criterionKey);
    }

    componentWillMount() {
        this.props.setCriterionStatusToInStart(this.props.criterionKey);
    }

    renderCriterionTitle() {
        if (this.props.hideCriterion) {
            return (null);
        }
        else if (this.props.criterionCompletionStatuses[this.props.criterionKey] !== undefined &&
                 this.props.criterionCompletionStatuses[this.props.criterionKey] !== C.STATUS_IN_START) {
            return (this.props.children);
        }
        else {
            return(
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <button className="a-btn
                                            a-btn__heading
                                            a-btn__no-line"
                                onClick={(e) => {this.handleCriterionTitleClick(this.props.criterionKey)}} >
                            <SvgIcon
                                icon="plus-round"
                                hasSpaceAfter="true" />
                            {this.props.criterionText}
                        </button>
                    </h3>
                </div>
            );
        }
    }

    render() {
        return (
            this.renderCriterionTitle()
        );
    }
}
