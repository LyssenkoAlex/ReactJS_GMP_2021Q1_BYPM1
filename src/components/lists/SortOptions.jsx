/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { useDispatch } from 'react-redux';
import { sortMovies } from '../../redux/actions/actions';

const SORT_OPTIONS = ['genre', 'rating', 'release date'];

const SortOptions = () => {
  const dispatch = useDispatch();

  const handleSortOptions = (sort) => {
    dispatch(sortMovies(sort));
  };

  const sortList = SORT_OPTIONS.map((option) => (
    <option key={`option_${option}`} value={option}>
      {option}
    </option>
  ));

  return (
    <select className="select-css" onChange={(e) => handleSortOptions(e.target.value)}>
      {sortList}
    </select>
  );
};

export default SortOptions;
