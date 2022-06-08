import React from 'react';

import C from '../business.logic/constants';

export default class PageInstructionsComponent extends React.Component {
  render() {
    if ( this.props.currentPage === C.START_PAGE ) {
      return (
        <React.Fragment>
          <p className='lead-paragraph'>Select any dimension to start your review. We recommend starting with content and moving to utility, quality, and efficacy, but you can complete the four dimensions in any order.</p>
          <p>You can complete all dimensions in one sitting or over the course of many sessions. You’ll be able to print or save  a summary for each dimension as you finish it, and then print or save a final summary for the overall review.</p>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}
