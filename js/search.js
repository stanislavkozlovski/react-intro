import React from 'react'

import ShowCard from './showcard.js'
import Header from './header.js'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    /* the handler function whenever the input term changes */
    var changedValue = event.target.value
    this.setState({searchTerm: changedValue})  // changes the searchTerm
  },
  render () {
    return (
      <div className='search'>
        <Header showSearchTerm searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} />
        <div>
          {this.props.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) !== -1
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

export default Search
