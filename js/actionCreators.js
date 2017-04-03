import { SET_SEARCH_TERM } from './actions.js'

export function setSearchTerm (searchTerm) {
  return {
    type: SET_SEARCH_TERM, searchTerm: searchTerm /* searchTerm only works too (ES6) */
  }
}
