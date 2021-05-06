import 'select2';
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import sendAnalytics from './analytics.js';
import tabsInit from './tabs.js';

/**
 * The below code manages the enabling/disabling of the submit button
 * Also manages the saving and setting of the Title, Date, & Grade Range.
 */

const newReviewModalWindow = document.getElementById( 'modal-start-over' );
const saveWorkModalWindow = document.getElementById( 'modal-save-work' );
let openingNewReviewModal = false;
let openingSaveWorkModal = false;

/**
 * Load a review from localStorage
 *
 * @param {string} reviewId  - id of the review to load
 * @returns {boolean|object} review - JSON review object
 */
function getReviewFromLocalStorage( reviewId ) {
  let review = false;
  if ( localStorage.hasOwnProperty( 'crtool.' + reviewId ) ) {
    const lsReview = localStorage.getItem( 'crtool.' + reviewId );
    if ( JSON.stringify( lsReview ) !== '{}' ) {
      review = JSON.parse( lsReview );
    }
  }
  return review;
}

/**
 * Get current review from localStorage.
 *
 * @returns {boolean|object} review
 */
function getCurrentReview() {
  let review = false;
  const reviewId = localStorage.getItem( 'curriculumReviewId' ) || '';
  if ( reviewId ) {
    review = getReviewFromLocalStorage( reviewId );
  }
  return review;
}

/***
 *  Method to manage enabling or dissabling begin button based on form values.
 */
function setBeginReviewButtonEnabling() {
  const selectedGradeValue = document.getElementById( 'tdp-crt_grade' ).value;

  // check required fields have values
  const isValidGradeSelected = selectedGradeValue === 'Elementary school' ||
                             selectedGradeValue === 'Middle school' ||
                             selectedGradeValue === 'High school';

  const isEnabled = isValidGradeSelected && document.getElementById( 'tdp-crt_title' ).value;

  document.getElementById( 'tdp-crt-begin-review-btn' ).disabled = !isEnabled;

  // only enable continue button if token is set
  const curriculumIdValue = document.getElementById( 'token--continue' ).value;

  document.getElementById( 'continue-review' ).disabled = !curriculumIdValue;
}

/**
 * Some versions of IE do not support standard functionality when it
 * comes to removing classnames.  So we need to split remove then join.
 *
 * @param {element} element - DOM Element
 * @param {string} classNameToRemove - The class to remove
 */
function removeClassFromElement( element, classNameToRemove ) {
  const classes = element.className.split( ' ' );
  const idx = classes.indexOf( classNameToRemove );
  if ( idx !== -1 ) classes.splice( idx, 1 );
  element.className = classes.join( ' ' );
}

/**
 * Close New Review Warning Modal Dialog.
 */
function closeNewReviewModalWindow() {
  // Hide from screen readers
  document.getElementById( 'modal-start-over' ).setAttribute( 'aria-hidden', 'false' );
  removeClassFromElement( newReviewModalWindow, 'o-modal__visible' );
  document.removeEventListener( 'click', newReviewOutsideClickListener );
}

/**
 * Method to close New Review daialog if click outside.
 *
 * @param {event} event - Click event
 */
function newReviewOutsideClickListener( event ) {
  const startOverModal = document.querySelector( '#modal-start-over .o-modal_content' );
  if ( !openingNewReviewModal && !startOverModal.contains( event.target ) ) {
    closeNewReviewModalWindow();
  }

  // Since it wants to close on open we need a use this flag on first trigger
  if ( openingNewReviewModal ) {
    openingNewReviewModal = false;
  }
}

/**
 * Open New Review Warning Modal Dialog.
 */
function openNewReviewModalWindow() {
  // Allow screen readers to see dialog
  document.getElementById( 'modal-start-over' ).setAttribute( 'aria-hidden', 'false' );

  openingNewReviewModal = true;
  newReviewModalWindow.className += ' o-modal__visible';
  newReviewModalWindow.focus();
  document.addEventListener( 'click', newReviewOutsideClickListener );

  // Analytics Send start over with new review modal opened
  sendAnalytics( 'link clicked: Start over with a new review', 'Starting over' );
}

/**
 * Open Save Work Warning Modal Dialog
 */
function openSaveWorkModalWindow() {
  // Allow screen readers to see dialog
  document.getElementById( 'modal-save-work' ).setAttribute( 'aria-hidden', 'false' );

  openingSaveWorkModal = true;
  saveWorkModalWindow.className += ' o-modal__visible';
  saveWorkModalWindow.focus();
  document.addEventListener( 'click', saveWorkOutsideClickListener );
}

/**
 * Close Save Work Warning Modal Dialog.
 *
 * @param {event} event - Click event
 */
function closeSaveWorkModalWindow() {
  // Hide from screen readers
  document.getElementById( 'modal-save-work' ).setAttribute( 'aria-hidden', 'true' );
  removeClassFromElement( saveWorkModalWindow, 'o-modal__visible' );
  document.removeEventListener( 'click', saveWorkOutsideClickListener );
}

/**
 * Method to close Save Work daialog if click outside.
 *
 * @param {event} event - Click event
 */
function saveWorkOutsideClickListener( event ) {
  const startOverModal = document.querySelector( '#modal-save-work .o-modal_content' );
  if ( !openingSaveWorkModal && !startOverModal.contains( event.target ) ) {
    closeSaveWorkModalWindow();
  }

  // Since it wants to close on open we need a use this flag on first trigger
  if ( openingSaveWorkModal ) {
    openingSaveWorkModal = false;
  }
}

/**
 * Get available reviews from localStorage.
 *
 * @returns {Array} - List of available reviews
 */
function getAvailableTokens() {
  const tokens = {};
  let key;
  let token;
  for ( let i = 0; i < localStorage.length; i++ ) {
    key = localStorage.key( i );
    if ( key.search( /^crtool\./i ) !== -1 ) {
      token = key.replace( 'crtool.', '' );
      const review = getReviewFromLocalStorage( token );
      const reviewTitle = review.curriculumTitle ? token + ' (' + review.curriculumTitle + ')' : token;
      tokens[token] = reviewTitle;
    }
  }
  return tokens;
}

/**
 *
 */
function setUpTokenDropdown() {
  const tokens = getAvailableTokens();
  const review = getCurrentReview();

  for ( const token in tokens ) {
    if ( tokens.hasOwnProperty( token ) ) {
      const option = document.createElement( 'option' );
      option.text = tokens[token];
      option.value = token;
      if ( review && review.id === token ) {
        option.selected = true;
      }
      $( '#token--continue' ).append( option );
    }
  }
  $( '#token--continue' ).select2( {
    tags: true,
    tokenSeparators: [ ',', ' ' ],
    multiple: false
  } );
}

/**
 * Set the values based on localStorage.
 */
function setInitialFormValues() {
  const review = getCurrentReview();
  document.getElementById( 'tdp-crt_title' ).value = '';
  document.getElementById( 'tdp-crt_pubdate' ).value = '';
  document.getElementById( 'tdp-crt_grade' ).value = '';
  if ( review ) {
    document.getElementById( 'token--continue' ).value = review.id || '';
  }

  setBeginReviewButtonEnabling();

  // Escape closes both modal dialogs
  document.onkeydown = function( evt ) {
    evt = evt || window.event;
    if ( evt.keyCode === 27 ) {
      closeSaveWorkModalWindow();
      closeNewReviewModalWindow();
    }
  };
}

/**
 * Add this function to any required field so we can monitor changed values.
 */
function onValuesChanged() {
  setBeginReviewButtonEnabling();
}

/**
 * When user starts a new review we need to send analytics for
 * Curriculum Title, Publication Date, & Grade Range.
 *
 * @param {string} curriculumTitle - The title of curriculum review
 * @param {string} publicationDate - The date of curriculum review
 * @param {string} gradeRange - The grade level of curriculum review
 */
function recordAnalytics( curriculumTitle, publicationDate, gradeRange ) {
  const category = 'curriculum review tool interaction';
  // Analytics curriculum title
  sendAnalytics( 'curriculum title', curriculumTitle.trim(), category );

  // Analytics date of publication
  publicationDate = publicationDate ? publicationDate.trim() : 'unspecified';
  sendAnalytics( 'date of publication', publicationDate, category );

  // Analytics grade range
  sendAnalytics( 'grade range', gradeRange, category );
}

/**
 * Method that actually saves values (Title, Date, & Grad Range).
 *
 * @param {event} event - Click event
 */
function beginReviewButtonClick( event ) {
  event.preventDefault();
  const curriculumTitle = document.getElementById( 'tdp-crt_title' ).value;
  const publicationDate = document.getElementById( 'tdp-crt_pubdate' ).value;
  const gradeRange = document.getElementById( 'tdp-crt_grade' ).value;

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if ( this.readyState === 4 && this.status === 200 ) {
      const review = JSON.parse( this.responseText );
      localStorage.setItem( 'curriculumReviewId', review.id );
      localStorage.setItem( 'crtool.' + review.id, JSON.stringify( review ) );
      location.href = '../tool/#id=' + review.id;
    }
  };
  const requestUrl = '../create-review/';
  xhttp.open( 'POST', requestUrl );
  xhttp.send(
    JSON.stringify( {
      'tdp-crt_title': curriculumTitle,
      'tdp-crt_pubdate': publicationDate,
      'tdp-crt_grade': gradeRange
    } )
  );

  recordAnalytics( curriculumTitle, publicationDate, gradeRange );
}

/**
 * User has chosen to clear all values and start over.
 *
 * @param {event} event - Click event
 */
function clearLocalStorage( event ) {
  event.preventDefault();
  const review = getCurrentReview();
  if ( review ) {
    localStorage.removeItem( 'curriculumReviewId' );
  }

  document.getElementById( 'token--continue' ).value = '';

  closeNewReviewModalWindow();
  setBeginReviewButtonEnabling();
}

/**
 * Bind events.
 */
function bindEvents() {
  $( '#modal-save-work .save-work-push-analytics' ).click( closeSaveWorkModalWindow );
  $( '#modal-start-over .start-over-close-push-analytics' ).click( closeNewReviewModalWindow );
  $( '#modal-start-over .start-over-push-analytics' ).click( clearLocalStorage );
  $( 'form#begin-review-form .link-push-analytics' ).click( openSaveWorkModalWindow );
  $( 'form#form__continue-review .link-push-analytics' ).click( openSaveWorkModalWindow );
  $( 'form#begin-review-form' ).submit( beginReviewButtonClick );
  $( 'form#begin-review-form #new-review-modal-dialog-btn' ).click( openNewReviewModalWindow );
  $( 'form#begin-review-form #tdp-crt_title' ).change( onValuesChanged );
  $( 'form#begin-review-form #tdp-crt_grade' ).change( onValuesChanged );
  $( 'form#form__continue-review #token--continue' ).change( onValuesChanged );
}

/**
 * Call to get things initialized.
 */
export default function init() {
  setUpTokenDropdown();
  setInitialFormValues();
  openingNewReviewModal = false;
  openingSaveWorkModal = false;
  bindEvents();
  tabsInit();
}

