const assert = require('assert');
const app = require('../../src/app');

describe('\'headers\' service', () => {
  it('registered the service', () => {
    const service = app.service('headers');

    assert.ok(service, 'Registered the service (headers)');
  });
});
