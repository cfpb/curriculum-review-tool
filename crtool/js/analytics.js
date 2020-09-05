import $ from 'jquery';

// Tracks analytics for links on page clicked
$( 'button.link-push-analytics' ).click( function() {
  const linkText = $( this ).text().trim();
  const action = 'link clicked: ' + linkText;
  buttonLinkClicked( action, linkText );
} );

$( 'button.button-push-analytics' ).click( function() {
  const linkText = $( this ).text().trim();
  const action = 'button clicked';
  buttonLinkClicked( action, linkText );
} );

$( 'button.save-work-push-analytics' ).click( function() {
  const action = 'save work modal';
  const label = $( this ).text().trim();
  modalButtonClicked( action, label );
} );

$( 'button.start-over-push-analytics' ).click( function() {
  const action = 'Starting over modal';
  const label = $( this ).text().trim();
  modalButtonClicked( action, label );
} );

$( 'button.start-over-close-push-analytics' ).click( function() {
  const action = 'Starting over modal';
  const label = $( this ).text().trim();
  modalButtonClicked( action, label );
} );

$( 'a.push-download-analytics' ).click( function() {
  const linkText = $( this ).text().trim();
  const linkUrl = $( this ).attr( 'href' );
  sendAnalytics( linkText, linkUrl, 'Downloads' );
} );

/**
 * A button link has been clicked.
 * @param {string} action - The user's action
 * @param {string} label - The label associated with the action
 */
function buttonLinkClicked( action, label ) {
  sendAnalytics( action, label );
}

/**
 * A model button has been clicked.
 * @param {string} action - The user's action
 * @param {string} label - The label associated with the action
 */
function modalButtonClicked( action, label ) {
  sendAnalytics( action, label );
}

/**
 * Send Analytics with default crool category.
 * @param {string} action - The user's action
 * @param {string} label - The label associated with the action
 * @param {string} category - Optional category if it's not crtool related
 */
export default function sendAnalytics( action, label, category ) {
  const data = {
    event:         category || 'curriculum review tool interaction',
    action:        action.trim(),
    label:         label || ''
  };

  track( data.event, data.action, data.label );
}

/**
 * Push to GA.
 * @param {string} event - GA event
 * @param {string} action - The user's action
 * @param {string} label - The label associated with the action
 */
function track( event, action, label ) {
  window.dataLayer.push( {
    event: event,
    action: action,
    label: label
  } );
}
