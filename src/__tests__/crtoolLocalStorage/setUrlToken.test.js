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

it( 'setUrlToken() correctly adds new token', async () => {
  const uri = ls.getHref();
  const token = testToken;
  expect( ls.setUrlToken( uri, token ) ).toBe( 'http://example.com/page#id=' + testToken );
} );

it( 'setUrlToken() correctly adds new token', async () => {
  const uri = ls.getHref() + '#something-else';
  const token = testToken;
  expect( ls.setUrlToken( uri, token ) ).toBe( 'http://example.com/page#id=' + testToken );
} );
