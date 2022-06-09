import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';
import SaveWorkModal from '../../dialogs/SaveWorkModal';
import CriterionLinkWrapper from '../CriterionLinkWrapper';
import EfficacyStudyComponent from '../partial.pages/EfficacyStudyComponent';
import { EfficacyStudyContent } from '../../../content_data/efficacyStudyContent';
import EfficacyCriterion from './EfficacyCriterion';
import { EfficacyContent } from '../../../content_data/efficacyContent';

export default class EfficacyCriterionPage extends React.Component {
  criterionAnswerChanged( key, checkedValue ) {
    this.initializeAnswerValuesByRefs();
    this.props.criterionAnswerChanged( C.EFFICACY_PAGE, key, checkedValue );
  }

  componentDidMount() {
    this.initializeAnswerValuesByRefs();
  }

  initializeAnswerValuesByRefs() {
    var myObjects = this.refs;
    this.props.initializeAnswerObjects( myObjects );
  }

  UNSAFE_componentWillMount() {
    // This will force criterion 2 to always show with out the link title
    this.props.setCriterionTitleLinkClicked( 'efficacy-crt-question-2' );
  }

  twoStrongStudiesExist() {
    let count = 0;
    for ( var score in this.props.criterionScores ) {
      if ( score.indexOf( 'efficacy-crt-1' ) >= 0 && this.props.criterionScores[score].all_essential_yes ) {
        count += 1;
        if ( count === 2 ) {
          return true;
        }
      }
    }

    return false;
  }

  getEfficacyStudyItems() {
    let studyComponents = this.props.criterionEfficacyStudies;

    if ( studyComponents === undefined ) {
      return { 'efficacy-study-': { criterionName: 'efficacy-study-' }}; //In case the data gets removed we need at lest one element
    }
    return studyComponents;
  }

  addEfficacyStudy() {
    let maxValue = this.getMaxValueFromEfficacyItems() + 1;
    this.props.initializeEfficacyStudies( maxValue );
  }

  getMaxValueFromEfficacyItems() {
    let studyComponents = this.props.criterionEfficacyStudies;
    let maxNumber = Math.max.apply( Math, studyComponents );
    return maxNumber;
  }

  generateStudyRefId( criterionNumber, otherText ) {
    let newCriterionRefId = 'efficacy-crt-question-' + criterionNumber + otherText;
    return newCriterionRefId;
  }

  renderDoneAddingStoriesButton() {
    if ( this.props.finishAddingEfficacyStudies !== true ) {
      return (
        <button className='a-btn u-mb30'
          onClick={() => this.props.handleFinishAddingEfficacyStudies( true )} >
                    I’m done reviewing studies
        </button>
      );
    } else {
      return (
        <button className='a-btn u-mb30' disabled >
                    I’m done reviewing studies
        </button>
      );
    }
  }

  renderWarningContinueWithout2and3() {
    if ( this.props.finishAddingEfficacyStudies !== true || this.twoStrongStudiesExist() === true ) {
      return null;
    } else {
      return (
        <div className='m-notification
                        m-notification__visible
                        m-notification__success'>
          <SvgIcon icon='check-round' />
          <div className='m-notification_content'>
            <div className='m-notification_message'>
              <p>You don’t need to complete Criteria 2 or 3 and can move on to the efficacy summary.</p>
            </div>
          </div>
        </div>
      );
    }
  }

  summaryButtonIsEnabled() {
    return ( this.props.currentPage && this.props.currentPage !== C.START_PAGE ) &&
                        ( ( this.props.currentPage === C.CONTENT_PAGE && this.props.contentInProgress === C.STATUS_COMPLETE ) ||
                        ( this.props.currentPage === C.QUALITY_PAGE && this.props.qualityInProgress === C.STATUS_COMPLETE ) ||
                        ( this.props.currentPage === C.UTILITY_PAGE && this.props.utilityInProgress === C.STATUS_COMPLETE ) ||
                        ( this.props.currentPage === C.EFFICACY_PAGE && this.props.efficacyInProgress === C.STATUS_COMPLETE ) );
  }

  render() {
    return (
      <React.Fragment>
        <hr className='hr
                            u-mb45
                            u-mt30' />
        <h1 tabIndex='0' id={this.props.currentPage + '_dimensionTitle'}>
          <SvgIcon
            icon='credit-report-round'
            isLarge='true'
            hasSpaceAfter='true' />
                    Efficacy
        </h1>
        <p className='lead-paragraph'>
                    The efficacy dimension assesses the measurable impact the curriculum has had on students by looking at high-quality studies that have been done about its effectiveness. Evaluation criteria are based on research and major national and state education standards. <a target='_blank' rel='noopener noreferrer' href={C.LEARN_MORE_PDF_LINK} onClick={e => { this.props.sendAnalyticsForLinkClick( C.LEARN_MORE_LINK_TEXT, C.LEARN_MORE_PDF_LINK ); }}>{C.LEARN_MORE_LINK_TEXT}</a>.
        </p>
        <h2>Instructions</h2>
        <ul>
          <li>Locate research studies that report on the impact of the curriculum.</li>
          <li>If there aren’t any studies to review, click “I’m done reviewing studies” to continue to the efficacy summary.</li>
          <li>Review each study, paying particular attention to the following:
            <ul>
              <li>Citations, which indicate whether the study was recent</li>
              <li>Abstract, which indicates which curriculum was reviewed, the study design, and the findings</li>
              <li>Study design, which indicates whether the study format included a comparison group and the outcome measures; this information might also be in the sample and measures sections</li>
              <li>Results, which provide the findings</li>
            </ul>
          </li>
          <li>Answer the questions in Criterion 1 to determine if it’s a strong study. <strong>Repeat this for each study</strong> before clicking “I’m done reviewing studies.”</li>
        </ul>
        <p>
          <SaveWorkModal
            buttonText='How can I save my work?'
            hasIcon='true'
            {...this.props} />
        </p>
        <div className='o-well
                                u-mb30
                                u-mt30'>
          <h4>What’s a beneficial component?</h4>
          <p>While most components in this dimension are essential to your review (have been shown to positively impact student learning), some are marked as beneficial. These <strong>beneficial components</strong> hold promise for positive impact on student learning, but may only be relevant and useful for some reviewers. Some of the scoring treats essential and beneficial components differently, but you’re still required to answer all beneficial components.</p>
        </div>
        <hr className='hr
                                u-mb30
                                u-mt30' />
        {this.props.renderFormLevelErrorMessage()}
        <div className='block block__flush-top' id={EfficacyStudyContent.criterion[0].divId}>
          <h2>
            <SvgIcon
              icon={this.props.finishAddingEfficacyStudies && C.ICON_CHECK_ROUND}
              color='green'
              hasSpaceAfter='true' />
            {EfficacyStudyContent.criterion[0].title}
            {this.props.finishAddingEfficacyStudies && <span className='u-fc-gray'> (complete)</span>}
          </h2>
          <p className='lead-paragraph u-mb45 u-mt15'>
            {EfficacyStudyContent.criterion[0].leadParagraph}
          </p>
          <p>
            <b>You will answer these questions for each study individually.</b>
          </p>

          {this.getEfficacyStudyItems().map( i => <EfficacyStudyComponent key={i}
            {...this.props}
            studyCount={i}
            showRemoveButton={this.getEfficacyStudyItems().length > 1}
            criterionAnswerChanged={this.criterionAnswerChanged.bind( this )} />
          )}

          <div className='u-mt15 u-mb30'>
            <button className='a-btn a-btn__link a-btn__no-line'
              data-gtm_ignore='true'
              onClick={() => this.addEfficacyStudy()}>
                            Review another study
              <SvgIcon
                icon='plus-round'
                islarge='true'
                hasSpaceBefore='true' />
            </button>
          </div>
          {this.renderDoneAddingStoriesButton()}
          {this.renderWarningContinueWithout2and3()}
        </div>
        <CriterionLinkWrapper
          criterionKey={EfficacyContent.criterion[0].questionRefId}
          criterionText={EfficacyContent.criterion[0].title}
          hideCriterion={!this.twoStrongStudiesExist() || !this.props.finishAddingEfficacyStudies}
          {...this.props} >
          <EfficacyCriterion criterion={EfficacyContent.criterion[0]} {...this.props} />

          <CriterionLinkWrapper
            criterionKey={EfficacyContent.criterion[1].questionRefId}
            criterionText={EfficacyContent.criterion[1].title}
            {...this.props} >
            <EfficacyCriterion criterion={EfficacyContent.criterion[1]} {...this.props} />
          </CriterionLinkWrapper>
        </CriterionLinkWrapper>
        {
          this.summaryButtonIsEnabled() === false &&
                        <hr className='hr
                                        u-mb30
                                        u-mt45' />
        }
      </React.Fragment>
    );
  }
}
