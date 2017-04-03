import axios from 'axios'  // AJAX client

import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions.js'


export function setSearchTerm (searchTerm) {
  return {
    type: SET_SEARCH_TERM, searchTerm: searchTerm /* searchTerm only works too (ES6) */
  }
}

export function addOMDBData (imdbID, omdbData) {
  return {
    type: ADD_OMDB_DATA,
    imdbID: imdbID,
    omdbData: omdbData
  }
}

export function getOMDBDetails (imdbID) { // thunk creator
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then((response) => {  // you need arrow function here for "this" to work, because we're not creating new context, otherwise we'd need to .bind(this)
        let data = addOMDBData(imdbID, response.data)
        dispatch(data)
      })
      .catch((error) => console.error('axios error', error))
  }
}
