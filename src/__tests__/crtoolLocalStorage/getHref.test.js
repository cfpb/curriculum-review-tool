import 'mock-local-storage';

import C from '../../js/business.logic/constants';
import ls, { CHECK_FREQUENCY } from '../../crtoolLocalStorage';

const testToken = 'abcd';
const consoleError = console.error;
const windowLocation = window.location;

beforeEach( () => {
  delete window.location;
  window.location = {
    href: 'http://example.com'
  };
} );

afterAll( () => {
  console.error = consoleError;
  window.location = windowLocation;
} );

it( 'getHref() works', async () => {
  const url = ls.getHref();
  expect( url ).toBe( window.location.href );
} );
