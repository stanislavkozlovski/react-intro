import { createStore } from 'redux'
import rootReducer from './reducers.js'

const store = createStore(rootReducer)
/* redux middlewares go here */

export default store
