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

const bbTool = require( './bb-tool' );
const scroll = require( './scroll' );
const search = require( './search' );
const closest = require( './util/dom-traverse' ).closest;
const expandableFacets = require( './expandable-facets' );
const cfExpandables = require( 'cf-expandables/src/Expandable' );

const app = {
  init: () => {
    cfExpandables.init();
    bbTool.init();
    expandableFacets.init();
    scroll.init();
  }
};

window.addEventListener( 'load', app.init );
