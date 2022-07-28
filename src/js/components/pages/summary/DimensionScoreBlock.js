import React from 'react';

import C from '../../../business.logic/constants';
import DimensionIconTitleComponent from '../../common/DimensionIconTitleComponent';

export default class DimensionScoreBlock extends React.Component {
  criterionAnswerChanged( key, checkedValue ) {
    this.props.criterionAnswerChanged( this.props.dimensionPage, key, checkedValue );
  }

  criterionOveralScoreClassName( level, type ) {
    let className = 'm-form-field_radio-icon';
    if ( type === 'text' ) className = 'm-form-field_radio-text';

    let dimensionScore = this.props.dimensionOverallScores[this.props.dimensionPage];
    if ( dimensionScore !== undefined && level === dimensionScore ) {
      className = className + ' is-active';
    }

    return className;
  }

  renderAriaChecked( level ) {
    let ariaChecked = 'false';
    let dimensionScore = this.props.dimensionOverallScores[this.props.dimensionPage];

    if ( dimensionScore !== undefined && level === dimensionScore ) {
      ariaChecked = 'true';
    }

    return ariaChecked;
  }


  renderNotesPrintVersion( notes ) {
    if ( notes === undefined || notes === '' ) {
      return <p className='o-survey_question-helper'>No information provided</p>;
    } else {
      return notes;
    }
  }

  isPrintMode() {
    let isPrintMode = false;
    isPrintMode = this.props.currentPrintButton !== '' && this.props.currentPrintButton !== C.START_PAGE;
    return isPrintMode;
  }

  generateUniqueId() {
    return 'radio_' + this.props.dimensionKey + 'overall';
  }

  render() {
    if ( this.isPrintMode() === true ) {
      return (
        <div className='block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom'>
          <DimensionIconTitleComponent
            {...this.props}
            dimensionTitle={this.props.dimensionName + ' overall score'}
            id={this.generateUniqueId()} />
          <p className='u-mb30'>
            {this.props.dimensionLead}
          </p>
          <div role='radiogroup' aria-describedby={this.generateUniqueId()}>
            <ul className='m-list__unstyled'>
              <li className='u-mb30'>
                <div className='m-form-field
                                                m-form-field__radio
                                                m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'strong' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'strong', 'text' )}
                      role='radio'
                      aria-checked={this.renderAriaChecked( 'strong' )}
                      aria-disabled='true'>
                      <div><strong>Strong {this.props.dimensionPage.toLowerCase()}</strong></div>
                      {this.props.strongText}
                    </div>
                  </div>
                </div>
              </li>
              <li className='u-mb30'>
                <div className='m-form-field
                                                m-form-field__radio
                                                m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'moderate' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'moderate', 'text' )}
                      role='radio'
                      aria-checked={this.renderAriaChecked( 'moderate' )}
                      aria-disabled='true'>
                      <div><strong>Moderate {this.props.dimensionPage.toLowerCase()}</strong></div>
                      {this.props.moderateText}
                    </div>
                  </div>
                </div>
              </li>
              <li className='u-mb30'>
                <div className='m-form-field
                                                m-form-field__radio
                                                m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'limited' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'limited', 'text' )}
                      role='radio'
                      aria-checked={this.renderAriaChecked( 'limited' )}
                      aria-disabled='true'>
                      <div><strong>Limited {this.props.dimensionPage.toLowerCase()}</strong></div>
                      {this.props.limitedText}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='m-form-field
                                    u-mb30'>
            <div className='a-label a-label__heading'>
                            Assets
                            &nbsp;<small className='a-label_helper'>(optional)</small>
            </div>
            {this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'assets-optional'] )}
          </div>
          <div className='m-form-field
                                    m-form-field__textarea
                                    u-mb30'>
            <div className='a-label a-label__heading'>
                            Gaps
                            &nbsp;<small className='a-label_helper'>(optional)</small>
            </div>
            {this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'gaps-optional'] )}
          </div>
          <div className='m-form-field
                                    m-form-field__textarea'>
            <div className='a-label a-label__heading'>
                            Overall notes
                            &nbsp;<small className='a-label_helper'>(optional)</small>
            </div>
            {this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'overall-notes-optional'] )}
          </div>
        </div>
      );
    } else if ( this.props.isFinalSummary === 'true' ) {
      return (
        <div className='block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom'>
          <DimensionIconTitleComponent
            {...this.props}
            dimensionTitle={this.props.dimensionName + ' overall score'}
            id={this.generateUniqueId()} />
          <p className='u-mb30'>
            {this.props.dimensionLead}
          </p>
          <div role='radiogroup' aria-describedby={this.generateUniqueId()}>
            <ul className='m-list__unstyled'>
              <li className='u-mb30'>
                <div className='m-form-field
                                                m-form-field__radio
                                                m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'strong' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'strong', 'text' )}
                      role='radio'
                      aria-checked={this.renderAriaChecked( 'strong' )}
                      aria-disabled='true'>
                      <div><strong>Strong {this.props.dimensionPage.toLowerCase()}</strong></div>
                      {this.props.strongText}
                    </div>
                  </div>
                </div>
              </li>
              <li className='u-mb30'>
                <div className='m-form-field
                                                m-form-field__radio
                                                m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'moderate' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'moderate', 'text' )}
                      role='radio'
                      aria-checked={this.renderAriaChecked( 'moderate' )}
                      aria-disabled='true'>
                      <div><strong>Moderate {this.props.dimensionPage.toLowerCase()}</strong></div>
                      {this.props.moderateText}
                    </div>
                  </div>
                </div>
              </li>
              <li className='u-mb30'>
                <div className='m-form-field
                                                m-form-field__radio
                                                m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'limited' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'limited', 'text' )}
                      role='radio'
                      aria-checked={this.renderAriaChecked( 'limited' )}
                      aria-disabled='true'>
                      <div><strong>Limited {this.props.dimensionPage.toLowerCase()}</strong></div>
                      {this.props.limitedText}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='m-form-field
                                    m-form-field__textarea
                                    u-mb30'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'assets-optional'} >
                            Assets
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              <small className='a-label_helper a-label_helper__block'>
                                List the strengths for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
              </small>
            </label>
            <textarea className='a-text-input a-text-input__full'
              rows='6'
              id={this.props.dimensionKey + 'assets-optional'}
              ref={this.props.dimensionKey + 'assets-optional'}
              defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'assets-optional']}
              onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'assets-optional', e.target.value )} >
            </textarea>
          </div>
          <div className='m-form-field
                                    m-form-field__textarea
                                    u-mb30'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'gaps-optional'} >
                            Gaps
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              <small className='a-label_helper a-label_helper__block'>
                                List the weaknesses for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
              </small>
            </label>
            <textarea className='a-text-input a-text-input__full'
              rows='6'
              id={this.props.dimensionKey + 'gaps-optional'}
              ref={this.props.dimensionKey + 'gaps-optional'}
              defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'gaps-optional']}
              onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'gaps-optional', e.target.value )} >
            </textarea>
          </div>
          <div className='m-form-field
                                    m-form-field__textarea'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'overall-notes-optional'} >
                            Overall notes
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              <small className='a-label_helper a-label_helper__block'>
                                Add any final thoughts about the overall quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
              </small>
            </label>
            <textarea className='a-text-input a-text-input__full'
              rows='6'
              id={this.props.dimensionKey + 'overall-notes-optional'}
              ref={this.props.dimensionKey + 'overall-notes-optional'}
              defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'overall-notes-optional']}
              onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'overall-notes-optional', e.target.value )} >
            </textarea>
          </div>
        </div>
      );
    } else {
      return (
        <div className='o-well u-mb30'>
          <DimensionIconTitleComponent
            {...this.props}
            dimensionTitle={this.props.dimensionName + ' overall score'}
            id={this.generateUniqueId()}
            isH1='true' />
          <p className='lead-paragraph'>
            {this.props.dimensionLead}
          </p>
          <div role='radiogroup' aria-describedby={this.generateUniqueId()}>
            <ul className='m-list__unstyled'>
              <li className='u-mb30'>
                <div className='m-form-field
                                                m-form-field__radio
                                                m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'strong' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'strong', 'text' )}
                      role='radio'
                      aria-checked={this.renderAriaChecked( 'strong' )}
                      aria-disabled='true'>
                      <div><strong>Strong {this.props.dimensionPage.toLowerCase()}</strong></div>
                      {this.props.strongText}
                    </div>
                  </div>
                </div>
              </li>
              <li className='u-mb30'>
                <div className='m-form-field
                                                m-form-field__radio
                                                m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'moderate' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'moderate', 'text' )}
                      role='radio'
                      aria-checked={this.renderAriaChecked( 'moderate' )}
                      aria-disabled='true'>
                      <div><strong>Moderate {this.props.dimensionPage.toLowerCase()}</strong></div>
                      {this.props.moderateText}
                    </div>
                  </div>
                </div>
              </li>
              <li className='u-mb30'>
                <div className='m-form-field
                                                m-form-field__radio
                                                m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'limited' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'limited', 'text' )}
                      role='radio'
                      aria-checked={this.renderAriaChecked( 'limited' )}
                      aria-disabled='true'>
                      <div><strong>Limited {this.props.dimensionPage.toLowerCase()}</strong></div>
                      {this.props.limitedText}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <hr className='hr
                                    u-mb45
                                    u-mt30' />
          <div className='m-form-field
                                    m-form-field__textarea
                                    u-mb30'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'assets-optional'} >
                            Assets
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              <small className='a-label_helper a-label_helper__block'>
                                List the strengths for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
              </small>
            </label>
            <textarea className='a-text-input a-text-input__full'
              rows='6'
              id={this.props.dimensionKey + 'assets-optional'}
              ref={this.props.dimensionKey + 'assets-optional'}
              defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'assets-optional']}
              onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'assets-optional', e.target.value )} >
            </textarea>
          </div>
          <div className='m-form-field
                                    m-form-field__textarea
                                    u-mb30'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'gaps-optional'} >
                            Gaps
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              <small className='a-label_helper a-label_helper__block'>
                                List the weaknesses for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
              </small>
            </label>
            <textarea className='a-text-input a-text-input__full'
              rows='6'
              id={this.props.dimensionKey + 'gaps-optional'}
              ref={this.props.dimensionKey + 'gaps-optional'}
              defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'gaps-optional']}
              onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'gaps-optional', e.target.value )} >
            </textarea>
          </div>
          <div className='m-form-field
                                    m-form-field__textarea'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'overall-notes-optional'} >
                            Overall notes
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              <small className='a-label_helper a-label_helper__block'>
                                Add any final thoughts about the overall quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
              </small>
            </label>
            <textarea className='a-text-input a-text-input__full'
              rows='6'
              id={this.props.dimensionKey + 'overall-notes-optional'}
              ref={this.props.dimensionKey + 'overall-notes-optional'}
              defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'overall-notes-optional']}
              onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'overall-notes-optional', e.target.value )} >
            </textarea>
          </div>
        </div>
      );
    }
  }
}
