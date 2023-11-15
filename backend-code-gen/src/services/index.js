const users = require("./users/users.service.js");
const domains = require("./domains/domains.service.js");
const bbrouting = require("./bbrouting/bbrouting.service.js");
const connections = require("./connections/connections.service.js");
const context = require("./context/context.service.js");
const headers = require("./headers/headers.service.js");
const gateway = require("./gateway/gateway.service.js");
const nameValue = require("./nameValue/nameValue.service.js");
const fileOpen = require("./fileOpen/fileOpen.service.js");
const jSON = require("./jSON/jSON.service.js");
const jsonweb = require("./jsonweb/jsonweb.service.js");
const xmls = require("./xmls/xmls.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(domains);
  app.configure(bbrouting);
  app.configure(connections);
  app.configure(context);
  app.configure(headers);
  app.configure(gateway);
  app.configure(nameValue);
  app.configure(fileOpen);
  app.configure(jSON);
  app.configure(jsonweb);
  app.configure(xmls);
    // ~cb-add-configure-service-name~
};
