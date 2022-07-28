import React from 'react';

import C from '../../business.logic/constants';
import SaveWorkModal from '../dialogs/SaveWorkModal';
import StartOverModal from '../dialogs/StartOverModal';
import DistinctiveMenuBar from '../distinctives/DistinctiveMenuBar';
import PrintOrSaveFinalSummary from '../common/PrintOrSaveFinalSummary';

import DimensionScoreBlock from './summary/DimensionScoreBlock';
import DimensionNotReviewedComponent from '../common/DimensionNotReviewedComponent';
import KeyTakeawaysComponent from '../common/KeyTakeawaysComponent';
import FinalCurriculumInformation from '../common/FinalCurriculumInformation';
import EfficacyOveralScoreComponent from './partial.pages/EfficacyOveralScoreComponent';

import ContentCriterionBlockSummary from './summary/ContentCriterionBlockSummary';
import UtilityCriterionBlockSummary from './summary/UtilityCriterionBlockSummary';
import QualityCriterionBlockSummary from './summary/QualityCriterionBlockSummary';
import EfficacyCriterionBlockSummary from './summary/EfficacyCriterionBlockSummary';


export default class FinalSummaryPage extends React.Component {
  render() {
    let contentDimensionKey = 'content-high-crt-';
    if ( this.props.gradeRange === C.GRADE_ELEMENTARY ) {
      contentDimensionKey = 'content-elementary-crt-';
    } else if ( this.props.gradeRange === C.GRADE_MIDDLE ) {
      contentDimensionKey = 'content-middle-crt-';
    }

    return (
      <React.Fragment>
        <div className='l-survey-top'>
          <SaveWorkModal
            buttonText='Can I save my work?'
            hasIcon='true' {...this.props} />
        </div>
        {
          this.props.currentPage === C.START_PAGE &&
                    <React.Fragment>
                      <div className='h5 u-mb30'>You’re reviewing</div>
                      <h1>{this.props.curriculumTitle}</h1>
                    </React.Fragment>
        }
        {
          this.props.currentPage !== C.START_PAGE &&
                    <React.Fragment>
                      <div className='h4'>You’re reviewing: <strong>{this.props.curriculumTitle}</strong></div>
                    </React.Fragment>
        }

        {this.props.finalSummaryShowEntireReview !== 'true' &&
                    <React.Fragment>
                      <DistinctiveMenuBar {...this.props} />
                      <hr className='hr
                                        u-mb45
                                        u-mt30' />
                    </React.Fragment>
        }

        <FinalCurriculumInformation {...this.props} />

        {this.props.contentInProgress !== C.STATUS_COMPLETE &&
                    <DimensionNotReviewedComponent
                      dimensionTitle='Content overall score'
                      dimensionName='Content' {...this.props} />
        }
        {this.props.contentInProgress === C.STATUS_COMPLETE &&
                    <DimensionScoreBlock
                      dimensionPage={C.CONTENT_PAGE}
                      dimensionKey={contentDimensionKey}
                      dimensionName='Content'
                      dimensionLead='How does this curriculum meet the criteria for content:'
                      isFinalSummary='true'
                      strongText='All 6 criteria were met and at least one was exceeded'
                      moderateText='All 6 criteria were met'
                      limitedText='At least one of the criteria was not met'
                      {...this.props} />
        }
        {this.props.utilityInProgress !== C.STATUS_COMPLETE &&
                    <DimensionNotReviewedComponent
                      dimensionTitle='Utility overall score'
                      dimensionName='Utility' {...this.props} />
        }
        {this.props.utilityInProgress === C.STATUS_COMPLETE &&
                    <DimensionScoreBlock
                      dimensionPage={C.UTILITY_PAGE}
                      dimensionKey='utility-crt-'
                      dimensionName='Utility'
                      dimensionLead='How does this curriculum meet the criteria for utility:'
                      isFinalSummary='true'
                      strongText='All 5 criteria were met, and at least one was exceeded'
                      moderateText='All 5 criteria were met'
                      limitedText='At least one of the criteria was not met'
                      {...this.props} />
        }
        {this.props.qualityInProgress !== C.STATUS_COMPLETE &&
                    <DimensionNotReviewedComponent
                      dimensionTitle='Quality overall score'
                      dimensionName='Quality' {...this.props} />
        }
        {this.props.qualityInProgress === C.STATUS_COMPLETE &&
                    <DimensionScoreBlock
                      dimensionPage={C.QUALITY_PAGE}
                      dimensionKey='quality-crt-'
                      dimensionName='Quality'
                      dimensionLead='How does this curriculum meet the criteria for quality:'
                      isFinalSummary='true'
                      strongText='All 4 criteria were met, and at least one was exceeded'
                      moderateText='All 4 criteria were met'
                      limitedText='At least one of the criteria was not met'
                      {...this.props} />
        }
        {this.props.efficacyInProgress !== C.STATUS_COMPLETE &&
                    <DimensionNotReviewedComponent
                      dimensionTitle='Efficacy overall score'
                      dimensionName='Efficacy' {...this.props} />
        }
        {this.props.efficacyInProgress === C.STATUS_COMPLETE &&
                    <EfficacyOveralScoreComponent
                      dimensionPage={C.EFFICACY_PAGE}
                      dimensionName='Efficacy'
                      dimensionKey='efficacy-crt-'
                      dimensionLead='How does this curriculum meet the criteria for efficacy:'
                      isFinalSummary='true'
                      {...this.props} />
        }

        <KeyTakeawaysComponent {...this.props} />

        {this.props.currentPrintButton === C.FINAL_PRINT_EVERYTHING &&
                    <React.Fragment>
                      <ContentCriterionBlockSummary
                        {...this.props}
                        hasBottomBorder='true' />
                      <UtilityCriterionBlockSummary
                        {...this.props}
                        hasBottomBorder='true' />
                      <QualityCriterionBlockSummary
                        {...this.props}
                        hasBottomBorder='true' />
                      <EfficacyCriterionBlockSummary {...this.props} />
                    </React.Fragment>
        }
        {this.props.finalSummaryShowEntireReview !== 'true' &&
                    <React.Fragment>
                      <PrintOrSaveFinalSummary {...this.props}/>
                      <StartOverModal clearLocalStorage={e => { this.props.clearLocalStorage(); }}/>
                    </React.Fragment>
        }
      </React.Fragment>
    );
  }
}
