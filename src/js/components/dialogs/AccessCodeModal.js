import React from 'react';
import Modal from 'react-modal';

import C from '../../business.logic/constants';
import Analytics from '../../business.logic/analytics';
import SvgIcon from '../svgs/SvgIcon';

export default class AccessCodeModal extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      modalIsOpen: false
    };

    this.setWrapperRef = this.setWrapperRef.bind( this );
    this.handleAccessCodeClickOutside = this.handleAccessCodeClickOutside.bind( this );
    this.openAccessCodeModalDialog = this.openAccessCodeModalDialog.bind( this );
    this.closeAccessCodeModalDialog = this.closeAccessCodeModalDialog.bind( this );
  }

  /* Click Outside setup */
  componentDidMount() {
    document.addEventListener( 'mousedown', this.handleAccessCodeClickOutside );
  }

  /* Click Outside setup */
  componentWillUnmount() {
    document.removeEventListener( 'mousedown', this.handleAccessCodeClickOutside );
  }

  /* Click Outside setup */
  setWrapperRef( node ) {
    this.wrapperRef = node;
  }

  /* Click Outside setup */
  handleAccessCodeClickOutside( event ) {
    if ( this.wrapperRef && !this.wrapperRef.contains( event.target ) ) {
      this.setState( { modalIsOpen: false } );
    }
  }

  /* Modal specific open dialog */
  openAccessCodeModalDialog() {
    // Show dialog
    this.setState( { modalIsOpen: true } );

    // Analytics opened what’s this?
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'link clicked: ' + this.props.buttonText, 'Access code' ) );
  }

  /* Modal specific close dialog */
  closeAccessCodeModalDialog( linkText ) {
    // Hide dialog
    this.setState( { modalIsOpen: false } );

    // Analytics closed access code modal
    if ( linkText !== undefined ) {
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'Access code modal', linkText ) );
    }
  }

  render() {
    let currentIcon = '';
    let buttonClasses = 'a-btn a-btn__link';

    if ( this.props.hasIcon === 'true' ) {
      currentIcon = C.ICON_QUESTION_ROUND;
    }

    if ( this.props.hasUnderline !== 'true' ) {
      buttonClasses += ' a-btn__no-line';
    }

    return (
      <React.Fragment>
        <button className={buttonClasses} data-gtm_ignore='true' onClick={e => { this.openAccessCodeModalDialog(); }}>
          <SvgIcon
            icon={currentIcon}
            isLarge='true'
            hasSpaceAfter='true' />
          {this.props.buttonText}
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          className='o-modal_container'
          contentLabel='CFPB Modal Dialog'
          onRequestClose={this.closeAccessCodeModalDialog}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              backgroundColor: 'transparent',
              zIndex: '10'
            }
          }}>
          <div className='o-modal o-modal__visible'
            id='modal-access-code'
            aria-hidden='false'
            role='alertdialog'
            aria-labelledby='modal-access-code_title'
            aria-describedby='modal-access-code_desc'>
            <div className='o-modal_backdrop'></div>
            <div className='o-modal_container'>
              <form className='o-modal_content' ref={this.setWrapperRef}>
                <div className='o-modal_body'>
                  <button className='o-modal_close a-btn a-btn__link' onClick={e => { this.closeAccessCodeModalDialog( 'Close' ); e.preventDefault(); }}>
                                        Close
                    <SvgIcon
                      icon='x-round'
                      isLarge='true'
                      hasSpaceBefore='true' />
                  </button>
                  <h2 id='modal-access-code_title' className='h3'>Access code</h2>
                  <div id='modal-access-code_desc'>
                    <p>
                                            The access code is unique to this review. To return to a review you have already started, you will need this code.
                                            Please either bookmark this page, or copy and save the code in your personal files.
                    </p>
                  </div>
                </div>
                <div className='o-modal_footer'>
                  <button className='a-btn' onClick={e => { this.closeAccessCodeModalDialog( 'Close' ); e.preventDefault(); }}>Close</button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
