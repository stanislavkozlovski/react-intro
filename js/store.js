import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers.js'

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    // run dev tools in browser if available
    // essentially a middleware
    (typeof window === 'object'  /* we're in the browser */ && typeof window.devToolsExtension !== 'undefined')
     ? window.devToolsExtension() : (f) => f
))
/* redux middlewares go here */

export default store
