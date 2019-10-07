

var friends = require("../data/friends");


module.exports = function(app){

  app.get("/api/friends", function(req, res){
    res.json(friends);
  });

  app.post("/api/friends", function(req, res){
    var friend = req.body;
    var match;
    var lowestDiff = 100;
    for(var i in friends){
      var diff = 0;
      for(var k in friends[i].score){
        diff += Math.abs(friend.score[k] - friend[i].score[k])
      }
      if(diff < lowestDiff){
        lowestDiff = diff;
        match = friends;
      }
    }
    friends.push(friend);
    res.json(match)
  })

};