import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';
import SaveWorkModal from '../../dialogs/SaveWorkModal';
import CriterionLinkWrapper from '../CriterionLinkWrapper';
import UtilityCriterion from './UtilityCriterion';
import { UtilityContent } from '../../../content_data/utilityContent';

export default class UtilityCriterionPage extends React.Component {
  criterionAnswerChanged( key, checkedValue ) {
    this.initializeAnswerValuesByRefs();
    this.props.criterionAnswerChanged( C.UTILITY_PAGE, key, checkedValue );
  }

  componentDidMount() {
    this.initializeAnswerValuesByRefs();
  }

  initializeAnswerValuesByRefs() {
    var myObjects = this.refs;
    this.props.initializeAnswerObjects( myObjects );
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
            icon='settings-round'
            isLarge='true'
            hasSpaceAfter='true' />
                    Utility
        </h1>
        <p className='lead-paragraph'>
                    The utility dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge. Evaluation criteria are based on research and major national and state education standards. <a target='_blank' rel='noopener noreferrer' href={C.LEARN_MORE_PDF_LINK} onClick={e => { this.props.sendAnalyticsForLinkClick( C.LEARN_MORE_LINK_TEXT, C.LEARN_MORE_PDF_LINK ); }}>{C.LEARN_MORE_LINK_TEXT}</a>.
        </p>
        <h2>Instructions</h2>
        <ul>
          <li>Read lessons plans and supporting materials for the curriculum.</li>
          <li><strong>Answer all questions</strong> to continue to the summary page for the score on this dimension.</li>
        </ul>
        <p>
          <SaveWorkModal
            buttonText='How can I save my work?'
            hasIcon='false'
            hasUnderline='true' {...this.props} />
        </p>
        <div className='o-well
                                u-mb30
                                u-mt30'>
          <h3 className='h4'>What’s a beneficial component?</h3>
          <p>While most components in this dimension are essential to your review (have been shown to positively impact student learning), some are marked as beneficial. These <strong>beneficial components</strong> hold promise for positive impact on student learning, but may only be relevant and useful for some reviewers. Some of the scoring treats essential and beneficial components differently, but you’re still required to answer all beneficial components.</p>
        </div>
        <hr className='hr
                                u-mb30
                                u-mt30' />
        {this.props.renderFormLevelErrorMessage()}
        <UtilityCriterion criterion={UtilityContent.criterion[0]} {...this.props} />
        <CriterionLinkWrapper
          criterionKey={UtilityContent.criterion[1].questionRefId}
          criterionText={UtilityContent.criterion[1].title}
          {...this.props} >
          <UtilityCriterion criterion={UtilityContent.criterion[1]} {...this.props} />
          <CriterionLinkWrapper
            criterionKey={UtilityContent.criterion[2].questionRefId}
            criterionText={UtilityContent.criterion[2].title}
            {...this.props} >
            <UtilityCriterion criterion={UtilityContent.criterion[2]} {...this.props} />
            <CriterionLinkWrapper
              criterionKey={UtilityContent.criterion[3].questionRefId}
              criterionText={UtilityContent.criterion[3].title}
              {...this.props} >
              <UtilityCriterion criterion={UtilityContent.criterion[3]} {...this.props} />
              <CriterionLinkWrapper
                criterionKey={UtilityContent.criterion[4].questionRefId}
                criterionText={UtilityContent.criterion[4].title}
                {...this.props} >
                <UtilityCriterion criterion={UtilityContent.criterion[4]} {...this.props} />
              </CriterionLinkWrapper>
            </CriterionLinkWrapper>
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
