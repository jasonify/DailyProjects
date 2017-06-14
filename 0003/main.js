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

var ItemEl = React.createClass({
  render: function(){
    return React.createElement('p', {className: 'item'}, this.props.title);
  }
});

var render =  function(){
  var itemEls = [];
  items.forEach(function(item){
    itemEls.push(React.createElement(
      ItemEl, item, 
    ));
  });
  ReactDOM.render(
    React.createElement('div', null, itemEls),
    document.getElementById('root')
  );
}


render();
