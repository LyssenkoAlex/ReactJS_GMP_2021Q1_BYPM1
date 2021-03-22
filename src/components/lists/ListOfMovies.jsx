/* eslint-disable react/jsx-indent,operator-linebreak,indent */
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";
import AddMovie from "../modals/AddMovie";
import DeleteMovie from "../modals/DeleteMovie";
import useLoadMovies from "./UseLoadMovies";

const ListOfMovies = ({ movieHandler }) => {
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
    console.log("editMovie: ", value);
    setMovieToEdit(value);
    setIsShowEdit(!isShowEdit);
  };

  const [images, loading] = useLoadMovies(1);

  const movieCards = images.map((movie) => (
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
      {loading && "Loading..."}
      {movieCards}
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
