import React from 'react';

import C from '../../business.logic/constants';
import SvgIcon from '../svgs/SvgIcon';
import RequiredListItemLink from './RequiredListItemLink';

import { ContentElementaryCriterion } from '../../content_data/contentElementary';
import { ContentMiddleCriterion } from '../../content_data/contentMiddle';
import { ContentHighCriterion } from '../../content_data/contentHigh';
import { QualityContent } from '../../content_data/qualityContent';
import { UtilityContent } from '../../content_data/utilityContent';
import { EfficacyContent } from '../../content_data/efficacyContent';
import { EfficacyStudyContent } from '../../content_data/efficacyStudyContent';

export default class FormLevelErrorMessageComponent extends React.Component {
  getDimensionData() {
    if ( this.props.currentPage === C.CONTENT_PAGE ) {
      if ( this.props.gradeRange === C.GRADE_ELEMENTARY ) {
        return ContentElementaryCriterion;
      } else if ( this.props.gradeRange === C.GRADE_MIDDLE ) {
        return ContentMiddleCriterion;
      } else {
        return ContentHighCriterion;
      }
    } else if ( this.props.currentPage === C.QUALITY_PAGE ) {
      return QualityContent;
    } else if ( this.props.currentPage === C.UTILITY_PAGE ) {
      return UtilityContent;
    } else if ( this.props.currentPage === C.EFFICACY_PAGE ) {
      if ( this.props.finishAddingEfficacyStudies === true ) {
        return EfficacyContent;
      } else {
        return EfficacyStudyContent;
      }
    }
  }

  isEfficacyStudyRequiredIssues() {
    if ( this.props.currentPage === C.EFFICACY_PAGE && this.props.finishAddingEfficacyStudies !== true ) {
      return true;
    }

    return false;
  }

  getAllCriterionForCurrentPage() {
    let content = this.getDimensionData();
    let allCriterionObjects = [];

    if ( this.isEfficacyStudyRequiredIssues() ) {
      //Loop through each study
      // eslint-disable-next-line
            for (let studyKey in this.props.studyAnswers) {
        // Manually add the Study Name field
        let criterionKey = { criterionRefId: 'efficacy-crt-question-#' + studyKey + '#study', componentText: 'Study name' };
        allCriterionObjects.push( criterionKey );

        //Add all the other fields
        this.pushAllCriterionIntoList( content, allCriterionObjects, studyKey );
      }
    } else {
      this.pushAllCriterionIntoList( content, allCriterionObjects );
    }

    return allCriterionObjects;
  }

  pushAllCriterionIntoList( content, allCriterionObjects, studyKey ) {
    // This looping structure is based on the content_data JSON objects.  They are all the same for each Dimension
    let isEfficacyStudyIssues = this.isEfficacyStudyRequiredIssues(); // eslint-disable-next-line
        for (let criterionNumber in content.criterion) { // eslint-disable-next-line
            for (let rowIndex in content.criterion[criterionNumber].rows) { // eslint-disable-next-line
                for (let componentIndex in content.criterion[criterionNumber].rows[rowIndex].components) {

          let cloneMe = content.criterion[criterionNumber].rows[rowIndex].components[componentIndex];
          let criterionObject = Object.assign( {}, cloneMe );
          if ( isEfficacyStudyIssues ) {
            let newCriterionRefId = criterionObject.criterionRefId.replace( '_study_', studyKey );
            criterionObject.criterionRefId = newCriterionRefId;
          }

          allCriterionObjects.push( criterionObject );
        }
      }
    }
  }

  getMissingRequierdFields() {
    let missingCriterion = [];
    let currentDimension = this.props.currentPage.toLowerCase();
    let allCriterionForPage = this.getAllCriterionForCurrentPage();
    let isEfficacyStudyIssues = this.isEfficacyStudyRequiredIssues();

    if ( isEfficacyStudyIssues ) { // eslint-disable-next-line
            for (let studyKey in this.props.studyAnswers) {
        let studyCriterionAnswers = this.props.studyAnswers[studyKey];
        this.pushMissingRequiredFieldsOnToList( isEfficacyStudyIssues, missingCriterion, currentDimension, allCriterionForPage, studyCriterionAnswers, studyKey );
      }

    } else {
      this.pushMissingRequiredFieldsOnToList( isEfficacyStudyIssues, missingCriterion, currentDimension, allCriterionForPage, this.props.criterionAnswers, 0 );
    }

    return missingCriterion;
  }

  pushMissingRequiredFieldsOnToList( isEfficacyStudyIssues, missingCriterion, currentDimension, allCriterionForPage, answers, studyKey ) { // eslint-disable-next-line
        for (let index in allCriterionForPage) {
      let key = allCriterionForPage[index].criterionRefId;
      let value = answers[key];

      if ( isEfficacyStudyIssues ) {
        if ( key.indexOf( currentDimension ) >= 0 && key.indexOf( 'optional' ) < 0 && key.indexOf( '#' + studyKey + '#' ) > 0 ) {
          this.addToMissingList( missingCriterion, value, index, allCriterionForPage );
        }
      } else if ( key.indexOf( currentDimension ) >= 0 && key.indexOf( 'optional' ) < 0 ) {
        this.addToMissingList( missingCriterion, value, index, allCriterionForPage );
      }
    }
  }

  addToMissingList( missingCriterion, value, index, allCriterionForPage ) {
    if ( value === '' || value === null || value === undefined ) {
      missingCriterion.push( allCriterionForPage[index] );
    }
  }

  render() {
    let missingRequiredFields = this.getMissingRequierdFields();
    if ( missingRequiredFields.length > 0 ) {
      return (
        <div className='m-notification
                        m-notification__visible
                        m-notification__error
                        u-mb30'>
          <SvgIcon icon={C.ICON_X_ROUND} />
          <div className='m-notification_content'>
            <div className='h4 m-notification_message'>
              <p>The following form fields are incomplete or have errors:</p>
              <ul>
                {
                  missingRequiredFields.map(
                    ( criterion, i ) => <RequiredListItemLink key={i} {...this.props} criterion={criterion} isEfficacyStudyRequiredIssues={this.isEfficacyStudyRequiredIssues.bind( this )}/>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
