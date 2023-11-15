const assert = require('assert');
const app = require('../../src/app');

describe('\'fileOpen\' service', () => {
  it('registered the service', () => {
    const service = app.service('fileOpen');

    assert.ok(service, 'Registered the service (fileOpen)');
  });
});
