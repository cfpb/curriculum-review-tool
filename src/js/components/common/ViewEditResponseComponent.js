import React from 'react';

import C from '../../business.logic/constants';
import SvgIcon from '../svgs/SvgIcon';

export default class ViewEditResponseComponent extends React.Component {
  setDimensionSummaryView() {
    let criterionNumber = this.props.criterionNumber;
    this.props.setDimensionSummaryView( this.props.criterionPage, false, criterionNumber );

    //HACK: need to scroll to top of screen after we navigate.
    setTimeout( function() {
      let criterionId = 'criterion_' + criterionNumber;
      let criterion = document.getElementById( criterionId );
      criterion.scrollIntoView();
    }, 100, criterionNumber );
  }

  render() {
    if ( this.props.currentPrintButton === C.START_PAGE ||
            this.props.currentPrintButton === '' ) {
      return (
        <React.Fragment>
          <div className='l-survey-top'>
            <button className='a-btn a-btn__link a-btn__no-line' onClick={e => { this.setDimensionSummaryView( this.props.criterionPage ); }}>
              <SvgIcon
                icon='pencil'
                islarge='true'
                hasSpaceAfter='true' />
                            View or edit responses
            </button>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}
