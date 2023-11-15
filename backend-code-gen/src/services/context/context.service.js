const { Context } = require('./context.class');
const createModel = require('../../models/context.model');
const hooks = require('./context.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/context', new Context(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('context');

  service.hooks(hooks);
};