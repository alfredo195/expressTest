// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
  
    console.log(newFriend);
  
    newFriend.push(newFriend);
  
    res.json(newFriend);

  });

    app.post("/api/users", function(req, res) {
        var users = req.body;
      
        console.log(users);
      
        users.push(users);
      
        res.json(users);
    
        
      });

