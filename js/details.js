import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <pre><code>
        {JSON.stringify(this.props, null, 4)}
      </code></pre>
    )
  }
})

// stateless component, nice practice when applicable
// const Details = (props) => {
//   return <h1>{props.params.id}</h1>
// }

export default Details
