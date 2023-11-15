const { Xmls } = require('./xmls.class');
const createModel = require('../../models/xmls.model');
const hooks = require('./xmls.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/xmls', new Xmls(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('xmls');

  service.hooks(hooks);
};