import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';
import CriterionScoreBlock from '../summary/CriterionScoreBlock';
import DimensionScoreBlock from '../summary/DimensionScoreBlock';
import DimensionInformation from '../../common/DimensionInformation';
import SaveWorkInformation from '../../common/SaveWorkInformation';
import { ContentMiddleCriterion } from '../../../content_data/contentMiddle';

export default class ContentMiddleSummaryPage extends React.Component {
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
                    Content summary
        </h1>
        <p className='lead-paragraph'>
          {C.CONTENT_SUMMARY_LEAD_TEXT}
        </p>
        <p>
          {C.CONTENT_SUMMARY_SECOND_PARAGRAPH}
        </p>
        <SaveWorkInformation {...this.props} />
        <button className='a-btn' data-gtm_ignore='true' onClick={e => { this.props.printButtonClicked( C.CONTENT_PAGE, true ); e.preventDefault(); }}>
          {C.CONTENT_PRINT_SUMMARY}
        </button>
        <DimensionInformation dimensionName={C.CONTENT_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />

        { ContentMiddleCriterion.criterion.map( ( criterionData, i ) => <CriterionScoreBlock
          showExceeds={criterionData.showExceeds}
          showBeneficial={criterionData.showBeneficial}
          hideMeets={criterionData.hideMeets}
          dimensionKey={C.CONTENT_MIDDLE_KEY}
          dimensionPage={C.CONTENT_PAGE}
          criterionNumber={criterionData.criterionNumber}
          criterionName={criterionData.title}
          criterionLead={criterionData.criterionLead}
          criterionExceedsText={criterionData.criterionExceedsText}
          criterionMeetsText={criterionData.criterionMeetsText}
          criterionDoesNotMeetText={criterionData.criterionDoesNotMeetText}
          essentialAnswerTotalText={C.CONTENT_ESSENTIAL_ANSWER_TOTAL_TEXT}
          {...this.props} />
        )}

        <hr className='hr u-mb45 u-mt30' />

        <DimensionScoreBlock
          dimensionPage={C.CONTENT_PAGE}
          dimensionKey={C.CONTENT_MIDDLE_KEY}
          dimensionName={C.CONTENT_PAGE}
          dimensionLead={C.CONTENT_LEAD_TEXT}
          strongText={C.CONTENT_STRONG_TEXT}
          moderateText={C.CONTENT_MODERATE_TEXT}
          limitedText={C.CONTENT_LIMITED_TEXT}
          {...this.props} />
      </React.Fragment>
    );
  }
}
