
import React from "react";

import RadioButton from "./RadioButton";

export default class CriterionAnswerArea extends React.Component {

    showBeneficialText() {
        if (this.props.componentData.showBeneficialText) {
            return (<p class="o-survey_question-helper">Beneficial, but not essential.</p>);
        }
        return null;
    }

    renderComponentText() {
        if (this.props.componentData.hasInlineHtml) {
            return (<div className="u-mb15" dangerouslySetInnerHTML={{__html: this.props.componentData.componentText}} />);
        } else {
            return (<p>{this.props.componentData.componentText}</p>);
        }
    }

    renderTextFieldValue() {
        if (this.props.componentData.criterionTextRefId !== undefined &&
            this.props.criterionAnswers[this.props.componentData.criterionTextRefId] !== undefined &&
            this.props.criterionTextLabel !== undefined) {
            return (
                <div className="m-form-field m-form-field__text u-mt30">
                    <label className="a-label a-label__heading">
                        {this.props.criterionTextLabel}
                    </label>
                    <p>
                        {this.props.criterionAnswers[this.props.componentData.criterionTextRefId]}
                    </p>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div class="o-survey_component">
                <div class="o-survey_question">
                    {this.renderComponentText()}
                    {this.showBeneficialText()}
                    {this.renderTextFieldValue()}
                </div>
                <div class="o-survey_answer">
                    <RadioButton
                        radioText="Yes"
                        showButton="true"
                        text={this.props.text}
                        isChecked={this.props.criterionAnswers[this.props.componentData.criterionRefId] === 'yes'}
                        {...this.props} />
                    <RadioButton
                        radioText="No"
                        showButton="true"
                        text={this.props.text}
                        isChecked={this.props.criterionAnswers[this.props.componentData.criterionRefId] === 'no'}
                        {...this.props} />
                    <RadioButton
                        radioText="N/A"
                        showButton={this.props.componentData.showNaButton}
                        text={this.props.text}
                        isChecked={this.props.criterionAnswers[this.props.componentData.criterionRefId] === 'na'}
                        {...this.props} />
                </div>
            </div>
        );
    }
}
