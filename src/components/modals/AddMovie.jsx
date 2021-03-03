/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddMovie = (movie) => {
  const { roleReset } = 'reset';
  const { roleSearch } = 'search';

  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);
  const title =
    movie.movieToEdit === undefined
      ? 'Please enter title'
      : movie.movieToEdit.title;

  const releaseDate =
    movie.movieToEdit === undefined
      ? ''
      : movie.movieToEdit.release_date;
  const movieUrl =
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
    setValue(event.target.value);
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
                value={title}
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
                value={releaseDate}
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
                value={movieUrl}
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
      <button role={roleReset} type="button" onClick={movie.onClose}>
        Reset
      </button>
      <button role={roleSearch} type="button" onClick={movie.onClose}>
        Submit
      </button>
    </section>
  );
};

export default AddMovie;

AddMovie.propTypes = {
  movie: PropTypes.shape({
    isShow: PropTypes.bool,
    onClose: PropTypes.func,
  }),
};

AddMovie.defaultProps = {
  movie: {},
};
