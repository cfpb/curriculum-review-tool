
import React from "react";

import RadioButtonEditable from "../../buttons/RadioButtonEditable";

export default class EfficacySubComponentRow extends React.Component {

    showBenifitialText() {
        if (this.props.showBenifitialText === "true") {
            return (<p class="o-survey_question-helper">Beneficial, but not essential.</p>);
        }
        return null;
    }

    render() {
        return (

            <div className="o-survey_component">
                <div class="o-survey_question">
                    <p>{this.props.componentText}</p>
                    {this.showBenifitialText()}
                </div>
                <div className="o-survey_answer">
                    <RadioButtonEditable
                        uniqueId="a" 
                        radioText="Yes"
                        showButton="true"
                        isChecked={this.props.criterionAnswers[this.props.currentCriterionRefId] === 'yes'}                                                
                        radioButtonClicked={(e) => {this.props.criterionAnswerChanged(this.props.currentCriterionRefId, 'yes');}}
                        {...this.props} />

                    <RadioButtonEditable 
                        uniqueId="b" 
                        radioText="No"
                        showButton="true"
                        isChecked={this.props.criterionAnswers[this.props.currentCriterionRefId] === 'no'} 
                        radioButtonClicked={(e) => {this.props.criterionAnswerChanged(this.props.currentCriterionRefId, 'no');}}
                        {...this.props} />

                    <RadioButtonEditable 
                        uniqueId="c" 
                        radioText="NA"
                        showButton={this.props.showNaButton}
                        isChecked={this.props.criterionAnswers[this.props.currentCriterionRefId] === 'na'} 
                        radioButtonClicked={(e) => {this.props.criterionAnswerChanged(this.props.currentCriterionRefId, 'na');}}
                        {...this.props} />
                </div>
            </div>
        );
    }
}
