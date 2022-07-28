import React from 'react';

import RadioButtonEditable from '../../buttons/RadioButtonEditable';
import FieldLevelErrorMessageComponent from '../../common/FieldLevelErrorMessageComponent';

export default class EditableSubComponentRow extends React.Component {

  showBeneficialText() {
    if ( this.props.showBeneficialText === 'true' ) {
      return <p className='o-survey_question-helper'>Beneficial, but not essential.</p>;
    }
    return null;
  }

  render() {
    return (
      <fieldset className='o-survey_fieldset'>
        <div className='o-survey_component'>
          <div className='o-survey_question'>
            <legend className='o-survey_legend'>
              <p>{this.props.componentText}</p>
              {this.showBeneficialText()}
            </legend>
          </div>
          <div className='o-survey_answer'>
            <RadioButtonEditable
              uniqueId='a'
              radioText='Yes'
              showButton='true'
              isChecked={this.props.criterionAnswers[this.props.currentCriterionRefId] === 'yes'}
              radioButtonClicked={e => { this.props.criterionAnswerChanged( this.props.currentCriterionRefId, 'yes' ); }}
              {...this.props} />

            <RadioButtonEditable
              uniqueId='b'
              radioText='No'
              showButton='true'
              isChecked={this.props.criterionAnswers[this.props.currentCriterionRefId] === 'no'}
              radioButtonClicked={e => { this.props.criterionAnswerChanged( this.props.currentCriterionRefId, 'no' ); }}
              {...this.props} />

            <RadioButtonEditable
              uniqueId='c'
              radioText='NA'
              showButton={this.props.showNaButton}
              isChecked={this.props.criterionAnswers[this.props.currentCriterionRefId] === 'na'}
              radioButtonClicked={e => { this.props.criterionAnswerChanged( this.props.currentCriterionRefId, 'na' ); }}
              {...this.props} />
          </div>
        </div>
        <FieldLevelErrorMessageComponent fieldId={this.props.currentCriterionRefId} {...this.props} />
      </fieldset>
    );
  }
}
