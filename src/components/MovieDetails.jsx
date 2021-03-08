/* eslint-disable quotes */
import React from "react";
import Logo from "./utils/Logo";

const MovieDetails = (moviedetails) => {
  const movieYear = new Date(
    moviedetails.moviedetails.moviedetails.release_date
  ).getFullYear();
  const movieDuration = `${moviedetails.moviedetails.moviedetails.runtime} min`;

  return (
    <section className="movie_details">
      <section className="header">
        <Logo />
        <span>&#x1F50D;</span>
      </section>
      <img
        src={moviedetails.moviedetails.moviedetails.poster_path}
        alt="headline"
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
  );
};

export default MovieDetails;
