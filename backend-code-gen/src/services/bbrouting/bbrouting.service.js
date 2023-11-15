const { Bbrouting } = require('./bbrouting.class');
const createModel = require('../../models/bbrouting.model');
const hooks = require('./bbrouting.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/bbrouting', new Bbrouting(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bbrouting');

  service.hooks(hooks);
};