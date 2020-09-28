import $ from 'jquery';

const tabStart = $( '.o-tabs_button__start-review' );
const tabContinue = $( '.o-tabs_button__continue-review' );
const contentStart = $( '.o-tabs_tab__start-review' );
const contentContinue = $( '.o-tabs_tab__continue-review' );
const curriculumIdField = $( '#token--continue' );

/**
 *
 * @param {DomElement} tab - tab to make active
 */
function setActiveTab( tab ) {
  if ( tab === tabContinue ) {
    tabContinue.addClass( 'is-active' );
    tabStart.removeClass( 'is-active' );
    contentStart.removeClass( 'is-active' ).hide();
    contentContinue.addClass( 'is-active' ).show();

  } else {
    tabContinue.removeClass( 'is-active' );
    tabStart.addClass( 'is-active' );
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
