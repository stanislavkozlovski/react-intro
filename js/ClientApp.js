import React from 'react'
import { render } from 'react-dom'  // webpack can eliminate dead code from react-dom
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'  // small library for integrating redux into react

import store from './store.js'
// import Landing from './landing.js'
import AsyncRoute from './asyncRoute.js'
import Search from './search.js'
import Details from './details.js'
import MyTitle from './MyTitle'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'
// var MyTitleFactory = React.createFactory(MyTitle)

const App = React.createClass({
  render: function () {
    /* class == className, since class is a reserved word */
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match
              exactly
              pattern='/'
              component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./landing.js')} />}
            />
            <Match
              pattern='/search'
              component={(props) => {
                return <Search shows={preload.shows} {...props} />  // how you pass components
              }}
            />
            <Match
              pattern='/details/:id'
              component={(props) => {
                var show = preload.shows.filter((show) => show.imdbID === props.params.id)[0]
                // return <Redirect>
                return <Details show={show} {...props} />
              }}
            />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are the best' color='peru' />
        <MyTitle title='semicolons are not the best' color='mediumaquamarine' />
        <MyTitle title='props are the best' color='wheat' />
      </div>
    )
  }
})

// start rendering
render(
  (
  <div>
    <App />
    <MyFirstComponent />
  </div>
  ),
/* tells it where to put it */
  document.getElementById('app')
)
