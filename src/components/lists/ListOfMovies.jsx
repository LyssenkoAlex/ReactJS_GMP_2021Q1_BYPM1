/* eslint-disable prettier/prettier,react/jsx-indent-props,react/jsx-indent,react/jsx-closing-bracket-location */
import React, { useState, useCallback, useEffect } from 'react';
import movies from '../../data/movies.json';
import MovieCard from '../MovieCard';
import AddMovie from '../modals/AddMovie';
import DeleteMovie from '../modals/DeleteMovie';

const ListOfMovies = (setMovies) => {
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);
  const [movieList, setMovieList] = useState(null);

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

  useEffect(() => {
    setMovieList(movies.slice(0, 21));
  }, []);

  const moviesList =
    movieList === null
      ? null
      : movieList.map((movie) => (
          <MovieCard
            movie={movie}
            onClose={toggleShow}
            deleteMovie={deleteMovie}
            editMovie={editMovie}
            key={movie.id}
            setMovies={setMovies}
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
