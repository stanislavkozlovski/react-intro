// higher order component which encapsulates behavior
import React from 'react'
const { object } = React.PropTypes

const AsyncRoute = React.createClass({
  propTypes: {
    props: object,
    loadingPromise: object
  },
  getInitialState () {
    return {
      loaded: false
    }
  },
  componentDidMount () {
    this.props.loadingPromise.then((module) => {
      this.component = module.default
      // we want only loaded to be on the state, since this.component mgiht be big
      this.setState({loaded: true})
    })
  },
  render () {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    } else {
      return <h1>Loading...</h1>
    }
  }
})

export default AsyncRoute
