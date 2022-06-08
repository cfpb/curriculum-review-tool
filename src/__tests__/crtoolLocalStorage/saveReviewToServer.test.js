import 'mock-local-storage';
import xhrMock from 'xhr-mock';

import C from '../../js/business.logic/constants';
import ls, { CHECK_FREQUENCY } from '../../crtoolLocalStorage';

const testToken = 'abcd';
const consoleError = console.error;

beforeEach( () => {
  ls.locationSearch = '';
  global.localStorage.clear();
  ls.localStorage = global.localStorage;
  ls.pushState = jest.fn();
  ls.setHref = jest.fn();
  ls.getHref = () => 'http://example.com/page';
  console.error = jest.fn();
  xhrMock.setup();
} );

afterAll( () => {
  console.error = consoleError;
  xhrMock.teardown();
} );

it( 'saveReviewToServer() with valid review', async () => {
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };

  ls.review = dbReview;
  const oldDate = ls.review.ls_modified_time;
  ls.review.value2 = 'something else';

  xhrMock.post( '../update-review/', ( req, res ) => {
    expect( req.header( 'Content-Type' ) ).toEqual( 'application/json;charset=UTF-8' );
    expect( req.body() ).toEqual( JSON.stringify( ls.review ) );
    return res.status( 200 ).body( JSON.stringify( {
      id: testToken,
      last_updated: 'something',
      ls_modified_time: new Date().toISOString(),
      value: 'db',
      value2: 'something else'
    } ) );
  } );


  await ls.saveReviewToServer();
  expect( ls.review.id ).toBe( testToken );
  expect( Date.parse( ls.review.ls_modified_time ) ).toBeGreaterThanOrEqual( Date.parse( oldDate ) );
} );

it( 'saveReviewToServer() with invalid review', async () => {

  const dbReview = {
    id: testToken,
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };

  ls.review = dbReview;
  const oldDate = ls.review.ls_modified_time;
  ls.review.value2 = 'something else';

  xhrMock.post( '../update-review/', ( req, res ) => {
    expect( req.header( 'Content-Type' ) ).toEqual( 'application/json;charset=UTF-8' );
    expect( req.body() ).toEqual( JSON.stringify( ls.review ) );
    return res.status( 200 ).body( JSON.stringify( {
      id: testToken,
      ls_modified_time: new Date().toISOString(),
      value: 'db',
      value2: 'something else'
    } ) );
  } );

  await expect( ls.saveReviewToServer() ).rejects.toBeUndefined();
  expect( console.error.mock.calls[0][0] ).toEqual( 'Invalid server response' );
} );

it( 'saveReviewToServer() with 500 status code response', async () => {

  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };

  ls.review = dbReview;

  xhrMock.post( '../update-review/', ( req, res ) => {
    expect( req.header( 'Content-Type' ) ).toEqual( 'application/json;charset=UTF-8' );
    expect( req.body() ).toEqual( JSON.stringify( ls.review ) );
    return res.status( 500 ).body();
  } );


  await expect( ls.saveReviewToServer() ).rejects.toBeUndefined();
  expect( console.error.mock.calls[1][0] ).toEqual( 'DB save failed.' );
} );
