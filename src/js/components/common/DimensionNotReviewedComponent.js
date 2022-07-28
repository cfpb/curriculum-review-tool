import React from 'react';

import DimensionIconTitleComponent from './DimensionIconTitleComponent';

export default class DimensionNotReviewedComponent extends React.Component {
  render() {
    return (
      <div className='block
                            block__flush-top
                            block__padded-bottom
                            block__border-bottom'>
        <DimensionIconTitleComponent {...this.props} />
        <p><em>Dimension not reviewed</em></p>
      </div>
    );
  }
}
