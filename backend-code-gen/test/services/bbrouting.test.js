const assert = require('assert');
const app = require('../../src/app');

describe('\'bbrouting\' service', () => {
  it('registered the service', () => {
    const service = app.service('bbrouting');

    assert.ok(service, 'Registered the service (bbrouting)');
  });
});
