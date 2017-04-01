

// create a component class
var MyTitle = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        React.DOM.h1(null, 'check this out bitches'))
    )
  }
})

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
      // create multiple instances of MyTitle
        React.createElement(MyTitle),
        React.createElement(MyTitle),
        React.createElement(MyTitle)
      )
    )
  }
})
// start rendering
ReactDOM.render(React.createElement(MyFirstComponent), 
/*tells it where to put it*/
document.getElementById('app'))