import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../../redux/actions/actions";
import ModalWindow from "../utils/ModalWindow";

const DeleteMovie = ({ onClose, movieToEdit }) => {
  const dispatch = useDispatch();
  const creationStatus = useSelector((state) => state.post_movie_desc);
  const errorBody = useSelector((state) => state.error_body);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const deleteMovieHandler = () => {
    dispatch(deleteMovie(movieToEdit));
    setShowModal(!showModal);
  };

  return (
    <>
      <section className="modal">
        <span className="close_mark" onClick={onClose} role="closeRole">
          &#10005;
        </span>
        <h3>DELETE MOVIE</h3>
        <h3>{movieToEdit.title}</h3>

        <div className="content">
          <h3>Are you sure you want to delete this movie?</h3>
        </div>
        <button role="reset" type="submit" onClick={deleteMovieHandler}>
          Confirm
        </button>
      </section>
      <ModalWindow
        title="Movie delete result:"
        actionStatus={creationStatus}
        errorDesc={errorBody}
        handleShowModal={handleShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default DeleteMovie;

DeleteMovie.propTypes = {
  onClose: PropTypes.func.isRequired,

  movieToEdit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
};
