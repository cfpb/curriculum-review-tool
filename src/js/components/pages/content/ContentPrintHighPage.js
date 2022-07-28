import React from 'react';

import C from '../../../business.logic/constants';
import PrintIntroComponent from '../partial.pages/PrintIntroComponent';
import CriterionScoreBlock from '../summary/CriterionScoreBlock';
import DimensionScoreBlock from '../summary/DimensionScoreBlock';
import DimensionInformation from '../../common/DimensionInformation';
import ContentCriterionBlockSummary from '../summary/ContentCriterionBlockSummary';
import { ContentHighCriterion } from '../../../content_data/contentHigh';

export default class ContentPrintHighPage extends React.Component {
  componentDidMount() {
    this.props.resetPrintButtonState( C.CONTENT_PAGE );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

        <DimensionInformation
          dimensionName={C.CONTENT_PAGE}
          dimensionSummary={C.CONTENT_SUMMARY_TEXT}
          {...this.props}
          reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />

        { ContentHighCriterion.criterion.map( ( criterionData, i ) => <CriterionScoreBlock
          showExceeds={criterionData.showExceeds}
          showBeneficial={criterionData.showBeneficial}
          hideMeets={criterionData.hideMeets}
          dimensionKey={C.CONTENT_HIGH_KEY}
          dimensionPage={C.CONTENT_PAGE}
          criterionNumber={criterionData.criterionNumber}
          criterionName={criterionData.title}
          criterionLead={criterionData.criterionLead}
          criterionExceedsText={criterionData.criterionExceedsText}
          criterionMeetsText={criterionData.criterionMeetsText}
          criterionDoesNotMeetText={criterionData.criterionDoesNotMeetText}
          {...this.props} />
        )}

        <hr className='hr
                                u-mb30
                                u-mt30' />

        <DimensionScoreBlock
          dimensionPage={C.CONTENT_PAGE}
          dimensionKey={C.CONTENT_HIGH_KEY}
          dimensionName={C.CONTENT_PAGE}
          dimensionLead={C.CONTENT_LEAD_TEXT}
          strongText={C.CONTENT_STRONG_TEXT}
          moderateText={C.CONTENT_MODERATE_TEXT}
          limitedText={C.CONTENT_LIMITED_TEXT}
          {...this.props} />

        <ContentCriterionBlockSummary {...this.props} />
      </React.Fragment>
    );
  }
}
