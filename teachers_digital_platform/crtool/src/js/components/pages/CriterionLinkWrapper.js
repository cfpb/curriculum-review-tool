import React from "react";

import C from "../../constants";

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
                                            a-btn__heading"
                                onClick={(e) => {this.handleCriterionTitleClick(this.props.criterionKey)}} >
                            <span className="a-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm263.1 550.7H549.6v213.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V655.9H236c-27.6 0-50-22.4-50-50s22.4-50 50-50h213.6V342.3c0-27.6 22.4-50 50-50s50 22.4 50 50v213.6h213.6c27.6 0 50 22.4 50 50s-22.5 50-50.1 50z"></path></svg></span>
                            &nbsp;{this.props.criterionText}
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
