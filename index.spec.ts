import { success, failure } from './index';

test('success with payload', () => {

  const payload = { payload: 1 };
  const result = success(payload);

  expect(result.success).toBe(true);
  expect(result.payload).toEqual(payload);

});

test('failure with message', () => {

  const message = {error: 'error'};
  const result = failure(message);

  expect(result.success).toBe(false);
  expect(result.message).toEqual(message);
  
});