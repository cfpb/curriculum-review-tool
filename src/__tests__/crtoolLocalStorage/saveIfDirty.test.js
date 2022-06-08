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

it( 'saveDirty() with changes', async () => {
  ls.review.ls_modified_time = new Date().toISOString();
  ls.lastTimeSaved = new Date( '2020-01-01' ).toISOString();
  ls.cancelSaveIfDirty = jest.fn();
  ls.saveReviewToServer = jest.fn();
  ls.scheduleSaveIfDirty = jest.fn();
  ls.saveIfDirty();
  expect( ls.cancelSaveIfDirty.mock.calls.length ).toBe( 1 );
  expect( ls.saveReviewToServer.mock.calls.length ).toBe( 1 );
  expect( ls.scheduleSaveIfDirty.mock.calls.length ).toBe( 0 );
} );

it( 'saveDirty() without changes', async () => {
  ls.review.ls_modified_time = new Date( '2020-01-01' ).toISOString();
  ls.lastTimeSaved = new Date( '2020-01-01' ).toISOString();
  ls.cancelSaveIfDirty = jest.fn();
  ls.saveReviewToServer = jest.fn();
  ls.scheduleSaveIfDirty = jest.fn();
  ls.saveIfDirty();
  expect( ls.cancelSaveIfDirty.mock.calls.length ).toBe( 1 );
  expect( ls.saveReviewToServer.mock.calls.length ).toBe( 0 );
  expect( ls.scheduleSaveIfDirty.mock.calls.length ).toBe( 1 );
} );
