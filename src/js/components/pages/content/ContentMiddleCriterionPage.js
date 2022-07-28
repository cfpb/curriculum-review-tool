import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';
import SaveWorkModal from '../../dialogs/SaveWorkModal';
import CriterionLinkWrapper from '../CriterionLinkWrapper';
import ContentCriterion from './ContentCriterion';
import { ContentMiddleCriterion } from '../../../content_data/contentMiddle';

export default class ContentMiddleCriterionPage extends React.Component {
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
            icon='document-round'
            isLarge='true'
            hasSpaceAfter='true' />
                    Content
        </h1>
        <p className='lead-paragraph'>
                    This dimension assesses whether the curriculum content helps students develop knowledge, skills, and behaviors that are important for financial capability. Evaluation criteria are based on research and major national and state education standards. <a target='_blank' rel='noopener noreferrer' href={C.LEARN_MORE_PDF_LINK} onClick={e => { this.props.sendAnalyticsForLinkClick( C.LEARN_MORE_LINK_TEXT, C.LEARN_MORE_PDF_LINK ); }}>{C.LEARN_MORE_LINK_TEXT}</a>.
        </p>
        <h2>Instructions</h2>
        <ul>
          <li>Read through the scope and sequence of the curriculum.</li>
          <li>Skim the lesson plans, student materials, and assessments.</li>
          <li>Select “yes” for the components that are addressed and “no” for those that are not.</li>
          <li><strong>Answer all questions</strong> to continue to the summary page for the score on this dimension.</li>
        </ul>
        <p>
          <SaveWorkModal
            buttonText='How can I save my work?'
            hasIcon='true'
            {...this.props} />
        </p>
        <hr className='hr
                                u-mb30
                                u-mt30' />
        {this.props.renderFormLevelErrorMessage()}
        <ContentCriterion criterion={ContentMiddleCriterion.criterion[0]} {...this.props} />
        <CriterionLinkWrapper
          criterionKey={ContentMiddleCriterion.criterion[1].questionRefId}
          criterionText={ContentMiddleCriterion.criterion[1].title}
          {...this.props} >
          <ContentCriterion criterion={ContentMiddleCriterion.criterion[1]} {...this.props} />
          <CriterionLinkWrapper
            criterionKey={ContentMiddleCriterion.criterion[2].questionRefId}
            criterionText={ContentMiddleCriterion.criterion[2].title}
            {...this.props} >
            <ContentCriterion criterion={ContentMiddleCriterion.criterion[2]} {...this.props} />
            <CriterionLinkWrapper
              criterionKey={ContentMiddleCriterion.criterion[3].questionRefId}
              criterionText={ContentMiddleCriterion.criterion[3].title}
              {...this.props} >
              <ContentCriterion criterion={ContentMiddleCriterion.criterion[3]} {...this.props} />
              <CriterionLinkWrapper
                criterionKey={ContentMiddleCriterion.criterion[4].questionRefId}
                criterionText={ContentMiddleCriterion.criterion[4].title}
                {...this.props} >
                <ContentCriterion criterion={ContentMiddleCriterion.criterion[4]} {...this.props} />
                <CriterionLinkWrapper
                  criterionKey={ContentMiddleCriterion.criterion[5].questionRefId}
                  criterionText={ContentMiddleCriterion.criterion[5].title}
                  {...this.props} >
                  <ContentCriterion criterion={ContentMiddleCriterion.criterion[5]} {...this.props} />
                </CriterionLinkWrapper>
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
