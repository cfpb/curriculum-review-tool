const stickybits = require( 'stickybits/dist/stickybits.es.js' );

const tdpSticky = {
  init: () => {
    stickybits( '[data-sticky]' );
  }
};

module.exports = tdpSticky;
