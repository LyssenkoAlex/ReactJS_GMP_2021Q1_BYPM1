/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "./utils/Logo";
import imageNotFound from "../assets/img/image_not_found.jpg";

const MovieDetails = (moviedetails) => {
  const movieYear = new Date(
    moviedetails.moviedetails.moviedetails.release_date
  ).getFullYear();
  const movieDuration = `${moviedetails.moviedetails.moviedetails.runtime} min`;

  const searchIconHandler = () => {
    moviedetails.moviedetails.movieHandler(null);
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
          src={moviedetails.moviedetails.moviedetails.poster_path}
          alt="headline"
          onError={addDefaultSrc}
        />
        <section className="movies_desc">
          <div className="details_title">
            <h3>{moviedetails.moviedetails.moviedetails.title}</h3>
            <div className="vote_average">
              {moviedetails.moviedetails.moviedetails.vote_average}
            </div>
          </div>
          <div className="year_time">
            <h3>{movieYear}</h3>
            <h3>{movieDuration}</h3>
          </div>
          <div className="overview">
            <p>{moviedetails.moviedetails.moviedetails.overview}</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default MovieDetails;
