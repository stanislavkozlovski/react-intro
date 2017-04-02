import React from 'react'
import preload from '../public/data.json'

import ShowCard from './showcard.js'
/* .map will iterate through everyone and fill an array of components */
/* preload is the json object, preload.shows is an array */
const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show) => {
          return (
            <ShowCard key={show.imdbID}/* unique ID per object so that in re-arranging cards it does not load them again, just change their position */
              show={show} />
          )
        })}
      </div>
    )
  }
})

export default Search
