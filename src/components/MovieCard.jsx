/* eslint-disable jsx-a11y/anchor-is-valid,no-undef,react/prop-types,react/destructuring-assignment,class-methods-use-this,no-param-reassign */
import React from 'react';
import imageNotFound from '../assets/img/image_not_found.jpg';

class MovieCard extends React.Component {
  addDefaultSrc(ev) {
    ev.target.src = imageNotFound;
  }

  render() {
    return (
      <section
        className="movie_container"
        key={`poster_${this.props.movie.id}`}
      >
        <img
          onError={this.addDefaultSrc}
          src={this.props.movie.poster_path}
          alt="headline"
        />

        <a href={`#popup_${this.props.movie.id}`}>
          <div className="dots" />
        </a>

        <div id={`popup_${this.props.movie.id}`} className="overlay">
          <div className="popup">
            <a className="close" href="#">
              <div>&times;</div>
            </a>
            <h5>Edit</h5>
            <h5>Delete</h5>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieCard;
