var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile("/home.html");
  });

  app.get("/survey", function(req, res) {
    res.sendFile("/survey.html");
  });
};
