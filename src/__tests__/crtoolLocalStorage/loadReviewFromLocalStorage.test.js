import 'mock-local-storage';

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
} );

afterAll( () => {
  console.error = consoleError;
} );

it( 'loadReviewFromLocalStorage() with existing id', async () => {
  const lsReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'local'
  };

  ls.localStorage.setItem( 'crtool.' + testToken, JSON.stringify( lsReview ) );

  expect( ls.loadReviewFromLocalStorage( testToken ) ).toEqual( lsReview );
} );

it( 'loadReviewFromLocalStorage() with non-existent id', async () => {

  expect( ls.loadReviewFromLocalStorage( testToken ) ).toEqual( undefined );
} );

it( 'loadReviewFromLocalStorage() with missing last_updated date', async () => {
  const lsReview = {
    id: testToken,
    ls_modified_time: new Date().toISOString(),
    value: 'local'
  };

  ls.localStorage.setItem( 'crtool.' + testToken, JSON.stringify( lsReview ) );
  const error = new Error( 'invalid review' );
  expect( ls.loadReviewFromLocalStorage( testToken ) ).toBeUndefined();
  expect( console.error.mock.calls[0][0] ).toEqual( error );
} );
