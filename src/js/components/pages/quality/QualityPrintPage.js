import React from 'react';

import C from '../../../business.logic/constants';
import PrintIntroComponent from '../partial.pages/PrintIntroComponent';
import CriterionScoreBlock from '../summary/CriterionScoreBlock';
import DimensionScoreBlock from '../summary/DimensionScoreBlock';
import DimensionInformation from '../../common/DimensionInformation';
import QualityCriterionBlockSummary from '../summary/QualityCriterionBlockSummary';
import { QualityContent } from '../../../content_data/qualityContent';


export default class QualityPrintPage extends React.Component {

  componentDidMount() {
    this.props.resetPrintButtonState( C.QUALITY_PAGE );
  }

  render() {

    return (
      <React.Fragment>
        {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

        <DimensionInformation
          dimensionName={C.QUALITY_PAGE}
          dimensionSummary={C.QUALITY_SUMMARY_TEXT}
          {...this.props}
          reviewedOnDate={this.props.distinctiveCompletedDate[C.QUALITY_PAGE]} />

        {/* Criterion 1 */}
        <CriterionScoreBlock
          showExceeds={QualityContent.criterion[0].showExceeds}
          showBeneficial={QualityContent.criterion[0].showBeneficial}
          hideMeets={QualityContent.criterion[0].hideMeets}
          dimensionKey={C.QUALITY_KEY}
          dimensionPage={C.QUALITY_PAGE}
          criterionNumber={QualityContent.criterion[0].criterionNumber}
          criterionName={QualityContent.criterion[0].title}
          criterionLead={QualityContent.criterion[0].criterionLead}
          criterionExceedsText={QualityContent.criterion[0].criterionExceedsText}
          criterionMeetsText={QualityContent.criterion[0].criterionMeetsText}
          criterionDoesNotMeetText={QualityContent.criterion[0].criterionDoesNotMeetText}
          essentialAnswerTotalText={C.QUALITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.QUALITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />

        {/* Criterion 2 */}
        <CriterionScoreBlock
          showExceeds={QualityContent.criterion[1].showExceeds}
          showBeneficial={QualityContent.criterion[1].showBeneficial}
          hideMeets={QualityContent.criterion[1].hideMeets}
          dimensionKey={C.QUALITY_KEY}
          dimensionPage={C.QUALITY_PAGE}
          criterionNumber={QualityContent.criterion[1].criterionNumber}
          criterionName={QualityContent.criterion[1].title}
          criterionLead={QualityContent.criterion[1].criterionLead}
          criterionExceedsText={QualityContent.criterion[1].criterionExceedsText}
          criterionMeetsText={QualityContent.criterion[1].criterionMeetsText}
          criterionDoesNotMeetText={QualityContent.criterion[1].criterionDoesNotMeetText}
          essentialAnswerTotalText={C.QUALITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.QUALITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />

        {/* Criterion 3 */}
        <CriterionScoreBlock
          showExceeds={QualityContent.criterion[2].showExceeds}
          showBeneficial={QualityContent.criterion[2].showBeneficial}
          hideMeets={QualityContent.criterion[2].hideMeets}
          dimensionKey={C.QUALITY_KEY}
          dimensionPage={C.QUALITY_PAGE}
          criterionNumber={QualityContent.criterion[2].criterionNumber}
          criterionName={QualityContent.criterion[2].title}
          criterionLead={QualityContent.criterion[2].criterionLead}
          criterionExceedsText={QualityContent.criterion[2].criterionExceedsText}
          criterionMeetsText={QualityContent.criterion[2].criterionMeetsText}
          criterionDoesNotMeetText={QualityContent.criterion[2].criterionDoesNotMeetText}
          essentialAnswerTotalText={C.QUALITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.QUALITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />

        {/* Criterion 4 */}
        <CriterionScoreBlock
          showExceeds={QualityContent.criterion[3].showExceeds}
          showBeneficial={QualityContent.criterion[3].showBeneficial}
          hideMeets={QualityContent.criterion[3].hideMeets}
          dimensionKey={C.QUALITY_KEY}
          dimensionPage={C.QUALITY_PAGE}
          criterionNumber={QualityContent.criterion[3].criterionNumber}
          criterionName={QualityContent.criterion[3].title}
          criterionLead={QualityContent.criterion[3].criterionLead}
          criterionExceedsText={QualityContent.criterion[3].criterionExceedsText}
          criterionMeetsText={QualityContent.criterion[3].criterionMeetsText}
          criterionDoesNotMeetText={QualityContent.criterion[3].criterionDoesNotMeetText}
          essentialAnswerTotalText={C.QUALITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.QUALITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />

        <hr className='hr
                                u-mb30
                                u-mt30' />

        {/* Quality Overall Score */}
        <DimensionScoreBlock
          dimensionPage={C.QUALITY_PAGE}
          dimensionKey={C.QUALITY_KEY}
          dimensionName={C.QUALITY_PAGE}
          dimensionLead={C.QUALITY_LEAD_TEXT}
          strongText={C.QUALITY_STRONG_TEXT}
          moderateText={C.QUALITY_MODERATE_TEXT}
          limitedText={C.QUALITY_LIMITED_TEXT}
          {...this.props} />

        <QualityCriterionBlockSummary {...this.props} />
      </React.Fragment>
    );
  }
}
