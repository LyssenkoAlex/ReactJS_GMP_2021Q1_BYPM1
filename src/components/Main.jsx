/* eslint-disable import/no-unresolved,react/jsx-one-expression-per-line */
import React from 'react';
import ListOfMovies from './lists/ListOfMovies';
import movies from '../data/movies.json';

const Main = () => (
  <main>
    <section className="movie_counter">
      <h3>{movies.length} movies were found</h3>
    </section>
    <section className="movies_wrapper">
      <ListOfMovies />
    </section>
  </main>
);
export default Main;
