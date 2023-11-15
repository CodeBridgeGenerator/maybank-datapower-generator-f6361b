const { NameValue } = require('./nameValue.class');
const createModel = require('../../models/nameValue.model');
const hooks = require('./nameValue.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/nameValue', new NameValue(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('nameValue');

  service.hooks(hooks);
};