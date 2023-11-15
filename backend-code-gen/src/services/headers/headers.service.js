const { Headers } = require('./headers.class');
const createModel = require('../../models/headers.model');
const hooks = require('./headers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/headers', new Headers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('headers');

  service.hooks(hooks);
};