import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import imageNotFound from '../assets/img/image_not_found.jpg';
import { MOVIE_DETAILS_PAGE } from './utils/ROUTES';
import { setSelectedMovie } from '../redux/actions/actions';

const MovieCard = ({ movie, deleteMovie, editMovie }) => {
  const dispatch = useDispatch();

  const addDefaultSrc = (e) => {
    e.target.src = imageNotFound;
  };

  const handleDeleteMovie = () => {
    deleteMovie(movie);
  };

  const handleEditMovie = () => {
    editMovie(movie);
  };

  const imgHandler = () => {
    dispatch(setSelectedMovie(movie));
  };

  return (
    <section className="movie_container">
      <Link to={{ pathname: `${MOVIE_DETAILS_PAGE.path}/${movie.id}`, movie }}>
        <img onError={addDefaultSrc} src={movie.poster_path} alt="headline" onClick={imgHandler} />
      </Link>
      <section className="movies_desc">
        <h3>{movie.title}</h3>
        <section className="second_line">
          <h3>{movie.genres.join(', ')}</h3>
          <h4>{new Date(movie.release_date).getFullYear()}</h4>
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
  deleteMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  movie: null,
};
