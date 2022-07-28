import React from 'react';

import DimensionIconTitleComponent from '../../common/DimensionIconTitleComponent';
import DimensionNotReviewedComponent from '../../common/DimensionNotReviewedComponent';
import ContentCriterionSwitchComponent from '../partial.pages/ContentCriterionSwitchComponent';

export default class ContentBlockSummary extends React.Component {

  render() {
    let wrapperClasses = 'u-page-break-before';

    if ( this.props.hasBottomBorder === 'true' ) {
      wrapperClasses += ' block block__flush-top block__padded-bottom block__border-bottom';
    }

    return (
      <React.Fragment>
        {this.props.contentInProgress !== 'complete' &&
                    <DimensionNotReviewedComponent dimensionTitle='Content criterion' dimensionName='Content' {...this.props} />
        }
        {this.props.contentInProgress === 'complete' &&
                    <div className={wrapperClasses}>

                      <DimensionIconTitleComponent
                        {...this.props}
                        dimensionName='Content'
                        dimensionTitle={'Content criterion'}
                        isH1='true' />
                      <p className='lead-paragraph'>
                            This dimension assesses whether the curriculum content helps students develop knowledge, skills, and behaviors that are important for financial capability.
                      </p>
                      <ContentCriterionSwitchComponent {...this.props} />
                    </div>
        }
      </React.Fragment>
    );
  }
}
