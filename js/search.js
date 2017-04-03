import React from 'react'
import { connect } from 'react-redux'

import ShowCard from './showcard.js'
import Header from './header.js'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string,
      searchTerm: string
    }))
  },
  render () {
    return (
      <div className='search'>
        <Header showSearchTerm />
        <div>
          {this.props.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase()
                .indexOf(this.props.searchTerm.toUpperCase()) !== -1
            })
            .map((show) => {
              /* .map will iterate through everyone and fill an array of components */
              return (
                <ShowCard key={show.imdbID}/* unique ID per object so that in re-arranging cards it does not load them again, just change their position */
                  {...show} />
              )
            })}
        </div>
      </div>
    )
  }
  /* to avoid adding all attributes in a show object, you could give them separately as
    poster={show.poster}, title={show.title}
    A better way to do that is use specific JSX operator '...' to show, which does the
    same thing under the hood, so {...show} */
})

const mapStateToProps = (state) => {
  // transfer state to props
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
