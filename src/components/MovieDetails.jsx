import React from 'react';

const MovieDetails = (moviedetails) => (
  <section className="movie_details">
    <img
      src={moviedetails.moviedetails.moviedetails.poster_path}
      alt="headline"
    />
    <section className="movies_desc">
      <div className="details_title">
        <h3>{moviedetails.moviedetails.moviedetails.title}</h3>
        <h3>{moviedetails.moviedetails.moviedetails.vote_average}</h3>
      </div>
      <div className="year_time">
        <h3>{moviedetails.moviedetails.moviedetails.release_date}</h3>
        <h3>{moviedetails.moviedetails.moviedetails.runtime}</h3>
      </div>
      <div className="overview">
        <p>{moviedetails.moviedetails.moviedetails.overview}</p>
      </div>
    </section>
  </section>
);

export default MovieDetails;
