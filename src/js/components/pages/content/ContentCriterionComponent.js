import React from 'react';

import C from '../../../business.logic/constants';
import FieldLevelErrorMessageComponent from '../../common/FieldLevelErrorMessageComponent';

export default class ContentCriterionComponent extends React.Component {

  criterionAnswerChanged( key, checkedValue ) {
    this.initializeAnswerValuesByRefs();
    this.props.criterionAnswerChanged( C.CONTENT_PAGE, key, checkedValue );
  }

  componentDidMount() {
    this.initializeAnswerValuesByRefs();
  }

  initializeAnswerValuesByRefs() {
    var myObjects = this.refs;
    this.props.initializeAnswerObjects( myObjects );
  }

  render() {
    return (
      <React.Fragment>
        <fieldset className='o-survey_fieldset'>
          <div className='o-survey_component'>
            <div className='o-survey_question'>
              <legend className='o-survey_legend'>
                <p>{this.props.component.componentText}</p>
              </legend>
            </div>
            <div className='o-survey_answer'>
              <div className='m-form-field
                                            m-form-field__radio
                                            m-form-field__lg-target'>
                <input className='a-radio' type='radio' value='1'
                  id={this.props.component.criterionRefId + 'a'}
                  name={this.props.component.criterionRefId}
                  ref={this.props.component.criterionRefId}
                  checked={this.props.criterionAnswers[this.props.component.criterionRefId] === 'yes'}
                  onChange={() => { this.criterionAnswerChanged( this.props.component.criterionRefId, 'yes' ); }} />
                <label className='a-label'
                  htmlFor={this.props.component.criterionRefId + 'a'}>
                                    Yes
                </label>
              </div>
              <div className='m-form-field
                                            m-form-field__radio
                                            m-form-field__lg-target'>
                <input className='a-radio' type='radio' value='0'
                  id={this.props.component.criterionRefId + 'b'}
                  name={this.props.component.criterionRefId}
                  ref={this.props.component.criterionRefId}
                  checked={this.props.criterionAnswers[this.props.component.criterionRefId] === 'no'}
                  onChange={() => { this.criterionAnswerChanged( this.props.component.criterionRefId, 'no' ); }} />
                <label className='a-label'
                  htmlFor={this.props.component.criterionRefId + 'b'}>
                                    No
                </label>
              </div>
            </div>
          </div>
          <FieldLevelErrorMessageComponent fieldId={this.props.component.criterionRefId} {...this.props} />
        </fieldset>
      </React.Fragment>
    );
  }
}
