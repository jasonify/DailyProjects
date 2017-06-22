var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;


var angleIncrement = 0.1;
var xIncrement  = 2;
var xPosition = 0.1;
var angle = 0.0;
var xAmplitude = 20;
var render = function(){

  var x = xPosition;
  x = x > width ? 0 : x;
  var y = Math.sin(angle) * 200;
  console.log('y', y);
  // Update our values;
  angle += angleIncrement;
  xPosition +=  xIncrement;

  context.save();
  console.log('width', width, 'height', height);
  context.clearRect(0, 0, width, height);
  // context.fillRect(0, 0,width, height);

  context.translate(x, y + height / 2);
  context.beginPath();
  context.rect(0 , 0, 10, 10);
  // context.fillStyle = "#ACABB3";
  context.fillStyle = "black";
  context.fill();
  context.closePath();
  context.restore();
  setTimeout(function(){
    requestAnimationFrame(render);
  }, 1000/30);
};


render();
