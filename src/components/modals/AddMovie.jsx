/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role,jsx-a11y/aria-role */
import React, { useState } from "react";
import PropTypes from "prop-types";

const AddMovie = ({ onClose, movie }) => {
  const [values, setValues] = useState({
    title: movie.title === undefined ? "" : movie.title,
    release_date: movie.release_date === undefined ? "" : movie.release_date,
    poster_path: movie.poster_path === undefined ? "" : movie.poster_path,
    genres: movie.genres === undefined ? "" : movie.genres.join(),
    overview: movie.overview === undefined ? "" : movie.overview,
    runtime: movie.runtime === undefined ? "" : movie.runtime,
  });

  const handleChange = (event) => {
    console.log("value: ", values);
    event.preventDefault();
  };

  const set = (name) => ({ target: { value } }) => {
    setValues((oldValues) => ({ ...oldValues, [name]: value }));
  };

  return (
    <section className="modal">
      <span className="close_mark" onClick={onClose}>
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
                onChange={set("title")}
                value={values.title}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>RELEASE DATE</span>
              <input
                type="date"
                onChange={set("release_date")}
                placeholder="dd-mm-yyyy"
                value={values.release_date}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>MOVIE URL</span>
              <input
                type="text"
                onChange={set("poster_path")}
                placeholder="Enter movie URL"
                value={values.poster_path}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>GENRE</span>
              <input
                type="text"
                placeholder="Select genre"
                onChange={set("title")}
                value={values.genres}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>OVERVIEW</span>
              <input
                type="text"
                placeholder="Overview here"
                onChange={set("overview")}
                value={values.overview}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>RUNTIME</span>
              <input
                type="number"
                placeholder="Runtime here"
                onChange={set("runtime")}
                value={values.runtime}
                min="0"
                max="10000"
              />
            </label>
          </section>
          <button role="search" type="button" onClick={onClose}>
            Reset
          </button>
          <button role="reset" type="button" onClick={handleChange}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddMovie;

AddMovie.propTypes = {
  movie: PropTypes.shape({
    isShow: PropTypes.bool,
    release_date: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
  onClose: PropTypes.func.isRequired,
};

AddMovie.defaultProps = {
  movie: {},
};
