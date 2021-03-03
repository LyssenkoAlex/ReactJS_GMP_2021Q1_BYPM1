/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import imageNotFound from '../assets/img/image_not_found.jpg';

const MovieCard = (movie) => {
  const addDefaultSrc = (e) => {
    e.target.src = imageNotFound;
  };

  const handleDeleteMovie = () => {
    movie.deleteMovie(movie.movie);
  };

  const handleEditMovie = () => {
    movie.editMovie(movie.movie);
  };

  return (
    <section className="movie_container">
      <img
        onError={addDefaultSrc}
        src={movie.movie.poster_path}
        alt="headline"
      />
      <section className="movies_desc">
        <h3>{movie.movie.title}</h3>
        <section className="second_line">
          <h3>{movie.movie.genres.join(', ')}</h3>
          <h4>{new Date(movie.movie.release_date).getFullYear()}</h4>
        </section>
      </section>

      <div className="dots">
        <div className="overlay">
          <div className="popup">
            <span className="close">
              <div>&times;</div>
            </span>
            <h5 onClick={handleEditMovie}>Edit</h5>
            <h5 onClick={handleDeleteMovie}>Delete</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: null,
};
