/* eslint-disable jsx-a11y/anchor-is-valid,no-undef,react/prop-types,react/destructuring-assignment,class-methods-use-this,no-param-reassign,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,react/sort-comp */
import React from 'react';
import imageNotFound from '../assets/img/image_not_found.jpg';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
    this.handleEditMovie = this.handleEditMovie.bind(this);
  }

  addDefaultSrc(ev) {
    ev.target.src = imageNotFound;
  }

  handleDeleteMovie() {
    this.props.deleteMovie(this.props.movie);
  }

  handleEditMovie() {
    this.props.editMovie(this.props.movie);
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
        <section className="movies_desc">
          <h3>{this.props.movie.title}</h3>
          <h3>{this.props.movie.genres.join()}</h3>
          <h4>{this.props.movie.release_date}</h4>
        </section>

        <div className="dots" key={`dots_${this.props.movie.id}`}>
          <div
            className="overlay"
            key={`overlay_${this.props.movie.id}`}
          >
            <div
              className="popup"
              key={`popup_${this.props.movie.id}`}
            >
              <a
                className="close"
                href="#"
                key={`a_cl_${this.props.movie.id}`}
              >
                <div key={`times_${this.props.movie.id}`}>
                  &times;
                </div>
              </a>
              <h5
                key={`h5_1_${this.props.movie.id}`}
                onClick={this.handleEditMovie}
              >
                Edit
              </h5>
              <h5
                key={`h5_2_${this.props.movie.id}`}
                onClick={this.handleDeleteMovie}
              >
                Delete
              </h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieCard;
