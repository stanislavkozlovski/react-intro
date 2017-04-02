import React from 'react'
import preload from '../public/data.json'

import ShowCard from './showcard.js'
/* .map will iterate through everyone and fill an array of components */
/* preload is the json object, preload.shows is an array */
const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'whatUP'
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
        <header>
          <h1>svideo</h1>
          <input onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type='text' placeholder='Search' />
        </header>
        <div>
          {preload.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) !== -1
            })
            .map((show) => {
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
