import React from 'react';
import ListOfMovies from './lists/ListOfMovies';
import MovieCounter from './MovieCounter';

const Main = (setMovie) => (
  <main>
    <MovieCounter />
    <section className="movies_wrapper">
      <ListOfMovies setMovie={setMovie} />
    </section>
  </main>
);
export default Main;
