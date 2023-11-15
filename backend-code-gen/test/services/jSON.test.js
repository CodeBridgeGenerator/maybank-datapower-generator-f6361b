const assert = require('assert');
const app = require('../../src/app');

describe('\'jSON\' service', () => {
  it('registered the service', () => {
    const service = app.service('jSON');

    assert.ok(service, 'Registered the service (jSON)');
  });
});
