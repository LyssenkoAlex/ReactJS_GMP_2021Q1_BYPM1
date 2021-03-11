/* eslint-disable quotes,react/jsx-indent,operator-linebreak,indent */
import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import movies from "../../data/movies.json";
import MovieCard from "../MovieCard";
import AddMovie from "../modals/AddMovie";
import DeleteMovie from "../modals/DeleteMovie";

const ListOfMovies = ({ movieHandler }) => {
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
            deleteMovie={deleteMovie}
            editMovie={editMovie}
            movieHandler={movieHandler}
            key={movie.id}
            onClose={toggleShow}
          />
        ));

  return (
    <>
      {moviesList}
      {isShowEdit ? (
        <AddMovie onClose={toggleShow} movie={movieToEdit} />
      ) : null}
      {isShowDelete ? (
        <DeleteMovie onClose={toggleShowDelete} movieToEdit={movieToEdit} />
      ) : null}
    </>
  );
};

export default ListOfMovies;

ListOfMovies.propTypes = {
  movieHandler: PropTypes.func.isRequired,
};
