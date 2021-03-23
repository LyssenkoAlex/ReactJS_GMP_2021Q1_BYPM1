// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role,jsx-a11y/aria-role,jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import DropDown from "../utils/DropDown";
import { createMovie } from "../../redux/actions/actions";

const AddMovie = (movie) => {
  // eslint-disable-next-line no-unused-vars
  const [values, setValues] = useState({
    title: movie.movieToEdit === undefined ? "" : movie.movieToEdit.title,
    release_date: movie.movieToEdit === undefined ? "" : movie.movieToEdit.release_date,
    poster_path: movie.movieToEdit === undefined ? "" : movie.movieToEdit.poster_path,
    genres: movie.movieToEdit === undefined ? "" : movie.movieToEdit.genres.join(),
    overview: movie.movieToEdit === undefined ? "" : movie.movieToEdit.overview,
    runtime: movie.movieToEdit === undefined ? "" : movie.movieToEdit.runtime,
  });
  const dispatch = useDispatch();

  const set = (name) => ({ target: { value } }) => {
    setValues((oldValues) => ({ ...oldValues, [name]: value }));
  };

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckBoxChange = (event) => {
    setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const fields = Object.keys(checkedItems);
    const h = [];
    fields.forEach((x) => {
      if (checkedItems[x]) {
        h.push(x);
      }
    });

    values.genres = h;
    values.runtime = Number.parseInt(values.runtime, 10);
    /*
    axios.post("http://localhost:4000/movies", values)
      .then((res) => {
        console.log("value: ", res);
        console.log("data: ", res.data);
      })
      .catch((error) => {
        console.log("er1: ", error.response.data);
        console.log("er2: ", error.response.status);
        console.log("er3: ", error.response.headers);
      });

    */

    dispatch(createMovie(values));
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
          <section className="drop_down_container">
            <label>
              <span>GENRE</span>
            </label>
            <DropDown handleCheckBoxChange={handleCheckBoxChange} checkedItems={checkedItems} />
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
        </form>
      </div>
      <button role="search" type="button" onClick={movie.onClose}>
        Reset
      </button>
      <button role="reset" type="button" onClick={handleChange}>
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
