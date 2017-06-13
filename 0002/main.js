$(document).ready(function(){
  // Els
  var $ideaInputTitle = $("#idea-title");
  var $ideas = $("#ideas"); 
  var $createIdeaButton = $("#create-idea");

  var refreshIdeas = function(){
    $.get("/api/ideas/all", function(data){
      var ideas = data.results;
      console.log("ideas", ideas);
      $ideas.empty();
      _.each(ideas.reverse(), function(idea){
        var $newIdea = $("<div class='idea'>" + idea.title + "</div>");
        $ideas.append($newIdea);
      });
    });
  };

  $createIdeaButton.on('click', function(){
    var ideaTitle = $ideaInputTitle.val();
    console.log("title", ideaTitle);
    $ideaInputTitle.val("");

    // Make ajax requests
    $.get("/api/ideas/create/" + ideaTitle).done(function(){
      refreshIdeas();
    });
  });
  console.log("hello");
  refreshIdeas();
});
