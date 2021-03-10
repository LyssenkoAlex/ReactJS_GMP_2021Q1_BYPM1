import React from "react";
import PropTypes from "prop-types";
import ListOfMovies from "./lists/ListOfMovies";
import MovieCounter from "./MovieCounter";

// eslint-disable-next-line react/prop-types
const Main = ({ movieHandler }) => {
  // eslint-disable-next-line react/prop-types
  console.log("props5: ", movieHandler);

  return (
    <main>
      <MovieCounter />
      <section className="movies_wrapper">
        <ListOfMovies movieHandler={movieHandler} />
      </section>
    </main>
  );
};
export default Main;

Main.propTypes = {
  movieHandler: PropTypes.func.isRequired,
};
