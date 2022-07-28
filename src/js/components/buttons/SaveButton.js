import React from 'react';

import C from '../../business.logic/constants';
import crtoolLocalStorage from '../../../crtoolLocalStorage';
import SvgIcon from '../svgs/SvgIcon';

const SaveStateEnum = {
  INIT: 1,
  WAITING: 2,
  SAVED: 3
};

export default class SaveButton extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      saveState: SaveStateEnum.INIT
    };
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind( this );
  }

  handleSaveButtonClick( e ) {
    e.preventDefault();
    if ( this.state.saveState !== SaveStateEnum.INIT ) {
      return;
    }

    this.setState( { saveState: SaveStateEnum.WAITING } );

    // Display spinner at least 500ms
    const promises = [
      crtoolLocalStorage.saveIfDirty( true ),
      new Promise( resolve => setTimeout( resolve, 500 ) )
    ];
    // Wait for both promises to resolve
    Promise.all( promises ).then( () => {
      this.setState( { saveState: SaveStateEnum.SAVED } );
      // Show saved for a bit
      const reset = () => this.setState( { saveState: SaveStateEnum.INIT } );
      setTimeout( reset, 4e3 );
    } );
  }

  render() {
    const {
      currentPage,
      contentIsSummaryView,
      qualityIsSummaryView,
      utilityIsSummaryView,
      efficacyIsSummaryView
    } = this.props;
    const { saveState } = this.state;

    if ( currentPage === undefined ||
          currentPage === null ||
          currentPage === C.FINAL_SUMMARY_PAGE ||
          currentPage === C.START_PAGE ||
          ( currentPage === C.CONTENT_PAGE && contentIsSummaryView === true ) ||
          ( currentPage === C.QUALITY_PAGE && qualityIsSummaryView === true ) ||
          ( currentPage === C.UTILITY_PAGE && utilityIsSummaryView === true ) ||
          ( currentPage === C.EFFICACY_PAGE && efficacyIsSummaryView === true ) ) {
      return null;
    }

    if ( saveState === SaveStateEnum.SAVED ) {
      return (
        <button className='a-btn' disabled={true}>
                    Saved <SvgIcon icon='check-round' />
        </button>
      );
    }

    return (
      <button class='a-btn' onClick={this.handleSaveButtonClick} >
                Save my work
        {saveState === SaveStateEnum.WAITING &&
                    <SvgIcon
                      icon='updating'
                      hasSpaceBefore='true' />
        }
      </button>
    );
  }
}
