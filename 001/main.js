var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var render = function(){

  context.rect(0, 0, width, height);
  context.fillStyle = "#ACABB3";
  context.fill();
};


render();
