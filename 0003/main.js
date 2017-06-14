console.log("hello");
var items = [
  {
    title: 'One',
    complete: false
  },
  {
    title: 'Two',
    complete: false
  },
  {
    title: 'Three',
    complete: false
  }
];

var render =  function(){

  var itemEls = [];
  items.forEach(function(item){
    itemEls.push(React.createElement(
      'h2', null, item.title
    ));
  });
  ReactDOM.render(
    React.createElement('div', null, itemEls),
    document.getElementById('root')
  );
}


render();
