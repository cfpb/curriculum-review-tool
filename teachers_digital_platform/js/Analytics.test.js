const Analytics = require( './Analytics.js' );

/* eslint-disable max-lines-per-function, no-undefined */
describe( 'Analytics', () => {

  it( 'should send an event', () => {
    const mockCallback = jest.fn();
    const opts = { eventCallback: mockCallback };

    Analytics.sendEvent( opts );

    expect( mockCallback.mock.calls.length ).toBe( 1 );
  } );

  it( 'should send events', () => {
    const mockCallback = jest.fn();

    const mockEvent = () => ( { eventCallback: mockCallback } );

    const events = [ mockEvent(), mockEvent(), mockEvent() ];

    Analytics.sendEvents( events );

    expect( mockCallback.mock.calls.length ).toBe( 3 );
  } );

} );
