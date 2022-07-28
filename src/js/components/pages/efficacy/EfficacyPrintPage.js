import React from 'react';

import C from '../../../business.logic/constants';
import PrintIntroComponent from '../partial.pages/PrintIntroComponent';
import DimensionInformation from '../../common/DimensionInformation';
import ViewEditResponseComponent from '../../common/ViewEditResponseComponent';
import EfficacyOveralScoreComponent from '../partial.pages/EfficacyOveralScoreComponent';
import EfficacyScopeEvidenceComponent from '../partial.pages/EfficacyScopeEvidenceComponent';
import EfficacyCriterionBlockSummary from '../summary/EfficacyCriterionBlockSummary';

export default class EfficacyPrintPage extends React.Component {
  componentDidMount() {
    this.props.resetPrintButtonState( C.EFFICACY_PAGE );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

        <DimensionInformation
          dimensionName={C.EFFICACY_PAGE}
          dimensionSummary={C.EFFICACY_SUMMARY_TEXT}
          {...this.props}
          reviewedOnDate={this.props.distinctiveCompletedDate[C.EFFICACY_PAGE]} />

        <ViewEditResponseComponent criterionPage={C.EFFICACY_PAGE} {...this.props} />
        <EfficacyScopeEvidenceComponent {...this.props} />

        <EfficacyOveralScoreComponent
          dimensionPage={C.EFFICACY_PAGE}
          dimensionName={C.EFFICACY_PAGE}
          dimensionKey={C.EFFICACY_KEY}
          dimensionLead={C.EFFICACY_LEAD_TEXT}
          {...this.props} />

        <EfficacyCriterionBlockSummary {...this.props} />
      </React.Fragment>
    );
  }
}
