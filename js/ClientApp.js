
// create a component class
var MyTitle = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        React.DOM.h1(
          { style: { color: this.props.color }},
          this.props.title /* the prop we passed to it*/))
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        // create multiple instances of MyTitle, passing the title attribute to it
        MyTitleFactory({ title: 'props are the best', color: 'peru'}),
        MyTitleFactory({ title: 'semicolons are not the best', color: 'mediumaquamarine'}),
        React.createElement(MyTitle, { title: 'props are the best', color: 'wheat'})
      )
    )
  }
})
// start rendering
ReactDOM.render(React.createElement(MyFirstComponent), 
/*tells it where to put it*/
document.getElementById('app'))