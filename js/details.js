import React from 'react'

import { connect } from 'react-redux'
import { getOMDBDetails } from './actionCreators.js'
import Header from './header.js'

const { func, shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      description: string,
      year: string,
      poster: string,
      trailer: string,
      imdbID: string
    }),
    omdbData: shape({
      imdbII: string
    }),
    dispatch: func
  },
  componentDidMount () {
    if (!this.props.omdbData.imdbRating) {
      // AJAX only when neeed
      this.props.dispatch(getOMDBDetails(this.props.show.imdbID))
    }
  },
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    let rating
    if (this.props.omdbData.imdbRating) {
      // if the API call has loaded
      rating = <h3>{this.props.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading indicaton' />
    }
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
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

const mapStateToProps = (state, ownProps/* props for the react component */) => {
  const omdbData = state.omdbData[ownProps.show.imdbID] ? state.omdbData[ownProps.show.imdbID] : {}

  return {
    omdbData: omdbData
  }
}

export default connect(mapStateToProps)(Details)
