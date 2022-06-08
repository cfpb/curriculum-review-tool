import React from 'react';

import CriterionComponent from '../../criterion/CriterionComponent';
import { UtilityContent } from '../../../content_data/utilityContent';
import DimensionIconTitleComponent from '../../common/DimensionIconTitleComponent';
import DimensionNotReviewedComponent from '../../common/DimensionNotReviewedComponent';

export default class UtilityCriterionBlockSummary extends React.Component {

  render() {
    let wrapperClasses = 'u-page-break-before';

    if ( this.props.hasBottomBorder === 'true' ) {
      wrapperClasses += ' block block__flush-top block__padded-bottom block__border-bottom';
    }

    return (
      <React.Fragment>
        {this.props.utilityInProgress !== 'complete' &&
                    <DimensionNotReviewedComponent dimensionTitle='Utility criterion' dimensionName='Utility' {...this.props} />
        }
        {this.props.utilityInProgress === 'complete' &&
                    <div className={wrapperClasses}>
                      <DimensionIconTitleComponent
                        {...this.props}
                        dimensionName='Utility'
                        dimensionTitle={'Utility criterion'}
                        isH1='true' />
                      <p className='lead-paragraph'>
                            The utility dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge.
                      </p>
                      {UtilityContent.criterion.map( ( criterion, i ) => <CriterionComponent key={i} criterionData={UtilityContent.criterion[i]} {...this.props} /> )}
                    </div>
        }
      </React.Fragment>
    );
  }
}
