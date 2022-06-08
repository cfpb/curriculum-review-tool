import React from 'react';
import Modal from 'react-modal';

import C from '../../business.logic/constants';
import Analytics from '../../business.logic/analytics';
import SvgIcon from '../svgs/SvgIcon';

export default class SaveWorkModal extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      modalIsOpen: false
    };

    this.setWrapperRef = this.setWrapperRef.bind( this );
    this.handleSaveWorkClickOutside = this.handleSaveWorkClickOutside.bind( this );
    this.openSaveWorkModalDialog = this.openSaveWorkModalDialog.bind( this );
    this.closeSaveWorkModalDialog = this.closeSaveWorkModalDialog.bind( this );
  }

  /* Click Outside setup */
  componentDidMount() {
    document.addEventListener( 'mousedown', this.handleSaveWorkClickOutside );
  }

  /* Click Outside setup */
  componentWillUnmount() {
    document.removeEventListener( 'mousedown', this.handleSaveWorkClickOutside );
  }

  /* Click Outside setup */
  setWrapperRef( node ) {
    this.wrapperRef = node;
  }

  /* Click Outside setup */
  handleSaveWorkClickOutside( event ) {
    if ( this.wrapperRef && !this.wrapperRef.contains( event.target ) ) {
      this.setState( { modalIsOpen: false } );
    }
  }

  /* Modal specific open dialog */
  openSaveWorkModalDialog() {
    //Show dialog
    this.setState( { modalIsOpen: true } );

    //Analytics opened how to save your work
    Analytics.sendEvent( Analytics.getDataLayerOptions( 'link clicked: ' + this.props.buttonText, 'Saving your work' ) );
  }

  /* Modal specific close dialog */
  closeSaveWorkModalDialog( linkText ) {
    //Hide dialog
    this.setState( { modalIsOpen: false } );

    //Analytics closed save work modal
    if ( linkText !== undefined ) {
      Analytics.sendEvent( Analytics.getDataLayerOptions( 'save work modal', linkText ) );
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
        <button className={buttonClasses} data-gtm_ignore='true' onClick={e => { this.openSaveWorkModalDialog(); }}>
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
          onRequestClose={this.closeSaveWorkModalDialog}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              backgroundColor: 'transparent',
              zIndex: '10'
            }
          }}>
          <div className='o-modal o-modal__visible'
            id='modal-save-work'
            aria-hidden='false'
            role='alertdialog'
            aria-labelledby='modal-save-work_title'
            aria-describedby='modal-save-work_desc'>
            <div className='o-modal_backdrop'></div>
            <div className='o-modal_container'>
              <form className='o-modal_content' ref={this.setWrapperRef}>
                <div className='o-modal_body'>
                  <button className='o-modal_close a-btn a-btn__link' onClick={e => { this.closeSaveWorkModalDialog( 'Close' ); e.preventDefault(); }}>
                                        Close
                    <SvgIcon
                      icon='x-round'
                      isLarge='true'
                      hasSpaceBefore='true' />
                  </button>
                  <h2 id='modal-save-work_title' className='h3'>Saving your work</h2>
                  <div id='modal-save-work_desc'>
                    <p><strong>To return to a review you have already started, you need to save the unique access code for your review. The access code can be found at the top left of your screen or in the review's URL.</strong></p>
                    <p>Your work will be saved automatically at regular intervals. However, you can also save your work at any time by clicking the “Save my work” button at the bottom of each dimension page.</p>
                    <p>To save a permanent copy of your work, please print the summary or save it as a PDF for every dimension as you complete it. You can also print or save a summary of the entire review. Learn how to <a href='https://www.consumerfinance.gov/consumer-tools/save-as-pdf-instructions/' target='_blank' rel='noopener noreferrer' onClick={e => { this.props.sendAnalyticsForLinkClick( 'save the summary as a PDF', 'https://www.consumerfinance.gov/consumer-tools/save-as-pdf-instructions/' ); }}>save the summary as a PDF</a>.</p>
                    <p>You can have multiple reviews in progress at a time. Each will have a unique access code.</p>
                    <p>We don’t recommend sharing an access code. to collaborate on a review. More than one person working on a review simultaneously may result in information being overwritten or lost.</p>
                  </div>
                </div>
                <div className='o-modal_footer'>
                  <button className='a-btn' onClick={e => { this.closeSaveWorkModalDialog( 'Close' ); e.preventDefault(); }}>Close</button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
