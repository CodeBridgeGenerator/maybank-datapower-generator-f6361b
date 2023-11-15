const assert = require('assert');
const app = require('../../src/app');

describe('\'context\' service', () => {
  it('registered the service', () => {
    const service = app.service('context');

    assert.ok(service, 'Registered the service (context)');
  });
});
