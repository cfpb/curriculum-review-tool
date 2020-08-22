import $ from 'jquery';

const tabStart = $( '.tab-link__start-review' );
const tabContinue = $( '.tab-link__continue-review' );
const contentStart = $( '.tab-content--start-review' );
const contentContinue = $( '.tab-content--continue-review' );
const curriculumIdField = $( '#token--continue' );

/**
 *
 * @param {DomElement} tab - tab to make active
 */
function setActiveTab( tab ) {
  if ( tab === tabContinue ) {
    tabContinue.parent().addClass( 'active-tab' );
    tabStart.parent().removeClass( 'active-tab' );
    contentStart.removeClass( 'is-active' ).hide();
    contentContinue.addClass( 'is-active' ).show();

  } else {
    tabContinue.parent().removeClass( 'active-tab' );
    tabStart.parent().addClass( 'active-tab' );
    contentStart.addClass( 'is-active' ).show();
    contentContinue.removeClass( 'is-active' ).hide();
  }
}

/**
 * Bind click events to tabs
 */
function bindEvents() {
  tabStart.click( function() {
    setActiveTab( tabStart );
  } );
  tabContinue.click( function() {
    setActiveTab( tabContinue );
  } );
}

/**
 * Initialize tabs
 */
export default function tabsInit() {
  if ( curriculumIdField.val() ) {
    setActiveTab( tabContinue );
  } else {
    setActiveTab( tabStart );
  }
  bindEvents();
}
