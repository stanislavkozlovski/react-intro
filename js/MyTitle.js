import React from 'react'

const { string } = React.PropTypes

var MyTitle = React.createClass({
  propTypes: {
    color: string,
    title: string
  },
  render: function () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle
