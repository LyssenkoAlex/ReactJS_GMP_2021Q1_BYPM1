/* eslint-disable jsx-a11y/anchor-is-valid,no-undef,react/prop-types,react/destructuring-assignment,class-methods-use-this,no-param-reassign,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
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
          key={`img_${this.props.movie.id}`}
        />

        <a
          href={`#popup_${this.props.movie.id}`}
          key={`ahref_${this.props.movie.id}`}
        >
          <div className="dots" key={`dots_${this.props.movie.id}`} />
        </a>

        <div
          id={`popup_${this.props.movie.id}`}
          className="overlay"
          key={`overlay_${this.props.movie.id}`}
        >
          <div className="popup" key={`popup_${this.props.movie.id}`}>
            <a
              className="close"
              href="#"
              key={`a_cl_${this.props.movie.id}`}
            >
              <div key={`times_${this.props.movie.id}`}>&times;</div>
            </a>
            <h5
              key={`h5_1_${this.props.movie.id}`}
              onClick={this.props.onClose}
            >
              Edit
            </h5>
            <h5
              key={`h5_2_${this.props.movie.id}`}
              onClick={this.props.onDelete}
            >
              Delete
            </h5>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieCard;
