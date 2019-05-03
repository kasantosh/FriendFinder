const path = require("path");

var friends = require("../data/Friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var friend = req.body;
    friends.push(friend);
  });
};
