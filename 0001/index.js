

$(document).ready(function(){
  var $entries = $(".entry");

  var animateSimple = function(){
    console.log('velocity');
    $entries.velocity("callout.bounce", {stagger: 70});
  }
  animateSimple();
  $(document).on('click', function(){
  animateSimple();
  });

});
