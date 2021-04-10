/* eslint-disable react/jsx-indent,operator-linebreak,indent */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import AddMovie from '../modals/AddMovie';
import DeleteMovie from '../modals/DeleteMovie';
import MovieCounter from '../MovieCounter';

const ListOfMovies = ({ data }) => {
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);
  const toggleShow = useCallback(() => {
    setIsShowEdit(!isShowEdit);
  }, [isShowEdit]);

  const toggleShowDelete = useCallback(() => {
    setIsShowDelete(!isShowDelete);
  }, [isShowDelete]);

  const deleteMovie = (value) => {
    setMovieToEdit(value);
    setIsShowDelete(!isShowDelete);
  };

  const editMovie = (value) => {
    setMovieToEdit(value);
    setIsShowEdit(!isShowEdit);
  };

  const movieCards = data.map((movie) => (
    <MovieCard movie={movie} deleteMovie={deleteMovie} editMovie={editMovie} key={movie.id} onClose={toggleShow} />
  ));

  return (
    <>
      <main>
        <MovieCounter />
        <section className="movies_wrapper">{movieCards}</section>
      </main>
      {isShowEdit ? <AddMovie onClose={toggleShow} movie={movieToEdit} mode="EDIT" /> : null}
      {isShowDelete ? <DeleteMovie onClose={toggleShowDelete} movieToEdit={movieToEdit} /> : null}
    </>
  );
};

export default ListOfMovies;

ListOfMovies.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      release_date: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ).isRequired,
};
