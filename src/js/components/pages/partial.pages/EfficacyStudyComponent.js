import React from 'react';

import EfficacyStudyScoreComponent from './EfficacyStudyScoreComponent';
import EditableSubComponentRow from './EditableSubComponentRow';
import EfficacyStudyNameComponent from '../../common/EfficacyStudyNameComponent';
import { EfficacyStudyContent } from '../../../content_data/efficacyStudyContent';
import RemoveEfficacyStudyModal from '../../dialogs/RemoveEfficacyStudyModal';

export default class EfficacyStudyComponent extends React.Component {

  showRemoveButton() {
    if ( this.props.showRemoveButton ) {
      return (
        <div className='l-survey-top'>
          <RemoveEfficacyStudyModal {...this.props} />
        </div>
      );
    }
    return null;
  }

  removeEfficacyStudy( studyNumber ) {
    this.props.removeEfficacyStudy( studyNumber );
  }

  generateStudyRefId( criterionNumber, otherText ) {
    let newCriterionRefId = 'efficacy-crt-question-' + criterionNumber + '#' + this.props.studyCount + '#' + otherText;
    return newCriterionRefId;
  }

  UNSAFE_componentWillMount() {
    this.initializeAnswerObjects();
  }

  criterionStudyAnswerChanged( key, checkedValue ) {
    if ( this.props.studyAnswers[this.props.studyCount][key] !== checkedValue ) {
      this.props.studyAnswerChanged( this.props.studyCount, key, checkedValue );
    }
  }

  initializeAnswerObjects() {
    let studyRefIds = {};

    studyRefIds['efficacy-crt-question-1#' + this.props.studyCount + '#_notes_optional'] = '';
    studyRefIds['efficacy-crt-question-1.1.1#' + this.props.studyCount + '#'] = '';
    studyRefIds['efficacy-crt-question-1.1.2#' + this.props.studyCount + '#_beneficial'] = '';
    studyRefIds['efficacy-crt-question-1.2#' + this.props.studyCount + '#'] = '';
    studyRefIds['efficacy-crt-question-1.3.1#' + this.props.studyCount + '#_beneficial'] = '';
    studyRefIds['efficacy-crt-question-1.3.2#' + this.props.studyCount + '#_beneficial'] = '';
    studyRefIds['efficacy-crt-question-1.4.1#' + this.props.studyCount + '#'] = '';
    studyRefIds['efficacy-crt-question-1.4.2#' + this.props.studyCount + '#'] = '';
    studyRefIds['efficacy-crt-question-1.4.3#' + this.props.studyCount + '#'] = '';
    studyRefIds['efficacy-crt-question-1.4.4#' + this.props.studyCount + '#'] = '';
    studyRefIds['efficacy-crt-question-1.4.5#' + this.props.studyCount + '#_beneficial'] = '';
    studyRefIds['efficacy-crt-question-1.4.6#' + this.props.studyCount + '#_beneficial'] = '';
    studyRefIds['efficacy-crt-question-1.5#' + this.props.studyCount + '#'] = '';
    studyRefIds['efficacy-crt-question-1.6#' + this.props.studyCount + '#'] = '';
    studyRefIds['efficacy-crt-question-#' + this.props.studyCount + '#study'] = '';

    this.props.initializeStudyAnswers( this.props.studyCount, studyRefIds ); ;
  }

  render() {
    return (
      <React.Fragment>
        <div className='u-mt45 u-mb30'>
          {this.showRemoveButton()}
          <EfficacyStudyNameComponent
            criterionStudyAnswerChanged={this.criterionStudyAnswerChanged.bind( this )}
            generateStudyRefId={this.generateStudyRefId.bind( this )}
            {...this.props} />
        </div>
        <ol className='m-list__unstyled'>
          { EfficacyStudyContent.criterion[0].rows.map(
            ( rowData, i ) => <li key={i} className='o-survey'>
              <div className='o-survey_number'>
                <h3>{rowData.indicatorNumber}</h3>
              </div>
              <div className='o-survey_indicator'>
                <h4 className='h3'>Indicator</h4>
                <p>{rowData.indicatorText}</p>
              </div>
              <div className='o-survey_components'>
                <h4 className='h3'>Component</h4>
                {rowData.components.map(
                  ( componentData, j ) => <EditableSubComponentRow
                    key={j}
                    componentText={componentData.componentText}
                    showBeneficialText={componentData.showBeneficialText.toString()}
                    showNaButton={componentData.showNaButton.toString()}
                    currentCriterionRefId={componentData.criterionRefId.replace( '_study_', this.props.studyCount )}
                    {...this.props}
                    criterionAnswerChanged={this.criterionStudyAnswerChanged.bind( this )}
                    criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                  />
                )}
              </div>
            </li>
          )}
        </ol>
        <div className='m-form-field m-form-field__textarea'>
          <label className='a-label a-label__heading' htmlFor={this.generateStudyRefId( '1', '_notes_optional' )}>
                        My notes
                        &nbsp;<small className='a-label_helper'>(optional)</small>
            <small className='a-label_helper a-label_helper__block'>
                        Anything you want to note about this study? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
            </small>
          </label>
          <textarea className='a-text-input a-text-input__full u-mb30'
            rows='6'
            id={this.generateStudyRefId( '1', '_notes_optional' )}
            ref={this.generateStudyRefId( '1', '_notes_optional' )}
            defaultValue={this.props.studyAnswers[this.props.studyCount][this.generateStudyRefId( '1', '_notes_optional' )]}
            onBlur={e => this.criterionStudyAnswerChanged( this.generateStudyRefId( '1', '_notes_optional' ), e.target.value )} >
          </textarea>
        </div>
        <EfficacyStudyScoreComponent
          studyScore={this.props.criterionScores['efficacy-crt-1-' + this.props.studyCount]}
          studyScoreName={this.props.studyAnswers[this.props.studyCount][this.generateStudyRefId( '', 'study' )]}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}
