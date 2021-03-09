import React from 'react';
import PropTypes from 'prop-types';
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
      <section className="movie_container">
        <img
          onError={this.addDefaultSrc}
          src={this.props.movie.poster_path}
          alt="headline"
        />
        <section className="movies_desc">
          <h3>{this.props.movie.title}</h3>
          <section className="second_line">
            <h3>{this.props.movie.genres.join(', ')}</h3>
            <h4>
              {new Date(this.props.movie.release_date).getFullYear()}
            </h4>
          </section>
        </section>

        <div className="dots">
          <div className="overlay">
            <div className="popup">
              <a className="close" href="#">
                <div>&times;</div>
              </a>
              <h5 onClick={this.handleEditMovie}>Edit</h5>
              <h5 onClick={this.handleDeleteMovie}>Delete</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: null,
};
