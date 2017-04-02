import React from 'react'
import preload from '../public/data.json'

/* .map will iterate through everyone and fill an array of components */
/* preload is the json object, preload.shows is an array */
const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show) => {
          return (
            <h3>{show.title}</h3>
          )
        })}
      </div>
    )
  }
})

export default Search
