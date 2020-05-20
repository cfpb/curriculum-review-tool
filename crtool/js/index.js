// External modules
const AOS = require( 'aos/dist/aos' );
const cfExpandables = require( 'cf-expandables/src/Expandable' );

// Internal modules
const scroll = require( './tdpScroll' );
const search = require( './search' );
const sticky = require( './tdpSticky' );
const closest = require( './util/dom-traverse' ).closest;
const expandableFacets = require( './expandable-facets' );
const tdpAnalytics = require( './tdp-analytics' );

const app = {
  init: () => {
    AOS.init();
    cfExpandables.init();
    expandableFacets.init();
    scroll.init();
    sticky.init();
    tdpAnalytics.bindAnalytics();
  }
};

window.addEventListener( 'load', app.init );
