/* eslint-disable react/jsx-indent,operator-linebreak,indent */
import React, {useState, useCallback, useEffect} from "react";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";
import AddMovie from "../modals/AddMovie";
import DeleteMovie from "../modals/DeleteMovie";

const ListOfMovies = props => {
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);

  console.log('props: ', props)


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

  const movieCards = props.data.map((movie) => (
    <MovieCard
      movie={movie}
      deleteMovie={deleteMovie}
      editMovie={editMovie}
      key={movie.id}
      movieHandler={props.movieHandler}
      onClose={toggleShow}
    />
  ));

  return (
    <>
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
