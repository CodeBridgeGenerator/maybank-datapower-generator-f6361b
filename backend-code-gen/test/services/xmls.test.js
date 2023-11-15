const assert = require('assert');
const app = require('../../src/app');

describe('\'xmls\' service', () => {
  it('registered the service', () => {
    const service = app.service('xmls');

    assert.ok(service, 'Registered the service (xmls)');
  });
});
