import React from "react";
import PropTypes from "prop-types";
import ListOfMovies from "./lists/ListOfMovies";
import MovieCounter from "./MovieCounter";

const Main = ({ movieHandler }) => (
  <main>
    <MovieCounter />
    <section className="movies_wrapper">
      <ListOfMovies movieHandler={movieHandler} />
    </section>
  </main>
);
export default Main;

Main.propTypes = {
  movieHandler: PropTypes.func.isRequired,
};
