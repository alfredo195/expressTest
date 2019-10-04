var path = require("path");


module.exports = function(app){

  app.get("/servey", function (req, res){
    res.sendFile(path.json(__dirname, "../public/servey.html"));
  });

  app.get("/friends", function (req, res){
    res.sendFile(path.json(__dirname, "../public/friends.html"));
  });

  app.get("/home", function (req, res){
    res.sendFile(path.json(__dirname, "../public/index.html"));
  });

}