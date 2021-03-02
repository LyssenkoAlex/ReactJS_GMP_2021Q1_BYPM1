/* eslint-disable react/button-has-type,jsx-a11y/no-interactive-element-to-noninteractive-role,react/destructuring-assignment,jsx-a11y/aria-role,react/no-unused-state,class-methods-use-this,react/prop-types */
// eslint-disable react/prefer-stateless-function
// eslint-disable no-unused-expressions,react/prop-types
// eslint-disable react/prop-types
// eslint-disable react/require-default-props,react/no-unused-prop-types

import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const AddMovie = (movie) => {
  const title =
    movie.movieToEdit === undefined
      ? 'Please enter title'
      : movie.movieToEdit.title;

  const release_date =
    movie.movieToEdit === undefined
      ? ''
      : movie.movieToEdit.release_date;
  const movie_url =
    movie.movieToEdit === undefined
      ? ''
      : movie.movieToEdit.poster_path;
  const genres =
    movie.movieToEdit === undefined
      ? ''
      : movie.movieToEdit.genres.join();
  const overview =
    movie.movieToEdit === undefined ? '' : movie.movieToEdit.overview;
  const runtime =
    movie.movieToEdit === undefined ? '' : movie.movieToEdit.runtime;

  const handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="modal">
      <span className="close_mark" onClick={movie.onClose}>
        &#10005;
      </span>
      <h3>ADD MOVIE</h3>
      <div className="content">
        <form>
          <section>
            <label htmlFor="title">
              <span>TITLE</span>
              <input
                type="text"
                id="title"
                placeholder="Enter movie title"
                onChange={handleChange}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>RELEASE DATE</span>
              <input
                type="date"
                onChange={handleChange}
                placeholder="dd-mm-yyyy"
                value={release_date}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>MOVIE URL</span>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter movie URL"
                value={movie_url}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>GENRE</span>
              <input
                type="text"
                value={genres}
                onChange={handleChange}
                placeholder="Select genre"
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>OVERVIEW</span>
              <input
                type="text"
                placeholder="Overview here"
                onChange={handleChange}
                value={overview}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>RUNTIME</span>
              <input
                type="text"
                placeholder="Runtime here"
                onChange={handleChange}
                value={runtime}
              />
            </label>
          </section>
        </form>
      </div>
      <button role="reset" onClick={movie.onClose}>
        Reset
      </button>
      <button role="search" onClick={movie.onClose}>
        Submit
      </button>
    </section>
  );
};

export default AddMovie;

AddMovie.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  isShow: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  onClose: PropTypes.func,
};
