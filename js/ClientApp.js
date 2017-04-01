import React from 'react'
import { render } from 'react-dom'  // webpack can eliminate dead code from react-dom
import MyTitle from './MyTitle'
import '../public/normalize.css'
import '../public/style.css'
// var MyTitleFactory = React.createFactory(MyTitle)

const App = React.createClass({
  render: function () {
    return (
      /* class == className, since class is a reserved word */
      <div className='app'>
        <div className='landing'>
          <h1>svideo</h1>
          <input type='text' placeholder='Search' />
          <a> or Browse All </a>
        </div>
      </div>
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
