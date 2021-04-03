import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Logo from "./utils/Logo";
import imageNotFound from "../assets/img/image_not_found.jpg";
import Navigation from "./Navigation";
import MovieCounter from "./MovieCounter";
import ListOfMovies from "./lists/ListOfMovies";
import ErrorBoundary from "./error/ErrorBoundary";
import Footer from "./Footer";

const MovieDetails = ({ movieHandler }) => {
  const selectedMovie = useSelector((state) => state.selected_movie);
  const movieYear = new Date(selectedMovie.release_date).getFullYear();
  const movieDuration = `${selectedMovie.runtime} min`;
  const images = useSelector((state) => state.data);

  const searchIconHandler = () => {
    movieHandler(null);
  };

  const addDefaultSrc = (e) => {
    e.target.src = imageNotFound;
  };

  return (
    <>
      <section className="movie_wrapper">
        <section className="header">
          <Logo />
          <div onClick={searchIconHandler}>
            <FontAwesomeIcon className="search_icon" icon={faSearch} />
          </div>
        </section>
        <section className="movie_details">
          <img
            src={selectedMovie.poster_path}
            alt="headline"
            onError={addDefaultSrc}
          />
          <section className="movies_desc">
            <div className="details_title">
              <h3>{selectedMovie.title}</h3>
              <div className="vote_average">{selectedMovie.vote_average}</div>
            </div>
            <div className="year_time">
              <h3>{movieYear}</h3>
              <h3>{movieDuration}</h3>
            </div>
            <div className="overview">
              <p>{selectedMovie.overview}</p>
            </div>
          </section>
        </section>
      </section>
      <Navigation />
      <ListOfMovies data={images} />
    </>
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
