
import React from "react";

export default class RadioButtonEditable extends React.Component {
    render() {
        if (!this.props.showButton) {
            return null;
        } else {
            return (
                <div className="m-form-field m-form-field__radio m-form-field__lg-target">
                    <input className="a-radio" type="radio" value="0"
                        id={this.props.criterionRefId}
                        name={this.props.criterionRefId}
                        ref={this.props.criterionRefId}
                        checked={this.props.isChecked}
                        onChange={() => {this.criterionAnswerChanged()}} />

                    <label className="a-label" htmlFor={this.props.criterionRefId}>
                        {this.props.radioText}
                            <br /> JUNK
                    </label>
                </div>
            );
        }
    }
}
