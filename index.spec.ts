import {success, failure} from './index';

test('success with payload', () => {
    var payload = {payload: 1};
    var result = success(payload);

    expect(result.success).toBe(true);
    expect(result.payload).toEqual(payload);
});

test('failure with message', () => {
    var message = {error: 'error'};
    var result = failure(message);

    expect(result.success).toBe(false);
    expect(result.message).toEqual(message);
});