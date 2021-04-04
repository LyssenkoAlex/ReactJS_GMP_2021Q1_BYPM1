import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Logo from "./utils/Logo";
import imageNotFound from "../assets/img/image_not_found.jpg";
import Navigation from "./Navigation";
import ListOfMovies from "./lists/ListOfMovies";

const MovieDetails = () => {
  const location = useLocation();
  const selectedMovie = location.movie;
  const movieYear = new Date(selectedMovie.release_date).getFullYear();
  const movieDuration = `${selectedMovie.runtime} min`;
  const images = useSelector((state) => state.data);

  const addDefaultSrc = (e) => {
    e.target.src = imageNotFound;
  };

  return (
    <>
      <section className="movie_wrapper">
        <section className="header">
          <Logo />
          <Link to="/">
            <FontAwesomeIcon className="search_icon" icon={faSearch} />
          </Link>
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

