import React from 'react'
import Header from './header.js'

const { shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      description: string,
      year: string,
      poster: string,
      trailer: string
    })
  },
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0;showinfo=0`}
            frameBorder='0'
            allowFullScreen />
        </div>
      </div>
    )
  }
})

// stateless component, nice practice when applicable
// const Details = (props) => {
//   return <h1>{props.params.id}</h1>
// }

export default Details
