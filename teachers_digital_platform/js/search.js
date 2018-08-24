'use strict';

const behavior = require( './util/behavior' );
const utils = require( './search-utils' );
const closest = require( './util/dom-traverse' ).closest;
const find = require( './util/dom-traverse' ).queryOne;
const cfExpandables = require( 'cf-expandables/src/Expandable' );


// Keep track of the most recent XHR request so that we can cancel it if need be
let searchRequest = {};

/**
 * Initialize search functionality.
 */
function init() {
  // Override search form submission
  attachHandlers();
}

/**
 * Attach search results handlers
 */
function attachHandlers() {
  behavior.attach( 'submit-search', 'submit', handleSubmit );
  behavior.attach( 'change-filter', 'change', handleFilter );
  behavior.attach( 'clear-filter', 'click', clearFilter );
  behavior.attach( 'clear-all', 'click', clearFilters );
  cfExpandables.init();
}

/**
 * Remove a filter from the search results page.
 *
 * @param {Event} event Click event
 */
function clearFilter( event ) {
  // Continue only if the X icon was clicked and not the parent button
  let target = event.target.tagName.toLowerCase();
  if ( target !== 'svg' && target !== 'path' ) {
    return;
  }
  target = closest( event.target, '.a-tag' );
  const checkbox = find( `${ target.dataset.value }` );
  // Remove the filter tag
  target.remove();
  // Uncheck the filter checkbox
  checkbox.checked = false;
  if ( event instanceof Event ) {
    handleFilter( event );
  }
}

/**
 * Remove all filters from the search results page.
 *
 * @param {Event} event Click event
 */
function clearFilters( event ) {
  const filterIcons = document.querySelectorAll( '.a-tag svg' );
  filterIcons.forEach( filterIcon => {
    const target = closest( filterIcon, 'button' );
    clearFilter( {
      target: filterIcon,
      value: target
    } );
  } );
  handleFilter( event );
}

/**
 * Handle keyword search form submission.
 *
 * @param {Event} event Click event
 * @returns {String} New page URL with search terms.
 */
function handleSubmit( event ) {
  if ( event instanceof Event ) {
    event.preventDefault();
  }
  const searchField = find( 'input[name=q]' );
  const searchTerms = utils.getSearchValues( searchField, [] );
  const baseUrl = window.location.href.split( '?' )[0];
  const searchParams = utils.serializeFormFields( searchTerms );
  const searchUrl = utils.buildSearchResultsURL(
    baseUrl, searchParams, { partial: true }
  );
  const searchContainer = find( '#tdp-search-facets-and-results' );
  // Update the filter query params in the URL
  utils.updateUrl( baseUrl, searchParams );
  utils.showLoading( searchContainer );
  searchRequest = fetch( searchUrl )
    .then( function( response ) {
      return response.text();
    } )
    .then( function( data ) {
      utils.hideLoading( searchContainer );
      searchContainer.innerHTML = data;
      utils.updateUrl( baseUrl, searchParams );
      attachHandlers();
      return data;
    } );
  return searchUrl;
}

/**
 * Handle filter change events.
 *
 * @param {Event} event Click event
 */
function handleFilter( event ) {
  if ( event instanceof Event ) {
    event.preventDefault();
  }
  // Abort the previous search request if it's still active
  /* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
  try {
    searchRequest.abort();
  } catch ( err ) { }
  if ( event.target.parentElement.parentElement.classList.contains( 'aggregation-branch' ) ) {
    // Check all children if parent is checked.
    const children = event.target.parentElement.parentElement.querySelectorAll(
      ':scope>ul.children input[type=checkbox]'
    );
    for ( var i = 0; i < children.length; i++ ) {
      children[i].checked = event.target.checked;
    }
  } else if ( event.target.parentElement.parentElement.classList.contains( 'children' ) ) {
    const children = event.target.parentElement.parentElement.querySelectorAll(
      ':scope>li>input[type=checkbox]'
    );
    const checkedChildren = event.target.parentElement.parentElement.querySelectorAll(
      ':scope>li>input[type=checkbox]:checked'
    );
    const parentCheckbox = event.target.parentElement.parentElement.parentElement.querySelector(
      ':scope.aggregation-branch>li.parent>input[type=checkbox]'
    );
    if ( children.length === checkedChildren.length && children.length > 0 ) {
      // Check parent if all children are checked (TODO: maybe we shouldn't do this?).
      parentCheckbox.checked = true;
    } else {
      // Uncheck parent if not all children are checked.
      parentCheckbox.checked = false;
    }
  }

  const searchContainer = find( '#tdp-search-facets-and-results' );
  const filters = document.querySelectorAll( 'input:checked' );
  const searchField = find( 'input[name=q]' );
  const searchTerms = utils.getSearchValues( searchField, filters );
  const baseUrl = window.location.href.split( '?' )[0];
  const searchParams = utils.serializeFormFields( searchTerms );
  const searchUrl = utils.buildSearchResultsURL(
    baseUrl, searchParams, { partial: true }
  );
  // Update the filter query params in the URL
  utils.updateUrl( baseUrl, searchParams );
  utils.showLoading( searchContainer );
  searchRequest = fetch( searchUrl )
    .then( function( response ) {
      return response.text();
    } )
    .then( function( data ) {
      utils.hideLoading( searchContainer );
      searchContainer.innerHTML = data;
      utils.updateUrl( baseUrl, searchParams );
      attachHandlers();
      return data;
    } );
}

// Provide the no-JS experience to browsers without `replaceState`
if ( 'replaceState' in window.history ) {
  window.addEventListener( 'load', () => {
    init();
  } );
} else {
  document.getElementById( 'main' ).className += ' no-js';
}
