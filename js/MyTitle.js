import React from 'react'

var MyTitle = React.createClass({
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

// Type validation for the props
MyTitle.propTypes = {
  color: React.PropTypes.string,
  title: React.PropTypes.string
}

export default MyTitle
