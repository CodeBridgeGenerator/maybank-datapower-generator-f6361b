const { FileOpen } = require('./fileOpen.class');
const createModel = require('../../models/fileOpen.model');
const hooks = require('./fileOpen.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/fileOpen', new FileOpen(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fileOpen');

  service.hooks(hooks);
};