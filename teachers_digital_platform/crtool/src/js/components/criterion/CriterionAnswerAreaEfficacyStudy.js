import React from "react";

import RadioButton from "../buttons/RadioButton";

export default class CriterionAnswerAreaEfficacyStudy extends React.Component {

    showBeneficialText() {
        if (this.props.componentData.showBeneficialText) {
            return (<p class="o-survey_question-helper">Beneficial, but not essential.</p>);
        }
        return null;
    }

    renderComponentText() {
        let text = this.props.componentData.componentText;
        if (text === undefined || text === "") {
            text = <p class="o-survey_question-helper">No information provided</p>;
        }
        if (this.props.componentData.hasInlineHtml && text !== undefined) {
            return (<div className="u-mb15" dangerouslySetInnerHTML={{__html: text}} />);
        } else {
            return (<p>{text}</p>);
        }
    }

    renderTextFieldValue() {
        if (this.props.componentData.criterionTextRefId !== undefined &&
            this.props.criterionAnswers[this.props.componentData.criterionTextRefId] !== undefined &&
            this.props.componentData.criterionTextLabel !== undefined) {

            let text = this.props.criterionAnswers[this.props.componentData.criterionTextRefId];
            if (text === undefined || text === "") {
                text = <p class="o-survey_question-helper">No information provided</p>;
            }
            return (
                <div className="m-form-field m-form-field__text u-mt30">
                    <label className="a-label a-label__heading">
                        {this.props.componentData.criterionTextLabel}
                    </label>
                    <p>
                        {text}
                    </p>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <fieldset class="o-survey_fieldset">
                <div class="o-survey_component">
                    <div class="o-survey_question">
                        <legend class="o-survey_legend">
                            {this.renderComponentText()}
                            {this.showBeneficialText()}
                        </legend>
                        {this.renderTextFieldValue()}
                    </div>
                    <div class="o-survey_answer">
                        <RadioButton
                            radioText="Yes"
                            showButton="true"
                            text={this.props.text}
                            isChecked={this.props.studyAnswers[this.props.studyKey][this.props.componentData.criterionRefId.replace("_study_", this.props.studyKey)] === 'yes'}
                            {...this.props} />
                        <RadioButton
                            radioText="No"
                            showButton="true"
                            text={this.props.text}
                            isChecked={this.props.studyAnswers[this.props.studyKey][this.props.componentData.criterionRefId.replace("_study_", this.props.studyKey)] === 'no'}
                            {...this.props} />
                        <RadioButton
                            radioText="N/A"
                            showButton={this.props.componentData.showNaButton}
                            text={this.props.text}
                            isChecked={this.props.studyAnswers[this.props.studyKey][this.props.componentData.criterionRefId.replace("_study_", this.props.studyKey)] === 'na'}
                            {...this.props} />
                    </div>
                </div>
            </fieldset>
        );
    }
}
