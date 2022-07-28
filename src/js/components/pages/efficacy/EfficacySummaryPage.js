import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';
import ViewEditResponseComponent from '../../common/ViewEditResponseComponent';
import EfficacyOveralScoreComponent from '../partial.pages/EfficacyOveralScoreComponent';
import EfficacyScopeEvidenceComponent from '../partial.pages/EfficacyScopeEvidenceComponent';
import DimensionInformation from '../../common/DimensionInformation';
import SaveWorkInformation from '../../common/SaveWorkInformation';

export default class EfficacySummaryPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <hr className='hr
                                u-mb45
                                u-mt30' />
        <h1 tabIndex='0' id={this.props.currentPage + '_dimensionTitle'}>
          <SvgIcon
            icon='credit-report-round'
            isLarge='true'
            hasSpaceAfter='true' />
                    Efficacy summary
        </h1>
        <p className='lead-paragraph'>
          {C.EFFICACY_SUMMARY_LEAD_TEXT}
        </p>
        <p>
          {C.EFFICACY_SUMMARY_SECOND_PARAGRAPH}
        </p>
        <SaveWorkInformation {...this.props} />
        <button className='a-btn' data-gtm_ignore='true' onClick={e => { this.props.printButtonClicked( C.EFFICACY_PAGE, true ); e.preventDefault(); }}>
          {C.EFFICACY_PRINT_SUMMARY}
        </button>

        <DimensionInformation dimensionName={C.EFFICACY_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.EFFICACY_PAGE]} />

        <hr className='hr u-mb45 u-mt30' />

        <ViewEditResponseComponent criterionNumber='1' criterionPage={C.EFFICACY_PAGE} {...this.props} />
        <EfficacyScopeEvidenceComponent {...this.props} />

        <hr className='hr u-mb45 u-mt30' />

        <EfficacyOveralScoreComponent
          dimensionPage={C.UTILITY_PAGE}
          dimensionName={C.EFFICACY_PAGE}
          dimensionKey={C.EFFICACY_KEY}
          dimensionLead={C.EFFICACY_LEAD_TEXT}
          {...this.props} />
      </React.Fragment>
    );
  }
}
