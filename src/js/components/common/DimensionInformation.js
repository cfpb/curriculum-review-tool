import React from 'react';

import C from '../../business.logic/constants';

export default class DimensionInformation extends React.Component {
  renderReviewedOnDate() {
    if ( this.props.reviewedOnDate !== undefined ) {
      return this.props.reviewedOnDate;
    }
    return this.props.distinctiveCompletedDate[this.props.currentPage];
  }

  render() {
    if ( this.props.currentPrintButton !== C.START_PAGE && this.props.currentPrintButton !== '' ) {
      return (
        <React.Fragment>
          <div className='h5'>{ C.APP_TITLE }</div>
          <h1>{this.props.dimensionName} summary for {this.props.curriculumTitle}</h1>
          <p className='lead-paragraph u-mb30'>
            {this.props.dimensionSummary}
          </p>
          {this.props.publicationDate !== '' && <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>}
          <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
          <p><strong>Reviewed on:</strong> {this.renderReviewedOnDate()}</p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <hr className='hr u-mb45 u-mt30' />
          <h2>Curriculum information</h2>
          <p><strong>Curriculum title:</strong> {this.props.curriculumTitle}</p>
          {this.props.publicationDate !== '' && <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>}
          <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
          <p><strong>Reviewed on:</strong> {this.renderReviewedOnDate()}</p>
        </React.Fragment>
      );
    }
  }
}
