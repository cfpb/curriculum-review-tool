const Stickyfill = require( 'stickyfilljs' );

const tdpSticky = {
  init: () => {
    let stickies = document.querySelectorAll( '[data-sticky]' );

    Stickyfill.add( stickies );
  }
};

module.exports = tdpSticky;
