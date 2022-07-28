import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';
import CriterionScoreBlock from '../summary/CriterionScoreBlock';
import DimensionScoreBlock from '../summary/DimensionScoreBlock';
import DimensionInformation from '../../common/DimensionInformation';
import SaveWorkInformation from '../../common/SaveWorkInformation';
import { UtilityContent } from '../../../content_data/utilityContent';

export default class UtilitySummaryPage extends React.Component {
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
                    Utility summary
        </h1>
        <p className='lead-paragraph'>
          {C.UTILITY_SUMMARY_LEAD_TEXT}
        </p>
        <p>
          {C.UTILITY_SUMMARY_SECOND_PARAGRAPH}
        </p>
        <SaveWorkInformation {...this.props} />
        <button className='a-btn' data-gtm_ignore='true' onClick={e => { this.props.printButtonClicked( C.UTILITY_PAGE, true ); e.preventDefault(); }}>
          {C.UTILITY_PRINT_SUMMARY}
        </button>
        <DimensionInformation dimensionName={C.UTILITY_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.UTILITY_PAGE]} />

        { UtilityContent.criterion.map( ( criterionData, i ) => <CriterionScoreBlock
          showExceeds={criterionData.showExceeds}
          showBeneficial={criterionData.showBeneficial}
          hideMeets={criterionData.hideMeets}
          dimensionKey={C.UTILITY_KEY}
          dimensionPage={C.UTILITY_PAGE}
          criterionNumber={criterionData.criterionNumber}
          criterionName={criterionData.title}
          criterionLead={criterionData.criterionLead}
          criterionExceedsText={criterionData.criterionExceedsText}
          criterionMeetsText={criterionData.criterionMeetsText}
          criterionDoesNotMeetText={criterionData.criterionDoesNotMeetText}
          essentialAnswerTotalText={C.UTILITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.UTILITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />
        )}

        <hr className='hr u-mb45 u-mt30' />

        <DimensionScoreBlock
          dimensionPage={C.UTILITY_PAGE}
          dimensionKey={C.UTILITY_KEY}
          dimensionName={C.UTILITY_PAGE}
          dimensionLead={C.UTILITY_LEAD_TEXT}
          strongText={C.UTILITY_STRONG_TEXT}
          moderateText={C.UTILITY_MODERATE_TEXT}
          limitedText={C.UTILITY_LIMITED_TEXT}
          {...this.props} />
      </React.Fragment>
    );
  }
}
