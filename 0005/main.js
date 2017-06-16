console.log("hello");


var arr = [1,2,3];

var result = _.reduce(arr, function(memo, item){

  return memo + item;
}, 0)
console.log('result', result);

