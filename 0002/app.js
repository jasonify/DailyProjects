var express = require("express"); 
var app = express();
var path = require("path");

// DB Stuff
var mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/day2_ideas";
var Idea = require('./ideas_model');
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Simple routes, should use middleware...:
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/hello.png", function(req, res){
  res.sendFile(path.join(__dirname + "/hello.png"));
});
app.get("/main.js", function(req, res){
  res.sendFile(path.join(__dirname + "/main.js"));
});

// Api routes:
app.get("/api/ideas/create/:title", function(req, res){
  var lilIdea = new Idea();
  lilIdea.title = req.params.title;
  // if error?
  lilIdea.save(function(){
    res.json({created: lilIdea.title});
  });
});

app.get("/create-ideas", function(req, res){
  var lilIdea = new Idea();
  lilIdea.title = "Some idea";
  lilIdea.save(function(){
    res.send("Created...");
  });
});

app.get("/api/ideas/all", function(req, res){
  var ideas = Idea.find({}, function(error, ideas){
   res.json({
    results: ideas
   });
  });
});

// External routes
var ideaRoutes = require("./ideas");
app.use("/ideas", ideaRoutes);

app.listen(3000, function(){
  console.log("Started server on port 3000");
});
