// Auto select first element
var render;


// Writing a simple reducer:
var counterReducer = function(state, action){
  if(state == null){
    state = 0;
  }
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return  state;
  }
}

var store = Redux.createStore(counterReducer);

var ItemEl = React.createClass({
  handleClick: function(){
    this.props.cb();
    render();
  },
  render: function(){
  return React.createElement('h1', {'onClick': this.handleClick}, this.props.title);
  }
});

render =  function(){
  var itemEls = [];
  itemEls.push(React.createElement("div", null,  store.getState()));
  itemEls.push(React.createElement(ItemEl, {'title': '+', cb: function(){
    console.log('increment');
    store.dispatch({'type': 'INCREMENT'});
  }} ))
  ReactDOM.render(
    React.createElement('div', null, itemEls),
    document.getElementById('root')
  );
}

render();
