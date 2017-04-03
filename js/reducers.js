import { SET_SEARCH_TERM } from './actions.js'

const DEFAULT_STATE = {
  searchTerm: ''
}

const setSearchTerm = (state, action) => {
  const newState = {}

  // simply copy the things over and override our new state
  Object.assign(newState, state, {searchTerm: action.searchTerm})

  return newState
  // return Object.assign({}, state, {searchTerm: action.searchTerm})
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  // dispatches actions to appropriate reducer
  // usually ends up being a big switch statement
  switch (action.type) {
    case SET_SEARCH_TERM:
      // dispatch to the setSearchTerm reducer
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
