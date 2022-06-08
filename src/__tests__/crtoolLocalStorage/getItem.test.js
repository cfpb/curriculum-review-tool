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

it( 'getItem() throws error if used before init', async () => {
  expect( ls.getItem ).toThrow( 'Use before init' );
} );

it( 'getItem() returns correct value', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();
  expect( ls.getItem( 'id' ) ).toBe( testToken );
} );

it( 'getItem() returns null if item not found', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();
  expect( ls.getItem( 'id2' ) ).toBeNull();
} );
