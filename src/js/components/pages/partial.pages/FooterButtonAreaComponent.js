import React from 'react';

import C from '../../../business.logic/constants';
import SaveButton from '../../buttons/SaveButton';
import SummaryButton from '../../buttons/SummaryButton';
import StartOverModal from '../../dialogs/StartOverModal';

export default class FooterButtonAreaComponent extends React.Component {

  render() {
    if ( this.props.currentPage === undefined ||
            this.props.currentPage === null ||
            this.props.currentPage === C.START_PAGE ) {
      return null;
    } else {
      return (
        <div className='m-btn-group
                                m-btn-group__wide'>
          <SaveButton {...this.props} />
          <SummaryButton {...this.props} />
          <StartOverModal clearLocalStorage={this.props.clearLocalStorage}/>
        </div>
      );
    }
  }
}
