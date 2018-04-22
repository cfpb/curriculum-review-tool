import React from "react";

export default class EditableCriterionRowWrapper extends React.Component {

    render() {
        return (
            <li className="o-survey">
                <div className="o-survey_number">
                    <h4 className="h3">{this.props.criterionNumber}</h4>
                </div>
                <div className="o-survey_indicator">
                    <h5 className="h3">Indicator</h5>
                    <p>{this.props.indicatorText}</p>
                </div>
                <div className="o-survey_components">
                    <h5 className="h3">Component</h5>
                    {this.props.children}
                </div>
            </li>
        );
    }
}
