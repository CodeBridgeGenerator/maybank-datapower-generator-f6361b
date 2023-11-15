const { Jsonweb } = require('./jsonweb.class');
const createModel = require('../../models/jsonweb.model');
const hooks = require('./jsonweb.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/jsonweb', new Jsonweb(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('jsonweb');

  service.hooks(hooks);
};