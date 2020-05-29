const BASE_JS_PATH = '../js/';

const app = require( `${ BASE_JS_PATH }index.js` );

describe( 'The app', () => {

  it( 'should not throw any errors on init', () => {
    expect( () => app ).not.toThrow();
  } );

} );
