app.get("/", function(req, res) {
    res.send("welcome");
  });

  app.get("/servey", function(req, res) {
    res.send("servey page");
  });

  app.get("/friends", function(req, res) {
    res.send("friends page");
  });

  // Displays all ppl in friends on html
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  // display l=all ppl in database on html
 /*  app.get("/api/all/users", function(req, res) {
    return res.json(users);
  }); */