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
});

afterAll(() => {
  console.error = consoleError;
  mock.teardown();
});

it('saveReviewToServer() with existing record returns object', async () => {

  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db',
  };

  ls.review = dbReview;
  const oldDate = ls.review.ls_modified_time;
  ls.review.value2 = 'something else';

  mock.post('../update-review/', (req, res) => {
    expect(req.header('Content-Type')).toEqual('application/json;charset=UTF-8');
    expect(req.body()).toEqual( JSON.stringify( ls.review ));
    return res.status(200).body( JSON.stringify( {
      id: testToken,
      last_updated: 'something',
      ls_modified_time: new Date().toISOString(),
      value: 'db',
      value2: 'something else',
    } ) );
  });


  await ls.saveReviewToServer();
  expect( ls.review.id ).toBe(testToken);
  expect( Date.parse(ls.review.ls_modified_time) ).toBeGreaterThan( Date.parse(oldDate) );
});

