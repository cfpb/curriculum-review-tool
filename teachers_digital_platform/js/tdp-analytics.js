'use strict';

const Analytics = require( './Analytics' );
const closest = require( './util/dom-traverse' ).closest;
const bindEvent = require( './util/dom-events' ).bindEvent;
const find = require( './util/dom-traverse' ).queryOne;

/* eslint-disable consistent-return */

/**
 * Sends the user interaction to Analytics
 * @param {string} action - The user's action
 * @param {string} label - The label associated with the action
 * @param {string} category - Optional category if it's not eRegs-related
 * @returns {object} Event data
 */
const sendEvent = ( action, label, category ) => {
  category = category || 'TDP Search Tool';
  const eventData = Analytics.getDataLayerOptions( action, label, category );
  console.log( action, label );
  //Analytics.sendEvent( eventData );
  return eventData;
};

/**
 * getExpandable - Find the expandable the user clicked.
 *
 * @param {event} event Click event
 *
 * @returns {DOMNode|null} The expandable or null if it's not an expandable
 */
const getExpandable = event => {
  let el = closest( event.target, '.o-expandable_header' );
  el = !el ? closest( event.target, '.o-expandable-facets_target' ) : el;
  el = !el ? event.target : el;

  if (
    el.classList.contains( 'o-expandable_header' ) ||
    el.classList.contains( 'o-expandable-facets_target' )
  ) {
    return el;
  }
  return null;
};

/**
 * getExpandableState - Description
 *
 * @param {DOMNode} expandable Expandable's HTML element
 *
 * @returns {string} Expandable's state, either `open` or `close`
 */
const getExpandableState = expandable => {
  let state = 'collapse';
  if (
    expandable.classList.contains( 'o-expandable_target__expanded' ) ||
    expandable.classList.contains( 'is-open' )
  ) {
    state = 'expand';
  }
  return state;
};

/**
 * handleExpandableClick - Listen for clicks within a search page's content
 * and report to GA if they opened or closed an expandable.
 *
 * @param {event} event Click event
 * @returns {object} Event data
 */
const handleExpandableClick = event => {
  const expandable = getExpandable( event );
  if ( !expandable ) {
    return;
  }
  const action = `${ getExpandableState( expandable ) } filter`;
  let section = find( 'span.o-expandable_label', expandable );
  section = !section ? find( 'span[aria-hidden=true]', expandable ) : section;
  if (!section ) {
    return;
  }
  section = section.textContent.trim();
  return sendEvent( action, section );
};

/**
 * getFilter - Find the checkbox filter the user clicked.
 *
 * @param {event} event Click event
 *
 * @returns {DOMNode|null} The checkbox div or null if it's not a checkbox
 */
const getFilter = event => {
  const el = closest( event.target, '.m-form-field__checkbox' ) || event.target;
  if ( el.classList.contains( 'm-form-field__checkbox' ) ) {
    return el;
  }
  return null;
};


/**
 * handleFilterClick - Listen for filter clicks and report to GA.
 *
 * @param {event} event Click event
 * @returns {object} Event data
 */
const handleFilterClick = event => {
  const checkboxFilter = getFilter( event );
  let checkbox = find( 'input[type=checkbox]', checkboxFilter );
  const button = find ('button.o-expandable-facets_target', checkboxFilter );
  if ( button ) {
    checkbox = event.target === checkbox ? event.target : null;
  }
  if ( !checkboxFilter || !checkbox ) {
    return;
  }
  const action = checkbox.checked ? 'filter' : 'remove filter';
  const section = checkbox.getAttribute( 'aria-label' );
  return sendEvent( action, section );
};

/**
 * getPaginator - Find the paginator the user clicked.
 *
 * @param {event} event Click event
 *
 * @returns {DOMNode|null} The checkbox div or null if it's not a checkbox
 */
const getPaginator = event => {
  const el = closest( event.target, '.a-btn' ) || event.target;
  if ( el.classList.contains( 'a-btn' ) ) {
    return el;
  }
  return null;
};

/**
 * handlePaginationClick - Listen for pagination clicks and report to GA.
 *
 * @param {event} event Click event
 * @returns {object} Event data
 */
const handlePaginationClick = event => {
  const paginator = getPaginator( event );
  if ( !paginator) {
    return;
  }

  const isNextButton = paginator.classList.contains( 'm-pagination_btn-next' );
  const isPrevButton = paginator.classList.contains( 'm-pagination_btn-prev' );
  const isDisabled = paginator.classList.contains( 'a-btn__disabled' );

  if (
    !paginator.href ||
    isDisabled ||
    ( !isNextButton && !isPrevButton )
  ) {
    return;
  }

  const action = isNextButton ? 'next page' : 'previous page';
  let section = paginator.href.match( /\?.*page=(\d+)/ );
  if ( !section ) {
    return;
  }
  section = isNextButton ? parseInt(section[1]) - 1 : parseInt(section[1]) + 1;
  return sendEvent( action, section );
};

/**
 * getClearBtn - Find the paginator the user clicked.
 *
 * @param {event} event Click event
 *
 * @returns {DOMNode|null} The checkbox div or null if it's not a checkbox
 */
const getClearBtn = event => {
  const el = closest( event.target, '.results_filters-clear' ) || event.target;
  if ( el.classList.contains( 'results_filters-clear' ) ) {
    return el;
  }
  return null;
};

/**
 * handleClearClick - Listen for pagination clicks and report to GA.
 *
 * @param {event} event Click event
 * @returns {object} Event data
 */
const handleClearClick = event => {
  const clearBtn = getClearBtn( event );
  const wrapper = clearBtn.parentElement;
  const tags = find( '.a-tag', clearBtn.parentElement );
  console.log( clearBtn, wrapper, tags );
  if ( !clearBtn || !tags ) {
    return;
  }


}

/**
 * bindAnalytics - Set up analytics reporting.
 */
const bindAnalytics = () => {
  const searchContent = find( '#tdp-search-facets-and-results');

  bindEvent( searchContent, {
    click: handleExpandableClick
  } );

  bindEvent( searchContent, {
    click: handleFilterClick
  } );

  bindEvent( searchContent, {
    click: handlePaginationClick
  } );

  bindEvent( searchContent, {
    click: handleClearClick
  } );
};

/**
 * Initialize search functionality.
 */
function init() {
  // Override search form submission
  bindAnalytics();
}


module.exports = {
  getExpandable,
  getFilter,
  getExpandableState,
  handleExpandableClick,
  handleFilterClick,
  handlePaginationClick,
  sendEvent,
  bindAnalytics
};
