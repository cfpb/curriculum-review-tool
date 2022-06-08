import React from 'react';

import C from '../../business.logic/constants';

export default class FinalSummaryButton extends React.Component {

  handleFinalSummaryButtonClick() {
    this.props.handleFinalSummaryButtonClick();

    //HACK: need to scroll to top of screen after we navigate.
    setTimeout( function() {
      let main = document.getElementById( 'main' );
      main.scrollIntoView();
    }, 100 );
  }

  render() {
    let buttonClasses = 'a-btn a-btn__super';
    if ( this.props.currentPage === C.FINAL_SUMMARY_PAGE ) {
      buttonClasses += ' a-btn__active';
    }

    if ( this.props.contentIsDone ||
            this.props.utilityIsDone ||
            this.props.qualityIsDone ||
            this.props.efficacyIsDone ) {
      return (
        <div className='u-center'>
          <button className={buttonClasses} onClick={e => { this.handleFinalSummaryButtonClick(); }}>Final summary</button>
        </div>
      );
    } else {
      return null;
    }
  }
}
