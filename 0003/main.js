console.log("hello");
var items = [
  {
    title: 'One',
    color: 'blue',
    complete: false
  },
  {
    title: 'Two',
    color: 'red',
    complete: false
  },
  {
    title: 'Three',
    color: 'green',
    complete: false
  }
];

// Auto select first element
var  selectedEl = items[0].title;

var render;
var ItemEl = React.createClass({
  handleClick: function(){
    console.log("this", this);
    selectedEl = this.props.title;
    render();

  },
  render: function(){
    return React.createElement('p', {className: 'item', onClick: this.handleClick}, this.props.title);
  }
});

render =  function(){
  var itemEls = [];
  itemEls.push(React.createElement('h1', null, selectedEl));
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
