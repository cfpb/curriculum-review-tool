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

it( 'setItem() throws error if used before init', async () => {
  expect( ls.setItem ).toThrow( 'Use before init' );
} );

it( 'setItem() creates new key/value pair', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date( '2019-01-01' ).toISOString(),
    value: 'db'
  };
  const oldDate = dbReview.ls_modified_time;
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();
  ls.setItem( 'test', 'something else' );
  expect( ls.getItem( 'test' ) ).toBe( 'something else' );
  expect( Date.parse( ls.review.ls_modified_time ) ).toBeGreaterThan( Date.parse( oldDate ) );
} );

it( 'setItem() overwrites existing key/value pair', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date( '2019-01-01' ).toISOString(),
    value: 'db'
  };
  const oldDate = dbReview.ls_modified_time;
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();
  ls.setItem( 'value', 'cranberries' );
  expect( ls.getItem( 'value' ) ).toBe( 'cranberries' );
  expect( Date.parse( ls.review.ls_modified_time ) ).toBeGreaterThan( Date.parse( oldDate ) );
} );

it( 'setItem() does nothing if existing key/value pair is the same', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date( '2019-01-01' ).toISOString(),
    value: 'db'
  };
  const oldDate = dbReview.ls_modified_time;
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();
  ls.setItem( 'value', 'db' );
  expect( ls.getItem( 'value' ) ).toBe( 'db' );
  expect( ls.review.ls_modified_time ).toBe( oldDate );
} );
