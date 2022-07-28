import 'mock-local-storage';

import C from '../../js/business.logic/constants';
import ls, { CHECK_FREQUENCY } from '../../crtoolLocalStorage';

const testToken = 'abcd';
const consoleError = console.error;

beforeEach( () => {
  global.localStorage.clear();
  ls.localStorage = global.localStorage;
  ls.getLocationHash = jest.fn();
  ls.setLocationHash = jest.fn();
  ls.setHref = jest.fn();
  ls.getHref = () => 'http://example.com/page';
  console.error = jest.fn();
} );

afterAll( () => {
  console.error = consoleError;
} );

it( 'init() with no token forwards to start', async () => {
  await ls.init();

  expect( ls.setHref.mock.calls[0][0] ).toBe( C.START_PAGE_RELATIVE_URL );
} );

it( 'init() gets token from LS, but LS nor server has it', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  ls.fetchReviewFromServer = async () => undefined;

  await ls.init();

  expect( console.error.mock.calls.length ).toBe( 0 );
  expect( ls.setHref.mock.calls[0][0] ).toBe( C.START_PAGE_RELATIVE_URL );
  expect( ls.localStorage.getItem( 'crtool.' + testToken ) ).toBeNull();
  expect( ls.localStorage.getItem( 'curriculumReviewId' ) ).toBeNull();
} );

it( 'init() gets token from LS, but LS is invalid', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  ls.localStorage.setItem( 'crtool.' + testToken, '{"foo":"invalid"}' );
  ls.fetchReviewFromServer = async () => undefined;

  await ls.init();

  expect( console.error.mock.calls[0][0].message ).toBe( 'invalid review' );
  expect( ls.setHref.mock.calls[0][0] ).toBe( C.START_PAGE_RELATIVE_URL );
  expect( ls.localStorage.getItem( 'crtool.' + testToken ) ).toBeNull();
  expect( ls.localStorage.getItem( 'curriculumReviewId' ) ).toBeNull();
} );

it( 'init() finds DB review, but LS has older', async () => {
  const oldDate = new Date( new Date().getTime() - 1000e3 );
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  ls.localStorage.setItem( 'crtool.' + testToken, JSON.stringify( {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: oldDate.toISOString(),
    value: 'local'
  } ) );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };
  ls.fetchReviewFromServer = async () => dbReview;
  ls.scheduleSaveIfDirty = jest.fn();

  await ls.init();

  expect( console.error.mock.calls.length ).toBe( 0 );
  expect( ls.setLocationHash.mock.calls[0][0] ).toBe( '#id=' + testToken );
  expect( ls.setHref.mock.calls.length ).toBe( 0 );
  expect( ls.review ).toMatchObject( dbReview );
  expect( ls.localStorage.getItem( 'crtool.' + testToken ) ).toContain( '"value":"db"' );
  expect( ls.localStorage.getItem( 'curriculumReviewId' ) ).toBe( testToken );
  expect( ls.scheduleSaveIfDirty.mock.calls[0][0] ).toBe( CHECK_FREQUENCY );
} );

it( 'init() finds DB review and URL has token', async () => {
  const oldDate = new Date( new Date().getTime() - 1000e3 );
  ls.getLocationHash = () => '#id=' + testToken;
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  ls.localStorage.setItem( 'crtool.' + testToken, JSON.stringify( {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: oldDate.toISOString(),
    value: 'local'
  } ) );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };
  ls.fetchReviewFromServer = async () => dbReview;
  ls.scheduleSaveIfDirty = jest.fn();

  await ls.init();

  expect( console.error.mock.calls.length ).toBe( 0 );
  expect( ls.setLocationHash.mock.calls.length ).toBe( 0 );
  expect( ls.setHref.mock.calls.length ).toBe( 0 );
  expect( ls.review ).toMatchObject( dbReview );
  expect( ls.localStorage.getItem( 'crtool.' + testToken ) ).toContain( '"value":"db"' );
  expect( ls.localStorage.getItem( 'curriculumReviewId' ) ).toBe( testToken );
  expect( ls.scheduleSaveIfDirty.mock.calls[0][0] ).toBe( CHECK_FREQUENCY );
} );

it( 'init() finds DB review and LS has newer', async () => {
  const oldDate = new Date( new Date().getTime() - 1000e3 );
  ls.getLocationHash = () => '#id=' + testToken;
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  const lsReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'local'
  };
  ls.localStorage.setItem( 'crtool.' + testToken, JSON.stringify( lsReview ) );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: oldDate.toISOString(),
    value: 'db'
  };
  ls.fetchReviewFromServer = async () => dbReview;
  ls.scheduleSaveIfDirty = jest.fn();

  await ls.init();

  expect( console.error.mock.calls.length ).toBe( 0 );
  expect( ls.setLocationHash.mock.calls.length ).toBe( 0 );
  expect( ls.setHref.mock.calls.length ).toBe( 0 );
  expect( ls.review ).toMatchObject( lsReview );
  expect( ls.localStorage.getItem( 'crtool.' + testToken ) ).toContain( '"value":"local"' );
  expect( ls.localStorage.getItem( 'curriculumReviewId' ) ).toBe( testToken );
  expect( ls.scheduleSaveIfDirty.mock.calls[0][0] ).toBe( 0 );
} );

it( 'init() finds fresh review, sets local time', async () => {
  const oldDate = new Date( new Date().getTime() - 1000e3 );
  ls.getLocationHash = () => '#id=' + testToken;
  ls.getISODate = () => oldDate.toISOString();
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    value: 'db'
  };
  ls.fetchReviewFromServer = async () => dbReview;
  ls.scheduleSaveIfDirty = jest.fn();

  await ls.init();

  expect( console.error.mock.calls.length ).toBe( 0 );
  expect( ls.setLocationHash.mock.calls.length ).toBe( 0 );
  expect( ls.setHref.mock.calls.length ).toBe( 0 );
  expect( ls.review ).toMatchObject( {
    ...dbReview,
    ls_modified_time: oldDate.toISOString()
  } );
  expect( ls.localStorage.getItem( 'crtool.' + testToken ) ).toContain( '"value":"db"' );
  expect( ls.localStorage.getItem( 'curriculumReviewId' ) ).toBe( testToken );
  expect( ls.scheduleSaveIfDirty.mock.calls[0][0] ).toBe( 0 );
} );

it( 'init() with failed fetch from server and localStorage', async () => {
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };
  ls.fetchReviewFromServer = () => { throw new Error( 'Test Error' ); };
  ls.redirectHome = jest.fn();

  ls.localStorage.setItem( 'curriculumReviewId', testToken );

  await expect( ls.init() ).rejects.toBeUndefined;
  expect( console.error.mock.calls[0][0].message ).toBe( 'Test Error' );
  expect( ls.redirectHome.mock.calls.length ).toBe( 1 );
} );
