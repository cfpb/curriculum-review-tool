import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';

export default class EfficacyScopeEvidenceComponent extends React.Component {

  scopeOfEvidenceScore( level, type ) {
    let className = 'm-form-field_radio-icon';
    if ( type === 'text' ) className = 'm-form-field_radio-text';

    let dimensionScore = this.props.dimensionOverallScores[C.EFFICACY_SCOPE_EVIDENCE];
    if ( dimensionScore !== undefined && level === dimensionScore ) {
      className = className + ' is-active';
    }

    return className;
  }

  render() {
    return (
      <React.Fragment>
        <h2>Based on your answers, the efficacy score for this curriculum is:</h2>

        {this.props.currentPrintButton === C.START_PAGE &&
                    <p><a target='_blank' rel='noopener noreferrer' href='https://files.consumerfinance.gov/f/documents/cfpb_curriculum-review-tool_efficacy-scoring-guide_handout.pdf'> How efficacy is scored. <SvgIcon icon='document' hasSpaceBefore='true' /></a></p>
        }

        <h3>Score for scope of evidence</h3>
        <div className='m-curriculum-status'>
          <ul className='m-list__unstyled
                                    u-mb0'>
            <li className='u-mb30'>
              <div className='m-form-field
                                            m-form-field__radio
                                            m-form-field__display'>
                <div className='a-label'>
                  <svg className={this.scopeOfEvidenceScore( 'large' )} viewBox='0 0 22 22'>
                    <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                    <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                  </svg>
                  <div className={this.scopeOfEvidenceScore( 'large', 'text' )}>
                                        Large body of evidence
                  </div>
                </div>
              </div>
            </li>
            <li className='u-mb30'>
              <div className='m-form-field
                                            m-form-field__radio
                                            m-form-field__display'>
                <div className='a-label'>
                  <svg className={this.scopeOfEvidenceScore( 'moderate' )} viewBox='0 0 22 22'>
                    <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                    <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                  </svg>
                  <div className={this.scopeOfEvidenceScore( 'moderate', 'text' )}>
                                        Moderate body of evidence
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='m-form-field
                                            m-form-field__radio
                                            m-form-field__display'>
                <div className='a-label'>
                  <svg className={this.scopeOfEvidenceScore( 'small' )} viewBox='0 0 22 22'>
                    <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
                    <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
                  </svg>
                  <div className={this.scopeOfEvidenceScore( 'small', 'text' )}>
                                        Small body of evidence
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {this.props.currentPrintButton !== '' && this.props.currentPrintButton !== C.START_PAGE &&
                    <hr className='hr u-mb30 u-mt30' />
        }
      </React.Fragment>
    );
  }
}
