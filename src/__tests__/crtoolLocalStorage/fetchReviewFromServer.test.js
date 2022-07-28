import 'mock-local-storage';
import mock from 'xhr-mock';

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
  mock.setup();
} );

afterAll( () => {
  console.error = consoleError;
  mock.teardown();
} );

it( 'fetchReviewFromServer() with existing record returns object', async () => {

  expect.assertions( 4 );

  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };

  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  ls.localStorage.setItem( 'crtool.' + testToken, JSON.stringify( {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'local'
  } ) );
  ls.review = dbReview;

  mock.post( '../get-review/', ( req, res ) => {
    expect( req.header( 'Content-Type' ) ).toEqual( 'application/x-www-form-urlencoded' );
    expect( req.body() ).toEqual( 'token=' + testToken );
    return res.status( 200 ).body( JSON.stringify( dbReview ) );
  } );

  const fetchedReview = await ls.fetchReviewFromServer( testToken );

  expect( ls.review ).toEqual( dbReview );
  expect( fetchedReview ).toEqual( dbReview );

} );

it( 'fetchReviewFromServer() with fails if 500 status code', async () => {

  expect.assertions( 4 );

  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };

  ls.review = dbReview;

  mock.post( '../get-review/', ( req, res ) => {
    expect( req.header( 'Content-Type' ) ).toEqual( 'application/x-www-form-urlencoded' );
    expect( req.body() ).toEqual( 'token=' + testToken );
    return res.status( 500 ).body();
  } );

  await expect( ls.fetchReviewFromServer( testToken ) ).rejects.toBeUndefined();
  expect( console.error.mock.calls[1][0] ).toEqual( 'Review fetch failed.' );


} );
