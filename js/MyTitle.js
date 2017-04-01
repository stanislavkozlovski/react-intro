import React from 'react'


var MyTitle = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        React.DOM.h1(
          {style: { color: this.props.color }},
          this.props.title /* the prop we passed to it */))
    )
  }
})

export default MyTitle
