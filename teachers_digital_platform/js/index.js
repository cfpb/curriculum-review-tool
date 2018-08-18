'use strict';

// Your app's JavaScript may look something like this -- or it may not.
//
// const module1 = require( './module1.js' );
// const module2 = require( './module2.js' );
//
// const app = {
//   init: () => {
//     module1.init();
//     module2.init();
//   }
// };
//
// app.init();


const search = require( './search' );
const closest = require( './util/dom-traverse' ).closest;
const cfExpandables = require( 'cf-expandables/src/Expandable' );

const app = {
  init: () => {
     cfExpandables.init();
  }
};

window.addEventListener( 'load', app.init );

/* Use vanilla JS instead of jQuery */
//document.addEventListener( 'DOMContentLoaded', function() {
//  // Hide the apply filters submit button in the sidebar
//  var submitButtons = document.querySelectorAll( '.filter-panel__apply-filters' );
//  var i;
//  for ( i = 0; i < submitButtons.length; i++ ) {
//    submitButtons[i].style.display = 'none';
//  }
//  // Make facets auto-submit on change
//  var checkboxes = document.querySelectorAll( '.content_sidebar  > .o-filter-panel form input[type=checkbox]' );
//  for ( i = 0; i < checkboxes.length; i++ ) {
//    checkboxes[i].addEventListener( 'change', function() {
//      var facetForm = closest( this, 'form' );
//      facetForm.submit();
//    } );
//  }
//} );
