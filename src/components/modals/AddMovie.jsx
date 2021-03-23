/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role,jsx-a11y/aria-role */
import React, { useRef } from "react";
import PropTypes from "prop-types";

const AddMovie = ({ onClose, movie }) => {
  const titleRef = useRef(movie.title);
  const releaseDateRef = useRef(movie.release_date);
  const posterPathRef = useRef(movie.poster_path);
  const genresRef = useRef(
    movie.genres === undefined ? "" : movie.genres.join()
  );
  const overviewRef = useRef(movie.overview);
  const runtimeRef = useRef(movie.runtime);

  const handleChange = (event) => {
    console.log("titleRef: ", titleRef.current.value);
    console.log("releaseDateRef: ", releaseDateRef.current.value);
    console.log("posterPathRef: ", posterPathRef.current.value);
    console.log("genresRef: ", genresRef.current.value);
    console.log("overviewRef: ", overviewRef.current.value);
    console.log("runtimeRef: ", runtimeRef.current.value);
    event.preventDefault();
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
                ref={titleRef}
                defaultValue={movie.title}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>RELEASE DATE</span>
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                ref={releaseDateRef}
                defaultValue={movie.release_date}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>MOVIE URL</span>
              <input
                type="text"
                placeholder="Enter movie URL"
                ref={posterPathRef}
                defaultValue={movie.poster_path}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>GENRE</span>
              <input
                type="text"
                placeholder="Select genre"
                ref={genresRef}
                defaultValue={movie.genres}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>OVERVIEW</span>
              <input
                type="text"
                placeholder="Overview here"
                ref={overviewRef}
                defaultValue={movie.overview}
              />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>RUNTIME</span>
              <input
                type="number"
                placeholder="Runtime here"
                ref={runtimeRef}
                defaultValue={movie.runtime}
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
