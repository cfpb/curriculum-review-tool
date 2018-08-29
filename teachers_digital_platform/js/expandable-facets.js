/* ==========================================================================
   Expandable Facets Organism
   ========================================================================== */

'use strict';

// polyfill for ie9 compatibility
require( 'classlist-polyfill' );

const domClassList = require( 'cf-atomic-component/src/utilities/dom-class-list' );
const addClass = domClassList.addClass;
const contains = domClassList.contains;
const removeClass = domClassList.removeClass;
const closest = require( 'cf-atomic-component/src/utilities/dom-closest' ).closest;

/**
 * Find .o-expandable-facets, add `is-open` class.
 * Find .o-expandable-facets_target and add a click handler to toggle classes on .o-expandable-facets between `is-open` and `is-closed`.
 */
