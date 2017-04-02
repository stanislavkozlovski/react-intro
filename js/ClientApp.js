import React from 'react'
import { render } from 'react-dom'  // webpack can eliminate dead code from react-dom
import { BrowserRouter, Match } from 'react-router'

import Landing from './landing.js'
import Search from './search.js'
import MyTitle from './MyTitle'
import '../public/normalize.css'
import '../public/style.css'
// var MyTitleFactory = React.createFactory(MyTitle)

const App = React.createClass({
  render: function () {
    /* class == className, since class is a reserved word */
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
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
