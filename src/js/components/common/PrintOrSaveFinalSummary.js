import React from 'react';

export default class PrintOrSaveFinalSummary extends React.Component {
  render() {
    return (
      <div className='m-btn-group
                            m-btn-group__wide
                            u-mb15'>
        <button className='a-btn a-btn__super' data-gtm_ignore='true' onClick={e => { this.props.setPrintFinalSummaryShowEntireReview( 'true', 'false' ); e.preventDefault(); }}>

                    Print or save this page
        </button>
        <button className='a-btn a-btn__super' data-gtm_ignore='true' onClick={e => { this.props.setPrintFinalSummaryShowEntireReview( 'true', 'true' ); e.preventDefault(); }}>
                    Print or save entire review
        </button>
      </div>
    );
  }
}
