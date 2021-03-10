import React from "react";
import movies from "../data/movies.json";

const MovieCounter = () => (
  <section className="movie_counter">
    <h3>
      {movies.length}
      movies were found
    </h3>
  </section>
);

export default MovieCounter;
