import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';
import CriterionScoreBlock from '../summary/CriterionScoreBlock';
import DimensionScoreBlock from '../summary/DimensionScoreBlock';
import DimensionInformation from '../../common/DimensionInformation';
import SaveWorkInformation from '../../common/SaveWorkInformation';
import { QualityContent } from '../../../content_data/qualityContent';

export default class QualitySummaryPage extends React.Component {
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
                    Quality summary
        </h1>
        <p className='lead-paragraph'>
          {C.QUALITY_SUMMARY_LEAD_TEXT}
        </p>
        <p>
          {C.QUALITY_SUMMARY_SECOND_PARAGRAPH}
        </p>
        <SaveWorkInformation {...this.props} />
        <button className='a-btn' data-gtm_ignore='true' onClick={e => { this.props.printButtonClicked( C.QUALITY_PAGE, true ); e.preventDefault(); }}>
          {C.QUALITY_PRINT_SUMMARY}
        </button>
        <DimensionInformation dimensionName={C.QUALITY_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.QUALITY_PAGE]} />

        { QualityContent.criterion.map( ( criterionData, i ) => <CriterionScoreBlock
          showExceeds={criterionData.showExceeds}
          showBeneficial={criterionData.showBeneficial}
          hideMeets={criterionData.hideMeets}
          dimensionKey={C.QUALITY_KEY}
          dimensionPage={C.QUALITY_PAGE}
          criterionNumber={criterionData.criterionNumber}
          criterionName={criterionData.title}
          criterionLead={criterionData.criterionLead}
          criterionExceedsText={criterionData.criterionExceedsText}
          criterionMeetsText={criterionData.criterionMeetsText}
          criterionDoesNotMeetText={criterionData.criterionDoesNotMeetText}
          essentialAnswerTotalText={C.QUALITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
          beneficialAnswerTotalText={C.QUALITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />
        )}

        <hr className='hr u-mb45 u-mt30' />

        <DimensionScoreBlock
          dimensionPage={C.QUALITY_PAGE}
          dimensionKey={C.QUALITY_KEY}
          dimensionName={C.QUALITY_PAGE}
          dimensionLead={C.QUALITY_LEAD_TEXT}
          strongText={C.QUALITY_STRONG_TEXT}
          moderateText={C.QUALITY_MODERATE_TEXT}
          limitedText={C.QUALITY_LIMITED_TEXT}
          {...this.props} />
      </React.Fragment>
    );
  }
}
