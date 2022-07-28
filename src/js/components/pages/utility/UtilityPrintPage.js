import React from 'react';

import C from '../../../business.logic/constants';
import PrintIntroComponent from '../partial.pages/PrintIntroComponent';
import CriterionScoreBlock from '../summary/CriterionScoreBlock';
import DimensionScoreBlock from '../summary/DimensionScoreBlock';
import DimensionInformation from '../../common/DimensionInformation';
import UtilityCriterionBlockSummary from '../summary/UtilityCriterionBlockSummary';
import { UtilityContent } from '../../../content_data/utilityContent';

export default class UtilityPrintPage extends React.Component {
  componentDidMount() {
    this.props.resetPrintButtonState( C.UTILITY_PAGE );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

        <DimensionInformation
          dimensionName={C.UTILITY_PAGE}
          dimensionSummary={C.UTILITY_SUMMARY_TEXT}
          {...this.props}
          reviewedOnDate={this.props.distinctiveCompletedDate[C.UTILITY_PAGE]} />

        {/* Criterion 1 */}
        <CriterionScoreBlock
          showExceeds={UtilityContent.criterion[0].showExceeds}
          showBeneficial={UtilityContent.criterion[0].showBeneficial}
          hideMeets={UtilityContent.criterion[0].hideMeets}
          dimensionKey={C.UTILITY_KEY}
          dimensionPage={C.UTILITY_PAGE}
          criterionNumber={UtilityContent.criterion[0].criterionNumber}
          criterionName={UtilityContent.criterion[0].title}
          criterionLead={UtilityContent.criterion[0].criterionLead}
          criterionExceedsText={UtilityContent.criterion[0].criterionExceedsText}
          criterionMeetsText={UtilityContent.criterion[0].criterionMeetsText}
          criterionDoesNotMeetText={UtilityContent.criterion[0].criterionDoesNotMeetText}
          essentialAnswerTotalText={C.UTILITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.UTILITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />

        {/* Criterion 2 */}
        <CriterionScoreBlock
          showExceeds={UtilityContent.criterion[1].showExceeds}
          showBeneficial={UtilityContent.criterion[1].showBeneficial}
          hideMeets={UtilityContent.criterion[1].hideMeets}
          dimensionKey={C.UTILITY_KEY}
          dimensionPage={C.UTILITY_PAGE}
          criterionNumber={UtilityContent.criterion[1].criterionNumber}
          criterionName={UtilityContent.criterion[1].title}
          criterionLead={UtilityContent.criterion[1].criterionLead}
          criterionExceedsText={UtilityContent.criterion[1].criterionExceedsText}
          criterionMeetsText={UtilityContent.criterion[1].criterionMeetsText}
          criterionDoesNotMeetText={UtilityContent.criterion[1].criterionDoesNotMeetText}
          essentialAnswerTotalText={C.UTILITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.UTILITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />

        {/* Criterion 3 */}
        <CriterionScoreBlock
          showExceeds={UtilityContent.criterion[2].showExceeds}
          showBeneficial={UtilityContent.criterion[2].showBeneficial}
          hideMeets={UtilityContent.criterion[2].hideMeets}
          dimensionKey={C.UTILITY_KEY}
          dimensionPage={C.UTILITY_PAGE}
          criterionNumber={UtilityContent.criterion[2].criterionNumber}
          criterionName={UtilityContent.criterion[2].title}
          criterionLead={UtilityContent.criterion[2].criterionLead}
          criterionExceedsText={UtilityContent.criterion[2].criterionExceedsText}
          criterionMeetsText={UtilityContent.criterion[2].criterionMeetsText}
          criterionDoesNotMeetText={UtilityContent.criterion[2].criterionDoesNotMeetText}
          essentialAnswerTotalText={C.UTILITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.UTILITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />

        {/* Criterion 4 */}
        <CriterionScoreBlock
          showExceeds={UtilityContent.criterion[3].showExceeds}
          showBeneficial={UtilityContent.criterion[3].showBeneficial}
          hideMeets={UtilityContent.criterion[3].hideMeets}
          dimensionKey={C.UTILITY_KEY}
          dimensionPage={C.UTILITY_PAGE}
          criterionNumber={UtilityContent.criterion[3].criterionNumber}
          criterionName={UtilityContent.criterion[3].title}
          criterionLead={UtilityContent.criterion[3].criterionLead}
          criterionExceedsText={UtilityContent.criterion[3].criterionExceedsText}
          criterionMeetsText={UtilityContent.criterion[3].criterionMeetsText}
          criterionDoesNotMeetText={UtilityContent.criterion[3].criterionDoesNotMeetText}
          essentialAnswerTotalText={C.UTILITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.UTILITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />

        {/* Criterion 5 */}
        <CriterionScoreBlock
          showExceeds={UtilityContent.criterion[4].showExceeds}
          showBeneficial={UtilityContent.criterion[4].showBeneficial}
          hideMeets={UtilityContent.criterion[4].hideMeets}
          dimensionKey={C.UTILITY_KEY}
          dimensionPage={C.UTILITY_PAGE}
          criterionNumber={UtilityContent.criterion[4].criterionNumber}
          criterionName={UtilityContent.criterion[4].title}
          criterionLead={UtilityContent.criterion[4].criterionLead}
          criterionExceedsText={UtilityContent.criterion[4].criterionExceedsText}
          criterionMeetsText={UtilityContent.criterion[4].criterionMeetsText}
          criterionDoesNotMeetText={UtilityContent.criterion[4].criterionDoesNotMeetText}
          essentialAnswerTotalText={C.UTILITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.UTILITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />

        <hr className='hr
                                u-mb30
                                u-mt30' />

        {/* Utility Overall Score */}
        <DimensionScoreBlock
          dimensionPage={C.UTILITY_PAGE}
          dimensionKey={C.UTILITY_KEY}
          dimensionName={C.UTILITY_PAGE}
          dimensionLead={C.UTILITY_LEAD_TEXT}
          strongText={C.UTILITY_STRONG_TEXT}
          moderateText={C.UTILITY_MODERATE_TEXT}
          limitedText={C.UTILITY_LIMITED_TEXT}
          {...this.props} />

        <UtilityCriterionBlockSummary {...this.props} />
      </React.Fragment>
    );
  }
}
