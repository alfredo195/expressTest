app.get("/api/friends/:friends", function(req, res) {
    var chosen = req.params.friends;
  
    console.log(chosen);
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    //return res.send("No character found");
  
  });

   //display the ppl on the wait list
   app.get("/api/users/:users", function(req, res) {
    var chosen = req.params.users;
  
    console.log(chosen);
  
    for (var i = 0; i < users.length; i++) {
      if (chosen === users[i].routeName) {
        return res.json(users[i]);
      }
    }
  
  });