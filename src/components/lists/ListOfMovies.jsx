import React, { useState } from 'react';
import movies from '../../data/movies.json';
import MovieCard from '../MovieCard';
import AddMovie from '../modals/AddMovie';
import DeleteMovie from '../modals/DeleteMovie';

const ListOfMovies = () => {
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);

  const toggleShow = () => {
    setIsShowEdit(!isShowEdit);
  };

  const toggleShowDelete = () => {
    setIsShowDelete(!isShowDelete);
  };

  const deleteMovie = (value) => {
    setMovieToEdit(value);
    setIsShowDelete(!isShowDelete);
  };

  const editMovie = (value) => {
    setMovieToEdit(value);
    setIsShowEdit(!isShowEdit);
  };

  // eslint-disable-next-line class-methods-use-this

  const moviesList = movies
    .slice(0, 21)
    .map((movie) => (
      <MovieCard
        movie={movie}
        onClose={toggleShow}
        deleteMovie={deleteMovie}
        editMovie={editMovie}
        key={movie.id}
      />
    ));

  return (
    <>
      {moviesList}
      {isShowEdit ? (
        <AddMovie onClose={toggleShow} movie={movieToEdit} />
      ) : null}
      {isShowDelete ? (
        <DeleteMovie
          onClose={toggleShowDelete}
          movieToEdit={movieToEdit}
        />
      ) : null}
    </>
  );
};

export default ListOfMovies;
