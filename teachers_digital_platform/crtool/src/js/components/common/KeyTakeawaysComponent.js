import React from "react";

export default class KeyTakeawaysComponent extends React.Component {
    criterionAnswerChanged(key, checkedValue) {
        this.props.criterionAnswerChanged(this.props.dimensionPage, key, checkedValue);
    }

    render() {
        return (
            <div className="o-well u-mb30">
                <div className="m-form-field
                                m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="crt-key-takeaways">
                        <h2>
                            Key takeaways
                            &nbsp;<small className="a-label_helper">(optional)</small>
                        </h2>
                        <small className="a-label_helper a-label_helper__block">
                            Add any final thoughts about the overall curriculum. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="crt-key-takeaways"
                        ref="crt-key-takeaways"
                        value={this.props.criterionAnswers['crt-key-takeaways']}
                        onChange={e=>this.changeCriterionAnswer('crt-key-takeaways', e.target.value)} >
                    </textarea>
                </div>
            </div>
        );
    }
}