const assert = require('assert');
const app = require('../../src/app');

describe('\'nameValue\' service', () => {
  it('registered the service', () => {
    const service = app.service('nameValue');

    assert.ok(service, 'Registered the service (nameValue)');
  });
});
