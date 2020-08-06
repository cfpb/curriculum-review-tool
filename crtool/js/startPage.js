const jQuery = window.jQuery;
import sendAnalytics from './analytics.js';

/**
 * The below code manages the enabling/disabling of the submit button
 * Also manages the saving and setting of the Title, Date, & Grade Range
 */

const newReviewModalWindow = document.getElementById( 'modal-start-over' );
const saveWorkModalWindow = document.getElementById( 'modal-save-work' );
let openingNewReviewModal = false;
let openingSaveWorkModal = false;

/*  */
function getCurrentReview() {
  let review = false;
  const reviewId = localStorage.getItem( 'curriculumReviewId' ) || '';
  if ( reviewId ) {
    review = localStorage.getItem( 'crtool.' + reviewId );
    if ( JSON.stringify( review ) !== '{}' ) {
      review = JSON.parse( review );
    }
  }
  return review;
}

/* Method to manage enabling or dissabling begin button based on form values */
function setBeginReviewButtonEnabling() {
  const selectedGradeValue = document.getElementById( 'tdp-crt_grade' ).value;

  // check required fields have values
  const isValidGradeSelected = selectedGradeValue === 'Elementary school' ||
                             selectedGradeValue === 'Middle school' ||
                             selectedGradeValue === 'High school';
  const isEnabled = isValidGradeSelected && document.getElementById( 'tdp-crt_title' ).value;

  document.getElementById( 'tdp-crt-begin-review-btn' ).disabled = !isEnabled;
}

/* Some versions of IE do not support standard functionality when it
   comes to removing classnames.  So we need to split remove then join */
function removeClassFromElement( element, classNameToRemove ) {
  const classes = element.className.split( ' ' );
  const idx = classes.indexOf( classNameToRemove );
  if ( idx !== -1 ) classes.splice( idx, 1 );
  element.className = classes.join( ' ' );
}

/* Close New Review Warning Modal Dialog */
function closeNewReviewModalWindow() {
  // Hide from screen readers
  document.getElementById( 'modal-start-over' ).setAttribute( 'aria-hidden', 'false' );
  removeClassFromElement( newReviewModalWindow, 'o-modal__visible' );
  document.removeEventListener( 'click', newReviewOutsideClickListener );
}

/* Method to close New Review daialog if click outside */
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

/* Open New Review Warning Modal Dialog */
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

/* Close Save Work Warning Modal Dialog */
function closeSaveWorkModalWindow() {
  // Hide from screen readers
  document.getElementById( 'modal-save-work' ).setAttribute( 'aria-hidden', 'true' );
  removeClassFromElement( saveWorkModalWindow, 'o-modal__visible' );
  document.removeEventListener( 'click', saveWorkOutsideClickListener );
}

/* Method to close Save Work daialog if click outside */
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

/* Set the values based on localStorage */
function setInitialFormValues() {
  const review = getCurrentReview();
  if ( review ) {
    document.getElementById( 'tdp-crt_title' ).value = review.curriculumTitle || '';
    document.getElementById( 'tdp-crt_pubdate' ).value = review.publicationDate || '';
    document.getElementById( 'tdp-crt_grade' ).value = review.gradeRange || '';
    document.getElementById( 'tdp-crt_id' ).value = review.id || '';
    document.getElementById( 'tdp-crt_pass_code' ).value = review.pass_code || '';
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

/* Add this function to any required field so we can monitor changed values */
function onValuesChanged() {
  setBeginReviewButtonEnabling();
}

/* When user starts a new review we need to send analytics for
   Curriculum Title, Publication Date, & Grade Range */
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

/* Method that actually saves values (Title, Date, & Grad Range) */
function beginReviewButtonClick( event ) {
  event.preventDefault();
  const curriculumTitle = document.getElementById( 'tdp-crt_title' ).value;
  const publicationDate = document.getElementById( 'tdp-crt_pubdate' ).value;
  const gradeRange = document.getElementById( 'tdp-crt_grade' ).value;
  const curriculumReviewId = document.getElementById( 'tdp-crt_id' ).value;
  const curriculumPassCode = document.getElementById( 'tdp-crt_pass_code' ).value;

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if ( this.readyState === 4 && this.status === 200 ) {
      const review = JSON.parse( this.responseText );
      localStorage.setItem( 'curriculumReviewId', review.id );
      localStorage.setItem( 'crtool.' + review.id, JSON.stringify( review ) );
      window.location.href = '../tool?token=' + review.id;
    }
  };
  let requestUrl = '../create-review/';
  if ( curriculumReviewId ) {
    requestUrl = '../get-review?tdp-crt_id=' + curriculumReviewId;
    xhttp.open( 'GET', requestUrl );
    xhttp.send();
  } else {
    xhttp.open( 'POST', requestUrl );
    xhttp.send(
      JSON.stringify( {
        'tdp-crt_title': curriculumTitle,
        'tdp-crt_pubdate': publicationDate,
        'tdp-crt_grade': gradeRange,
        'tdp-crt_pass_code': curriculumPassCode
      } )
    );
  }

  recordAnalytics( curriculumTitle, publicationDate, gradeRange );
}

/* User has chosen to clear all values and start over */
function clearLocalStorage( event ) {
  event.preventDefault();
  const review = getCurrentReview();
  if ( review ) {
    localStorage.removeItem( 'curriculumReviewId' );
  }

  document.getElementById( 'tdp-crt_title' ).value = '';
  document.getElementById( 'tdp-crt_pubdate' ).value = '';
  document.getElementById( 'tdp-crt_grade' ).value = '';
  document.getElementById( 'tdp-crt_id' ).value = '';
  document.getElementById( 'tdp-crt_pass_code' ).value = '';

  closeNewReviewModalWindow();
  setBeginReviewButtonEnabling();
}

function bindEvents() {
  ( function( $ ) {
    $( '#modal-save-work .save-work-push-analytics' ).click( function( event ) { closeSaveWorkModalWindow( event ); } );
    $( '#modal-start-over .start-over-close-push-analytics' ).click( function( event ) { closeNewReviewModalWindow( event ); } );
    $( '#modal-start-over .start-over-push-analytics' ).click( function( event ) { clearLocalStorage( event ); } );
    $( 'form#begin-review-form' ).submit( function( event ) { beginReviewButtonClick( event ); } );
    $( 'form#begin-review-form #new-review-modal-dialog-btn' ).click( function( event ) { openNewReviewModalWindow( event ); } );
    $( 'form#begin-review-form #tdp-crt_title' ).change( function() { onValuesChanged(); } );
    $( 'form#begin-review-form #tdp-crt_grade' ).change( function() { onValuesChanged(); } );
  } )( jQuery );
}

// Call to get things initialized
export default function init() {
  setInitialFormValues();
  openingNewReviewModal = false;
  openingSaveWorkModal = false;
  bindEvents();
}

