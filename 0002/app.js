var express = require("express"); 
var app = express();
var path = require("path");

// DB Stuff
var mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/day2_ideas";
var Schema = mongoose.Schema;

var IdeaSchema = Schema( {
  title: {type: String, required: true}
});

var Idea = mongoose.model('Idea', IdeaSchema);
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Simple routes:
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "/index.html"));
});



app.get("/main.js", function(req, res){
  res.sendFile(path.join(__dirname + "/main.js"));
});



app.get("/create-idea/:title", function(req, res){
  var lilIdea = new Idea();
  lilIdea.title = req.params.title;
  lilIdea.save(function(){
    res.send("Created...");
  });
});

app.get("/create-ideas", function(req, res){
  var lilIdea = new Idea();
  lilIdea.title = "Some idea";
  lilIdea.save(function(){
    res.send("Created...");
  });
});

app.get("/all-ideas", function(req, res){
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



