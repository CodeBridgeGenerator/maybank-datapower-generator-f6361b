const { JSON } = require('./jSON.class');
const createModel = require('../../models/jSON.model');
const hooks = require('./jSON.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/jSON', new JSON(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('jSON');

  service.hooks(hooks);
};