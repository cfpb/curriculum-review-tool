import React from 'react';
import Modal from 'react-modal';

import Analytics from '../../business.logic/analytics';
import SvgIcon from '../svgs/SvgIcon';

export default class RemoveEfficacyStudyModal extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      modalIsOpen: false
    };

    this.setWrapperRef = this.setWrapperRef.bind( this );
    this.handleRemoveEfficacyStudyClickOutside = this.handleRemoveEfficacyStudyClickOutside.bind( this );
    this.openRemoveEfficacyStudyModalDialog = this.openRemoveEfficacyStudyModalDialog.bind( this );
    this.closeRemoveEfficacyStudyModalDialog = this.closeRemoveEfficacyStudyModalDialog.bind( this );
  }

  /* Click Outside setup */
  componentDidMount() {
    document.addEventListener( 'mousedown', this.handleRemoveEfficacyStudyClickOutside );
  }

  /* Click Outside setup */
  componentWillUnmount() {
    document.removeEventListener( 'mousedown', this.handleRemoveEfficacyStudyClickOutside );
  }

  /* Click Outside setup */
  setWrapperRef( node ) {
    this.wrapperRef = node;
  }

  /* Click Outside setup */
  handleRemoveEfficacyStudyClickOutside( event ) {
    if ( this.wrapperRef && !this.wrapperRef.contains( event.target ) ) {
      this.setState( { modalIsOpen: false } );
    }
  }

  /* Modal specific open dialog */
  openRemoveEfficacyStudyModalDialog() {
    //Show dialog
    this.setState( { modalIsOpen: true } );

    //Send analytics event that the modal was opened
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'link click', 'remove efficacy study' ) );
  }

  /* Modal specific close dialog */
  closeRemoveEfficacyStudyModalDialog( linkText ) {
    //Hide dialog
    this.setState( { modalIsOpen: false } );

    //Send analytics event that the modal was closed
    if ( linkText !== undefined ) {
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'efficacy modal', linkText ) );
    }
  }

  render() {
    return (
      <React.Fragment>
        <button className='a-btn a-btn__link a-btn__no-line'
          data-gtm_ignore='true'
          onClick={() => { this.openRemoveEfficacyStudyModalDialog(); }} >
                Remove
          <SvgIcon
            icon='x-round'
            islarge='true'
            hasSpaceBefore='true' />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          className='o-modal_container'
          contentLabel='CFPB Modal Dialog'
          onRequestClose={this.closeRemoveEfficacyStudyModalDialog}
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
              <form className='o-modal_content' ref={this.setWrapperRef} action='#' >
                <div className='o-modal_body'>
                  <button className='o-modal_close a-btn a-btn__link' onClick={e => { this.closeRemoveEfficacyStudyModalDialog( 'Close' ); e.preventDefault(); }}>
                                    Close
                    <SvgIcon
                      icon='x-round'
                      isLarge='true'
                      hasSpaceBefore='true' />
                  </button>
                  <h2 id='modal-start-over_title' className='h3'>Remove this study?</h2>
                  <div id='modal-start-over_desc'>
                    <p>This will permanently erase all information related to this study.</p>
                  </div>
                </div>
                <div className='o-modal_footer'>
                  <div className='m-btn-group m-btn-group__wide'>
                    <button className='a-btn a-btn__warning' onClick={e => { this.props.removeEfficacyStudy( this.props.studyCount ); }}>Yes, remove it</button>
                    <button className='a-btn a-btn__link' onClick={e => { this.closeRemoveEfficacyStudyModalDialog( 'No, keep it' ); e.preventDefault(); }}>No, keep it</button>
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
