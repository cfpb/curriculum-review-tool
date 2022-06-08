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

it( 'isReady() is false if init() is not called', async () => {
  const dbReview = undefined;
  ls.fetchReviewFromServer = async () => dbReview;

  expect( ls.isReady() ).toBe( false );
  expect( ls.review.id ).toBeUndefined();

} );

it( 'isReady() is false after init with non-existing db review is set', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  const dbReview = undefined;
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();

  expect( ls.isReady() ).toBe( false );
  expect( ls.review.id ).toBeUndefined();

} );


it( 'isReady() is true after init with existing db review is set', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db'
  };
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();

  expect( ls.isReady() ).toBe( true );
  expect( ls.review.id ).toBe( testToken );

} );

