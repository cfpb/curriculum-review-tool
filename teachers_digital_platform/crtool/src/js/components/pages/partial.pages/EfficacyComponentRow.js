
import React from "react";

import RadioButtonEditable from "../../buttons/RadioButtonEditable";

export default class EfficacyComponentRow extends React.Component {

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
                        radioText="Yes"
                        showButton="true"
                        isChecked={this.props.currentCriterion === 'yes'}                                                
                        criterionAnswerChanged={(e) => {this.criterionAnswerChangedEfficacyStuday(this.props.currentCriterion, 'yes'); e.preventDefault();}}
                        {...this.props}/>

                    <RadioButtonEditable 
                        radioText="No"
                        showButton="true"
                        isChecked={this.props.currentCriterion === 'no'}
                        criterionAnswerChanged={(e) => {this.criterionAnswerChangedEfficacyStuday(this.props.currentCriterion, 'no'); e.preventDefault();}}
                        {...this.props}/>

                    <RadioButtonEditable 
                        radioText="NA"
                        showButton={this.props.showNaButton}
                        isChecked={this.props.currentCriterion === 'na'}
                        criterionAnswerChanged={(e) => {this.criterionAnswerChangedEfficacyStuday(this.props.currentCriterion, 'na'); e.preventDefault();}}
                        {...this.props}/>
                </div>
            </div>
        );
    }
}
