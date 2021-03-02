/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';

const DeleteMovie = (movie) => {
  const { resetRole } = 'reset';
  const { closeRole } = 'close';
  return (
    <section className="modal">
      <span
        className="close_mark"
        onClick={movie.onClose}
        role={closeRole}
      >
        &#10005;
      </span>
      <h3>DELETE MOVIE</h3>
      <h3>{movie.movieToEdit.title}</h3>

      <div className="content">
        <h3>Are you sure you want to delete this movie?</h3>
      </div>
      <button role={resetRole} type="submit" onClick={movie.onClose}>
        Confirm
      </button>
    </section>
  );
};

export default DeleteMovie;

DeleteMovie.propTypes = {
  movieToEdit: PropTypes.shape({
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
  }).isRequired,
};
