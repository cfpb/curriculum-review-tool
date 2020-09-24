import 'mock-local-storage';
import mock from 'xhr-mock';

import C from "../../js/business.logic/constants";
import ls, { CHECK_FREQUENCY } from '../../crtoolLocalStorage';

const testToken = 'abcd';
const consoleError = console.error;

beforeEach(() => {
  ls.locationSearch = '';
  global.localStorage.clear();
  ls.localStorage = global.localStorage;
  ls.pushState = jest.fn();
  ls.setHref = jest.fn();
  ls.getHref = () => 'http://example.com/page';
  console.error = jest.fn();
  mock.setup();
  ls.init = jest.fn();
});

afterAll(() => {
  console.error = consoleError;
  mock.teardown();
});

//it('fetchReviewFromServer() with existing record returns object', async () => {
//  const dbReview = {
//    id: testToken,
//    last_updated: 'something',
//    ls_modified_time: new Date().toISOString(),
//    value: 'db',
//  };
//
//  // expect.assertions(2);
//
//  mock.post('/api/user', (req, res) => {
//    expect(req.header('Content-Type')).toEqual('application/json');
//    expect(req.body()).toEqual('{"token":' + testToken + '}');
//    return res.status(201).body(JSON.stringify(dbReview));
//  });
//
//  await ls.init();
//  await ls.fetchReviewFromServer(testToken);
//
//});

it('fetchReviewFromServer() with existing record returns object', async () => {
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db',
  };

  ls.localStorage.setItem('curriculumReviewId', testToken);
  ls.localStorage.setItem('crtool.' + testToken, JSON.stringify({
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'local',
  }));

  mock.post('../get-review/', (req, res) => {
    expect(req.header('Content-Type')).toEqual('application/json');
    expect(req.body()).toEqual('{"token":' + testToken + '}');
    return res.status(201).body(JSON.stringify({}));
  });

  ls.init();
  await ls.fetchReviewFromServer(testToken);

  expect( ls.setHref.mock.calls[0][0] ).toBe( C.START_PAGE_RELATIVE_URL );
});