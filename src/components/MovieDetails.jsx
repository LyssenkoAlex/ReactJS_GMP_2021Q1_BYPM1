import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "./utils/Logo";
import imageNotFound from "../assets/img/image_not_found.jpg";

const MovieDetails = ({ movieDetails, movieHandler }) => {
  const movieYear = new Date(movieDetails.release_date).getFullYear();
  const movieDuration = `${movieDetails.runtime} min`;

  const searchIconHandler = () => {
    movieHandler(null);
  };

  const addDefaultSrc = (e) => {
    e.target.src = imageNotFound;
  };

  return (
    <section className="movie_wrapper">
      <section className="header">
        <Logo />
        <div onClick={searchIconHandler}>
          <FontAwesomeIcon className="search_icon" icon={faSearch} />
        </div>
      </section>
      <section className="movie_details">
        <img
          src={movieDetails.poster_path}
          alt="headline"
          onError={addDefaultSrc}
        />
        <section className="movies_desc">
          <div className="details_title">
            <h3>{movieDetails.title}</h3>
            <div className="vote_average">{movieDetails.vote_average}</div>
          </div>
          <div className="year_time">
            <h3>{movieYear}</h3>
            <h3>{movieDuration}</h3>
          </div>
          <div className="overview">
            <p>{movieDetails.overview}</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
  }),
  movieHandler: PropTypes.func.isRequired,
};

MovieDetails.defaultProps = {
  movieDetails: null,
};
