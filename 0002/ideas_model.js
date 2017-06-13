var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var IdeaSchema = Schema( {
  title: {type: String, required: true}
});

var Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;
