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

it( 'saveReviewToLocalStorage() increases last_modified_time,preserves id, ', async () => {
  ls.localStorage.setItem( 'curriculumReviewId', testToken );
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date( '2019-01-01' ).toISOString(),
    value: 'db'
  };
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();

  const oldDate = Date.parse( ls.review.ls_modified_time );
  ls.review.value = 'db_updated';
  ls.review.value_2 = 'new value';
  ls.saveReviewToLocalStorage();
  const lsReview = ls.loadReviewFromLocalStorage( testToken );
  const newDate = Date.parse( lsReview.ls_modified_time );

  expect( lsReview.id ).toBe( testToken );
  expect( lsReview.value ).toBe( 'db_updated' );
  expect( lsReview.value_2 ).toBe( 'new value' );
  expect( newDate ).toBeGreaterThan( oldDate );
  expect( newDate ).toBeLessThanOrEqual( new Date().getTime() );

} );
