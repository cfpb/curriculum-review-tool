
import React from "react";

import RadioButton from "./RadioButton";

export default class CriterionAnswerArea extends React.Component {

    showBeneficialText() {
        if (this.props.componentData.showBenifitialText) {
            return (<p class="o-survey_question-helper">Beneficial, but not essential.</p>);
        }
        return null;
    }

    render() {
        return (
            <div class="o-survey_component">
                <div class="o-survey_question">
                    <p><span dangerouslySetInnerHTML={{__html: this.props.componentData.componentText}} /></p>
                    {this.showBeneficialText()}
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
                        radioText="NA"  
                        showButton={this.props.componentData.showNaButton}
                        text={this.props.text} 
                        isChecked={this.props.criterionAnswers[this.props.componentData.criterionRefId] === 'na'}  
                        {...this.props} />
                </div>
            </div>
        );
    }
}




