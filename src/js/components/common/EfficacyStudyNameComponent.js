import React from 'react';

import FieldLevelErrorMessageComponent from './FieldLevelErrorMessageComponent';

export default class EfficacyStudyNameComponent extends React.Component {

  getFieldId() {
    return 'error-message-' + this.props.fieldId;
  }

  fieldMissingValue() {
    return this.props.studyAnswers[this.props.studyCount][this.props.generateStudyRefId( '', 'study' )] === undefined || this.props.studyAnswers[this.props.studyCount][this.props.generateStudyRefId( '', 'study' )] === '';
  }

  render() {
    if ( this.props.showErrorsForCurrentPage() && this.fieldMissingValue() ) {
      return (
        <div className='m-form-field m-form-field__text m-form-field__error'>
          <label className='a-label a-label__heading' for={this.props.generateStudyRefId( '', 'study' )}>
                        Study name
            <small className='a-label_helper a-label_helper__block'>
                            Enter name of study you’re reviewing
            </small>
          </label>
          <input className='a-text-input a-text-input__full a-text-input__error' type='text'
            id={this.props.generateStudyRefId( '', 'study' )}
            ref={this.props.generateStudyRefId( '', 'study' )}
            defaultValue={this.props.studyAnswers[this.props.studyCount][this.props.generateStudyRefId( '', 'study' )]}
            onBlur={e => this.props.criterionStudyAnswerChanged( this.props.generateStudyRefId( '', 'study' ), e.target.value )}
            aria-describedby='error-message-quality-crt-text-optional-1.1.1' />
          <FieldLevelErrorMessageComponent fieldId='quality-crt-text-optional-1.1.1' {...this.props} />
        </div>
      );
    } else {
      return (
        <div className='m-form-field m-form-field__text'>
          <label className='a-label a-label__heading' for={this.props.generateStudyRefId( '', 'study' )}>
                        Study name
            <small className='a-label_helper a-label_helper__block'>
                            Enter name of study you’re reviewing
            </small>
          </label>
          <input className='a-text-input a-text-input__full' type='text'
            id={this.props.generateStudyRefId( '', 'study' )}
            ref={this.props.generateStudyRefId( '', 'study' )}
            defaultValue={this.props.studyAnswers[this.props.studyCount][this.props.generateStudyRefId( '', 'study' )]}
            onBlur={e => this.props.criterionStudyAnswerChanged( this.props.generateStudyRefId( '', 'study' ), e.target.value )} />
        </div>
      );
    }
  }
}
