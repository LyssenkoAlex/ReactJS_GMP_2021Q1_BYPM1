import React from 'react';
import PropTypes from 'prop-types';
import imageNotFound from '../assets/img/image_not_found.jpg';

const MovieCard = (
    movie,
  onClose,
  deleteMovie,
  editMovie
) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = imageNotFound;
  };

  const handleDeleteMovie = () => {
    deleteMovie(movie.movie);
  };

  const handleEditMovie = () => {
    editMovie(movie.movie);
  };

  console.log('mov: ', movie);

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
          <h4>
            {new Date(
                movie.movie.release_date
            ).getFullYear()}
          </h4>
        </section>
      </section>

      <div className="dots">
        <div className="overlay">
          <div className="popup">
            <a className="close" href="#">
              <div>&times;</div>
            </a>
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
  deleteMovie: PropTypes.func,
  editMovie: PropTypes.func,
};

MovieCard.defaultProps = {
  movie: null,
  deleteMovie: null,
  editMovie: null,
};
