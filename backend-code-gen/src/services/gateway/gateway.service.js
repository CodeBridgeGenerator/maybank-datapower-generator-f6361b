const { Gateway } = require('./gateway.class');
const createModel = require('../../models/gateway.model');
const hooks = require('./gateway.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/gateway', new Gateway(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('gateway');

  service.hooks(hooks);
};