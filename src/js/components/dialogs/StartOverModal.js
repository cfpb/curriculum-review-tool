import React from 'react';
import Modal from 'react-modal';

import C from '../../business.logic/constants';
import Analytics from '../../business.logic/analytics';
import SvgIcon from '../svgs/SvgIcon';

export default class StartOverModal extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      modalIsOpen: false
    };

    this.setWrapperRef = this.setWrapperRef.bind( this );
    this.handleStartOverClickOutside = this.handleStartOverClickOutside.bind( this );
    this.openStartOverModalDialog = this.openStartOverModalDialog.bind( this );
    this.closeStartOverModalDialog = this.closeStartOverModalDialog.bind( this );
  }

  /* Click Outside setup */
  componentDidMount() {
    document.addEventListener( 'mousedown', this.handleStartOverClickOutside );
  }

  /* Click Outside setup */
  componentWillUnmount() {
    document.removeEventListener( 'mousedown', this.handleStartOverClickOutside );
  }

  /* Click Outside setup */
  setWrapperRef( node ) {
    this.wrapperRef = node;
  }

  /* Click Outside setup */
  handleStartOverClickOutside( event ) {
    if ( this.wrapperRef && !this.wrapperRef.contains( event.target ) ) {
      this.setState( { modalIsOpen: false } );
    }
  }

  /* Modal specific open dialog */
  openStartOverModalDialog() {
    //Show dialog
    this.setState( { modalIsOpen: true } );

    //Analytics opened start over with a new review
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'link clicked: Start over with a new review', 'Starting over' ) );
  }

  /* Modal specific close dialog */
  closeStartOverModalDialog( linkText ) {
    //Hide dialog
    this.setState( { modalIsOpen: false } );

    //Analytics close start over with a new review
    if ( linkText !== undefined ) {
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'Starting over modal', linkText ) );
    }
  }

  render() {
    return (
      <React.Fragment>
        <button className='a-btn a-btn__link' data-gtm_ignore='true' onClick={e => { this.openStartOverModalDialog(); }}>
                Start over with a new review
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          className='o-modal_container'
          contentLabel='CFPB Modal Dialog'
          onRequestClose={this.closeStartOverModalDialog}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              backgroundColor: 'transparent',
              zIndex: '10'
            }
          }}>
          <div className='o-modal o-modal__visible'
            id='modal-start-over'
            aria-hidden='false'
            role='alertdialog'
            aria-labelledby='modal-start-over_title'
            aria-describedby='modal-start-over_desc'>
            <div className='o-modal_backdrop'></div>
            <div className='o-modal_container'>
              <form className='o-modal_content' ref={this.setWrapperRef} action={C.START_PAGE_RELATIVE_URL} >
                <div className='o-modal_body'>
                  <button className='o-modal_close a-btn a-btn__link' onClick={e => { this.closeStartOverModalDialog( 'Close' ); e.preventDefault(); }}>
                                    Close
                    <SvgIcon
                      icon='x-round'
                      isLarge='true'
                      hasSpaceBefore='true' />
                  </button>
                  <h2 id='modal-start-over_title' className='h3'>Starting over</h2>
                  <div id='modal-start-over_desc'>
                    <p>Starting a new review will erase your answers for all dimensions. Are you sure you want to start a new review?</p>
                  </div>
                </div>
                <div className='o-modal_footer'>
                  <div className='m-btn-group m-btn-group__wide'>
                    <button className='a-btn' onClick={e => { this.props.clearLocalStorage(); }} formAction={C.START_PAGE_RELATIVE_URL} >Yes</button>
                    <button className='a-btn a-btn__link' onClick={e => { this.closeStartOverModalDialog( 'No, return to current review' ); e.preventDefault(); }}>No, return to current review</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
