import React from "react";
import PropTypes from "prop-types";

const DeleteMovie = (movie) => (
  <section className="modal">
    <span className="close_mark" onClick={movie.onClose} role="closeRole">
      &#10005;
    </span>
    <h3>DELETE MOVIE</h3>
    <h3>{movie.movieToEdit.title}</h3>

    <div className="content">
      <h3>Are you sure you want to delete this movie?</h3>
    </div>
    <button role="reset" type="submit" onClick={movie.onClose}>
      Confirm
    </button>
  </section>
);

export default DeleteMovie;

DeleteMovie.propTypes = {
  movieToEdit: PropTypes.shape({
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
  }).isRequired,
};
