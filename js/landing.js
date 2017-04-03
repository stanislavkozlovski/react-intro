/* the landing page of our app */
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { setSearchTerm } from './actionCreators.js'
const { func, string, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispath: func
  },
  handleSearchTermChange (event) {
    let srchTrmResults = setSearchTerm(event.target.value)
    this.props.dispatch(srchTrmResults)
  },
  handleSearchSubmit (event) {
    // enters on input Enter pressed
    event.preventDefault()
    this.context.router.transitionTo('/search')  // the way you route programatically
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input type='text' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTermChange} />
          <Link to='/search'> or Browse All </Link>
        </form>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  /* takes in entire redux store and returns an object of the particular piece of state that this component cares about */
  // basically takes the state and passes it to Landing
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
