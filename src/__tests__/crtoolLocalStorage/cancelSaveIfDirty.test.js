import 'mock-local-storage';

import C from '../../js/business.logic/constants';
import ls, { CHECK_FREQUENCY } from '../../crtoolLocalStorage';

const testToken = 'abcd';
const consoleError = console.error;
const clearTimeoutAlias = window.clearTimeout;

beforeEach( () => {
  ls.locationSearch = '';
  global.localStorage.clear();
  ls.localStorage = global.localStorage;
  ls.pushState = jest.fn();
  ls.setHref = jest.fn();
  ls.getHref = () => 'http://example.com/page';
  console.error = jest.fn();
  window.clearTimeout = jest.fn();
} );

afterAll( () => {
  console.error = consoleError;
  window.clearTimeout = clearTimeoutAlias;
} );

it( 'cancelSaveIfDirty() calls clearTimeout', async () => {
  ls.timeoutHandle = setTimeout( ls.saveIfDirty, CHECK_FREQUENCY );
  ls.cancelSaveIfDirty();
  expect( clearTimeout.mock.calls.length ).toBe( 1 );
} );
