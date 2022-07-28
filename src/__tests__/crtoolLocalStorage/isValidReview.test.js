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

it( 'isValidReview() returns true if id and last_updated are set', async () => {

  const review = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };

  expect( ls.isValidReview( review ) ).toBe( true );
} );

it( 'isValidReview() returns false if id is missing', async () => {

  const review = {
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };

  expect( ls.isValidReview( review ) ).toBe( false );
} );

it( 'isValidReview() returns false if last_updated is missing', async () => {

  const review = {
    id: testToken,
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };

  expect( ls.isValidReview( review ) ).toBe( false );
} );

it( 'isValidReview() returns false if not an object', async () => {

  const review = undefined;

  expect( ls.isValidReview( review ) ).toBe( false );
} );
