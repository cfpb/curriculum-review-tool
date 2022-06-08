import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';
import SaveWorkModal from '../../dialogs/SaveWorkModal';
import CriterionLinkWrapper from '../CriterionLinkWrapper';
import QualityCriterion from './QualityCriterion';
import { QualityContent } from '../../../content_data/qualityContent';

export default class QualityCriterionPage extends React.Component {
  criterionAnswerChanged( key, checkedValue ) {
    this.initializeAnswerValuesByRefs();
    this.props.criterionAnswerChanged( C.QUALITY_PAGE, key, checkedValue );
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
            icon='star-round'
            isLarge='true'
            hasSpaceAfter='true' />
                    Quality
        </h1>
        <p className='lead-paragraph'>
                    The quality dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access. Evaluation criteria are based on research and major national and state education standards. <a target='_blank' rel='noopener noreferrer' href={C.LEARN_MORE_PDF_LINK} onClick={e => { this.props.sendAnalyticsForLinkClick( C.LEARN_MORE_LINK_TEXT, C.LEARN_MORE_PDF_LINK ); }}>{C.LEARN_MORE_LINK_TEXT}</a>.
        </p>
        <h2>Instructions</h2>
        <ul>
          <li>Read the lessons plans and supporting material for the curriculum.</li>
          <li><strong>Answer all questions</strong> to continue to the summary page for the score on this dimension.</li>
        </ul>
        <p>
          <SaveWorkModal
            buttonText='How can I save my work?'
            hasIcon='true' {...this.props} />
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
        <QualityCriterion criterion={QualityContent.criterion[0]} {...this.props} />
        <CriterionLinkWrapper
          criterionKey={QualityContent.criterion[1].questionRefId}
          criterionText={QualityContent.criterion[1].title}
          {...this.props} >
          <QualityCriterion criterion={QualityContent.criterion[1]} {...this.props} />
          <CriterionLinkWrapper
            criterionKey={QualityContent.criterion[2].questionRefId}
            criterionText={QualityContent.criterion[2].title}
            {...this.props} >
            <QualityCriterion criterion={QualityContent.criterion[2]} {...this.props} />
            <CriterionLinkWrapper
              criterionKey={QualityContent.criterion[3].questionRefId}
              criterionText={QualityContent.criterion[3].title}
              {...this.props} >
              <QualityCriterion criterion={QualityContent.criterion[3]} {...this.props} />
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
