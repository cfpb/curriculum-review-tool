import React from 'react';

import C from '../../business.logic/constants';
import DistinctiveButton from './DistinctiveButton';
import FinalSummaryButton from '../buttons/FinalSummaryButton';

export default class DistinctiveMenuBar extends React.Component {
  distinctiveClicked() {
    this.props.distinctiveClicked( this.props.distinctive );
  }

  handleFinalSummaryButtonClick() {
    this.props.handleFinalSummaryButtonClick();
  }

  renderDimensionStatus( inProgress, isDone ) {
    if ( isDone ) {
      return C.STATUS_COMPLETE;
    } else if ( inProgress === 'complete' && isDone === null ) {
      return C.STATUS_IN_PROGRESS;
    } else {
      return inProgress;
    }
  }

  render() {
    const distinctiveProps = [
      {
        title: 'Content',
        criterionText: '6 criteria',
        estimateText: 'est. time 60 min.',
        estimateTextScreenReader: 'estimated time 60 minutes',
        description: 'Covers core knowledge and skills in national standards',
        icon: C.ICON_DOCUMENT,
        distinctive: C.CONTENT_PAGE,
        currentPage: this.props.currentPage,
        inProgress: this.renderDimensionStatus( this.props.contentInProgress, this.props.contentIsDone ),
        distinctiveClicked: this.props.distinctiveClicked.bind( this )
      },
      {
        title: 'Utility',
        criterionText: '5 criteria',
        estimateText: 'est. time 60 min.',
        estimateTextScreenReader: 'estimated time 60 minutes',
        description: 'Supports effective teaching',
        icon: C.ICON_SETTINGS,
        distinctive: C.UTILITY_PAGE,
        currentPage: this.props.currentPage,
        inProgress: this.renderDimensionStatus( this.props.utilityInProgress, this.props.utilityIsDone ),
        distinctiveClicked: this.props.distinctiveClicked.bind( this )
      },
      {
        title: 'Quality',
        criterionText: '4 criteria',
        estimateText: 'est. time 30 min.',
        estimateTextScreenReader: 'estimated time 30 minutes',
        description: 'Presents clear, accurate, and objective information',
        icon: C.ICON_STAR,
        distinctive: C.QUALITY_PAGE,
        currentPage: this.props.currentPage,
        inProgress: this.renderDimensionStatus( this.props.qualityInProgress, this.props.qualityIsDone ),
        distinctiveClicked: this.props.distinctiveClicked.bind( this )
      },
      {
        title: 'Efficacy',
        criterionText: '1-3 criteria',
        estimateText: 'est. time 30 min.',
        estimateTextScreenReader: 'estimated time 30 minutes',
        description: 'Has validated impact on knowledge, skills, or behaviors',
        icon: C.ICON_CREDIT_REPORT,
        distinctive:  C.EFFICACY_PAGE,
        currentPage: this.props.currentPage,
        inProgress: this.renderDimensionStatus( this.props.efficacyInProgress, this.props.efficacyIsDone ),
        distinctiveClicked: this.props.distinctiveClicked.bind( this )
      }
    ];

    return (
      <React.Fragment>
        <ul className='o-dimension-selection-bar'>
          {distinctiveProps.map( ( distinctiveProps, i ) => <DistinctiveButton key={i} {...distinctiveProps}/> )}
        </ul>
        <FinalSummaryButton
          handleFinalSummaryButtonClick={this.handleFinalSummaryButtonClick.bind( this )}
          {...this.props} />
      </React.Fragment>
    );
  }
}
