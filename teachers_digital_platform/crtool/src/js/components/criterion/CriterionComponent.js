
import React from "react";

import CriterionRow from "./CriterionRow";

export default class CriterionComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
            <h3 className="h2">{this.props.criterionData.title}</h3>
            <p className="lead-paragraph">
                {this.props.criterionData.leadParagraph}
            </p>
            <ol className="m-list__unstyled">
                {
                    this.props.criterionData.rows.map(
                        (rowData, i) => 
                        <CriterionRow key={i} {...this.props} rowData={this.props.criterionData.rows[i]}/>) 
                }
            </ol>
            <div className="m-form-field m-form-field__textarea">
                <label className="a-label a-label__heading">
                    My notes
                    <small className="a-label_helper">(optional)</small>
                </label>
                <p>{this.props.criterionAnswers[this.props.criterionData.notesRefId]}</p>
                <br />
            </div>
            </React.Fragment>
        );
    }
}




