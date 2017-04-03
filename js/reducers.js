// reducer is a function which modifies the state
import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions.js'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}
const setSearchTerm = (state, action) => {
  const newState = {}

  // simply copy the things over and override our new state
  Object.assign(newState, state, {searchTerm: action.searchTerm})

  return newState
  // return Object.assign({}, state, {searchTerm: action.searchTerm})
}
const addOMDBData = (state, action) => {
  const newOMDBData = {}
  Object.assign(newOMDBData, state.omdbData, {[action.imdbId]: action.omdbData})
  const newState = {}
  Object.assign(newState, state, {omdbData: newOMDBData})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  // dispatches actions to appropriate reducer
  // usually ends up being a big switch statement
  switch (action.type) {
    case SET_SEARCH_TERM:
      // dispatch to the setSearchTerm reducer
      return setSearchTerm(state, action)

    case ADD_OMDB_DATA:
      return addOMDBData(state, action)

    default:
      return state
  }
}

export default rootReducer
