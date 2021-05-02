/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies } from '../redux/actions/actions';

const MovieCounter = () => {
  const totalAmount = useSelector((state) => state.total_amount);
  const dispatch = useDispatch();
  const [offSetCounter, setOffSetCounter] = useState(0);

  const handlerShowMore = () => {
    setOffSetCounter(offSetCounter + 21);
    dispatch(fetchAllMovies(offSetCounter));
  };
  const handlerShowLess = () => {
    setOffSetCounter(offSetCounter - 21);
    dispatch(fetchAllMovies(offSetCounter));
  };
  const countOfMovies = `${totalAmount} movies were found`;
  return (
    <section className="movie_counter">
      <h3>{countOfMovies}</h3>
      <div>
        <button value="Show more" onClick={handlerShowMore}>
          Show more
        </button>
        <button value="Show more" onClick={handlerShowLess}>
          Show less
        </button>
      </div>
    </section>
  );
};

export default MovieCounter;
