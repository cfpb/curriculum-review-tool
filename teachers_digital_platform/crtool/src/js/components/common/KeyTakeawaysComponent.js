import React from "react";

import C from "../../business.logic/constants";

export default class KeyTakeawaysComponent extends React.Component {
    criterionAnswerChanged(key, checkedValue) {
        this.props.criterionAnswerChanged(this.props.dimensionPage, key, checkedValue);
    }

    renderKeyTakeaway() {
        if (this.props.currentPrintButton === C.START_PAGE) {
            return this.renderEditableVersion();
        }
        else {
            return this.renderPrintVersion();
        }
    }

    renderEditableVersion() {
        return (
            <textarea className="a-text-input a-text-input__full"
                rows="6"
                id="crt-key-takeaways"
                ref="crt-key-takeaways"
                value={this.props.criterionAnswers["crt-key-takeaways"]}
                onChange={e=>this.props.criterionAnswerChanged("crt-key-takeaways", e.target.value)} >
            </textarea>
        );
    }

    renderPrintVersion() {
        let notes = this.props.criterionAnswers["crt-key-takeaways"];
        if (notes === undefined || notes === "") {
            return (<p class="o-survey_question-helper">No information provided</p>);
        } else {
            return (<p>{notes}</p>);
        }
    }


    render() {
        return (
            <div className={this.props.currentPrintButton === C.START_PAGE && "o-well u-mb30"}>
                <div className="m-form-field
                                m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="crt-key-takeaways">
                        <h2>
                            Key takeaways
                            &nbsp;<small className="a-label_helper">(optional)</small>
                        </h2>
                        {   
                            this.props.currentPrintButton === C.START_PAGE &&
                            <small className="a-label_helper a-label_helper__block">
                                Add any final thoughts about the overall curriculum. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        }
                    </label>
                    {this.renderKeyTakeaway()}
                </div>
            </div>
        );
    }
}