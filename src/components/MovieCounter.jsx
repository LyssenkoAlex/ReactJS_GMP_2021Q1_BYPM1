import React from 'react';
import { useSelector } from 'react-redux';

const MovieCounter = () => {
  const totalAmount = useSelector((state) => state.total_amount);
  const countOfMovies = `${totalAmount} movies were found`;
  return (
    <section className="movie_counter">
      <h3>{countOfMovies}</h3>
    </section>
  );
};

export default MovieCounter;
