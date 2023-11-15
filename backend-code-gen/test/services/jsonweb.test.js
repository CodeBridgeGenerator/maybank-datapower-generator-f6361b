const assert = require('assert');
const app = require('../../src/app');

describe('\'jsonweb\' service', () => {
  it('registered the service', () => {
    const service = app.service('jsonweb');

    assert.ok(service, 'Registered the service (jsonweb)');
  });
});
