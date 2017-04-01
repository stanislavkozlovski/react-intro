import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

// var MyTitleFactory = React.createFactory(MyTitle)

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
ReactDOM.render(React.createElement(MyFirstComponent),
/* tells it where to put it */
  document.getElementById('app')
)
