import React from 'react';

import C from '../../../business.logic/constants';
import DimensionIconTitleComponent from '../../common/DimensionIconTitleComponent';

export default class EfficacyOveralScoreComponent extends React.Component {
  criterionAnswerChanged( key, checkedValue ) {
    this.props.criterionAnswerChanged( C.EFFICACY_PAGE, key, checkedValue );
  }

  criterionOveralScoreClassName( level, type ) {
    let className = 'm-form-field_radio-icon';
    if ( type === 'text' ) className = 'm-form-field_radio-text';

    let dimensionScore = this.props.dimensionOverallScores[C.EFFICACY_PAGE];
    if ( dimensionScore !== undefined && level === dimensionScore ) {
      className = className + ' is-active';
    }

    return className;
  }

  renderNotesPrintVersion( notes ) {
    if ( notes === undefined || notes === '' ) {
      return <p className='o-survey_question-helper'>No information provided</p>;
    } else {
      return notes;
    }
  }

  isEditMode() {
    return this.props.currentPrintButton === C.START_PAGE || this.props.currentPrintButton === '';
  }

  isPrintMode() {
    let isPrintMode = false;
    isPrintMode = this.props.currentPrintButton !== '' && this.props.currentPrintButton !== C.START_PAGE;
    return isPrintMode;
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
            dimensionTitle={this.props.dimensionName + ' overall score'} />
          <p className='u-mb30'>
            {this.props.dimensionLead}
          </p>
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
                  <div className={this.criterionOveralScoreClassName( 'strong', 'text' )}>
                    <div><strong>Strong evidence of efficacy</strong></div>
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
                  <div className={this.criterionOveralScoreClassName( 'moderate', 'text' )}>
                    <div><strong>Moderate evidence of efficacy</strong></div>
                  </div>
                </div>
              </div>
            </li>
            <li className='u-mb30'>
              <div className='m-form-field
                                        m-form-field__radio
                                        m-form-field__display'>
                <div className='a-label'>
                  <svg className={this.criterionOveralScoreClassName( 'mixed' )} viewBox='0 0 22 22'>
                    <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                    <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                  </svg>
                  <div className={this.criterionOveralScoreClassName( 'mixed', 'text' )}>
                    <div><strong>Mixed evidence of efficacy</strong></div>
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
                  <div className={this.criterionOveralScoreClassName( 'limited', 'text' )}>
                    <div><strong>Limited evidence of efficacy</strong></div>
                  </div>
                </div>
              </div>
            </li>
            <li className='u-mb30'>
              <div className='m-form-field
                                        m-form-field__radio
                                        m-form-field__display'>
                <div className='a-label'>
                  <svg className={this.criterionOveralScoreClassName( 'notenoughinfo' )} viewBox='0 0 22 22'>
                    <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                    <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                  </svg>
                  <div className={this.criterionOveralScoreClassName( 'notenoughinfo', 'text' )}>
                    <div><strong>Not enough information</strong></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className='m-form-field
                                    u-mb30'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'assets-optional'} >
                            Assets
                            &nbsp;<small className='a-label_helper'>(optional)</small>
            </label>
            {this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'assets-optional'] )}
          </div>
          <div className='m-form-field
                                    u-mb30'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'gaps-optional'} >
                            Gaps
                            &nbsp;<small className='a-label_helper'>(optional)</small>
            </label>
            {this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'gaps-optional'] )}
          </div>
          <div className='m-form-field'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'overall-notes-optional'} >
                            Overall notes
                            &nbsp;<small className='a-label_helper'>(optional)</small>
            </label>
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
            dimensionTitle={this.props.dimensionName + ' overall score'} />
          <p className='u-mb30'>
            {this.props.dimensionLead}
          </p>
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
                  <div className={this.criterionOveralScoreClassName( 'strong', 'text' )}>
                    <div><strong>Strong evidence of efficacy</strong></div>
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
                  <div className={this.criterionOveralScoreClassName( 'moderate', 'text' )}>
                    <div><strong>Moderate evidence of efficacy</strong></div>
                  </div>
                </div>
              </div>
            </li>
            <li className='u-mb30'>
              <div className='m-form-field
                                        m-form-field__radio
                                        m-form-field__display'>
                <div className='a-label'>
                  <svg className={this.criterionOveralScoreClassName( 'mixed' )} viewBox='0 0 22 22'>
                    <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                    <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                  </svg>
                  <div className={this.criterionOveralScoreClassName( 'mixed', 'text' )}>
                    <div><strong>Mixed evidence of efficacy</strong></div>
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
                  <div className={this.criterionOveralScoreClassName( 'limited', 'text' )}>
                    <div><strong>Limited evidence of efficacy</strong></div>
                  </div>
                </div>
              </div>
            </li>
            <li className='u-mb30'>
              <div className='m-form-field
                                        m-form-field__radio
                                        m-form-field__display'>
                <div className='a-label'>
                  <svg className={this.criterionOveralScoreClassName( 'notenoughinfo' )} viewBox='0 0 22 22'>
                    <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                    <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                  </svg>
                  <div className={this.criterionOveralScoreClassName( 'notenoughinfo', 'text' )}>
                    <div><strong>Not enough information</strong></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className='m-form-field
                                    m-form-field__textarea
                                    u-mb30'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'assets-optional'} >
                            Assets
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              {this.isEditMode() &&

                                    <small className='a-label_helper a-label_helper__block'>
                                        List the strengths for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                                    </small>

              }
            </label>

            {this.isEditMode() &&
                            <textarea className='a-text-input a-text-input__full'
                              rows='6'
                              id={this.props.dimensionKey + 'assets-optional'}
                              ref={this.props.dimensionKey + 'assets-optional'}
                              defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'assets-optional']}
                              onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'assets-optional', e.target.value )} >
                            </textarea>
            }
            {this.isEditMode() === false &&
                            this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'assets-optional'] )
            }
          </div>
          <div className='m-form-field
                                    m-form-field__textarea
                                    u-mb30'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'gaps-optional'} >
                            Gaps
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              {this.isEditMode() &&

                                    <small className='a-label_helper a-label_helper__block'>
                                        List the weaknesses for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                                    </small>

              }
            </label>

            {this.isEditMode() &&
                            <textarea className='a-text-input a-text-input__full'
                              rows='6'
                              id={this.props.dimensionKey + 'gaps-optional'}
                              ref={this.props.dimensionKey + 'gaps-optional'}
                              defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'gaps-optional']}
                              onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'gaps-optional', e.target.value )} >
                            </textarea>
            }
            {this.isEditMode() === false &&
                            this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'gaps-optional'] )
            }
          </div>
          <div className='m-form-field
                                    m-form-field__textarea'>
            <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'overall-notes-optional'} >
                            Overall notes
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              {this.isEditMode() &&

                                    <small className='a-label_helper a-label_helper__block'>
                                        Add any final thoughts about the overall quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                                    </small>

              }
            </label>

            {this.isEditMode() &&
                            <textarea className='a-text-input a-text-input__full'
                              rows='6'
                              id={this.props.dimensionKey + 'overall-notes-optional'}
                              ref={this.props.dimensionKey + 'overall-notes-optional'}
                              defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'overall-notes-optional']}
                              onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'overall-notes-optional', e.target.value )} >
                            </textarea>
            }
            {this.isEditMode() === false &&
                            this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'overall-notes-optional'] )
            }
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className={this.isEditMode() && 'o-well u-mb30'}>
            <DimensionIconTitleComponent {...this.props} dimensionTitle={this.props.dimensionName + ' overall score'} />
            <p className='lead-paragraph'>
              {this.props.dimensionLead}
            </p>
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
                    <div className={this.criterionOveralScoreClassName( 'strong', 'text' )}>
                      <div><strong>Strong evidence of efficacy</strong></div>
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
                    <div className={this.criterionOveralScoreClassName( 'moderate', 'text' )}>
                      <div><strong>Moderate evidence of efficacy</strong></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='u-mb30'>
                <div className='m-form-field
                                            m-form-field__radio
                                            m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'mixed' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'mixed', 'text' )}>
                      <div><strong>Mixed evidence of efficacy</strong></div>
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
                    <div className={this.criterionOveralScoreClassName( 'limited', 'text' )}>
                      <div><strong>Limited evidence of efficacy</strong></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='u-mb30'>
                <div className='m-form-field
                                            m-form-field__radio
                                            m-form-field__display'>
                  <div className='a-label'>
                    <svg className={this.criterionOveralScoreClassName( 'notenoughinfo' )} viewBox='0 0 22 22'>
                      <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                      <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                    </svg>
                    <div className={this.criterionOveralScoreClassName( 'notenoughinfo', 'text' )}>
                      <div><strong>Not enough information</strong></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <hr className='hr
                                    u-mb45
                                    u-mt30' />
            <div className='m-form-field
                                        m-form-field__textarea
                                        u-mb30'>
              <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'assets-optional'} >
                                Assets
                                &nbsp;<small className='a-label_helper'>(optional)</small>
                {this.isEditMode() &&

                                        <small className='a-label_helper a-label_helper__block'>
                                            List the strengths for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                                        </small>

                }
              </label>

              {this.isEditMode() &&
                                <textarea className='a-text-input a-text-input__full'
                                  rows='6'
                                  id={this.props.dimensionKey + 'assets-optional'}
                                  ref={this.props.dimensionKey + 'assets-optional'}
                                  defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'assets-optional']}
                                  onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'assets-optional', e.target.value )} >
                                </textarea>
              }
              {this.isEditMode() === false &&
                                this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'assets-optional'] )
              }
            </div>
            <div className='m-form-field
                                        m-form-field__textarea
                                        u-mb30'>
              <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'gaps-optional'} >
                                Gaps
                                &nbsp;<small className='a-label_helper'>(optional)</small>
                {this.isEditMode() &&

                                        <small className='a-label_helper a-label_helper__block'>
                                            List the weaknesses for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                                        </small>

                }
              </label>

              {this.isEditMode() &&
                                <textarea className='a-text-input a-text-input__full'
                                  rows='6'
                                  id={this.props.dimensionKey + 'gaps-optional'}
                                  ref={this.props.dimensionKey + 'gaps-optional'}
                                  defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'gaps-optional']}
                                  onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'gaps-optional', e.target.value )} >
                                </textarea>
              }
              {this.isEditMode() === false &&
                                this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'gaps-optional'] )
              }
            </div>
            <div className='m-form-field
                                        m-form-field__textarea'>
              <label className='a-label a-label__heading' htmlFor={this.props.dimensionKey + 'overall-notes-optional'} >
                                Overall notes
                                &nbsp;<small className='a-label_helper'>(optional)</small>
                {this.isEditMode() &&

                                        <small className='a-label_helper a-label_helper__block'>
                                            Add any final thoughts about the overall quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                                        </small>

                }
              </label>

              {this.isEditMode() &&
                                <textarea className='a-text-input a-text-input__full'
                                  rows='6'
                                  id={this.props.dimensionKey + 'overall-notes-optional'}
                                  ref={this.props.dimensionKey + 'overall-notes-optional'}
                                  defaultValue={this.props.criterionAnswers[this.props.dimensionKey + 'overall-notes-optional']}
                                  onBlur={e => this.criterionAnswerChanged( this.props.dimensionKey + 'overall-notes-optional', e.target.value )} >
                                </textarea>
              }
              {this.isEditMode() === false &&
                                this.renderNotesPrintVersion( this.props.criterionAnswers[this.props.dimensionKey + 'overall-notes-optional'] )
              }
            </div>
          </div>
          <hr className='hr
                                   u-mb45
                                   u-mt30' />
        </React.Fragment>
      );
    }
  }
}
