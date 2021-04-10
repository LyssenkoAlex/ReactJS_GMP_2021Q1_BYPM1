import React from 'react';
import { useSelector } from 'react-redux';
import ListOfMovies from './lists/ListOfMovies';

const Main = () => {
  const images = useSelector((state) => state.data);

  return <ListOfMovies data={images} />;
};
export default Main;
