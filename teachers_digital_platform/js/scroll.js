'use strict';

const smoothscroll = require( 'smoothscroll-polyfill' );

const scroll = {
    init: () => {
        const jumplinks = document.querySelectorAll( '[data-scroll]' );

        smoothscroll.polyfill();

        jumplinks.forEach( function( jumplink ) {
            jumplink.addEventListener( 'click', function( event ) {
                const target = document.querySelector( jumplink.hash );

                // Disable default browser behavior.
                event.preventDefault();

                // Scroll smoothly to the target.
                target.scrollIntoView({ behavior: 'smooth' });

                // Update url hash.
                if ( history.pushState ) {
                    history.pushState( null, null, jumplink.hash );
                }
                else {
                    location.hash = jumplink.hash;
                }

                // Wait half a second for scrolling to finish.
                setTimeout( function () {

                    // Make sure focus is set to the target.
                    target.setAttribute( 'tabindex', '-1' );
                    target.focus({ preventScroll: true });
                }, 500);
            }, false);
        });
    }
};

module.exports = scroll;