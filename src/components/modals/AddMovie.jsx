// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role,jsx-a11y/aria-role,jsx-a11y/label-has-associated-control,max-len */
import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../utils/DropDown";
import { createMovie, editMovie } from "../../redux/actions/actions";
import ModalWindow from "../utils/ModalWindow";

const AddMovie = ({ onClose, movie, mode }) => {
  // eslint-disable-next-line no-unused-vars

  const creationStatus = useSelector((state) => state.post_movie_desc);
  const errorBody = useSelector((state) => state.error_body);
  const genreList = useSelector((state) => state.genres);

  const titleRef = useRef(movie.title);
  const releaseDateRef = useRef(movie.release_date);
  const posterPathRef = useRef(movie.poster_path);
  const overviewRef = useRef(movie.overview);
  const runtimeRef = useRef(movie.runtime);

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const [checkedItems, setCheckedItems] = useState(new Map());

  useEffect(() => {

    setCheckedItems(() => {
      const newState = new Map();
      genreList.forEach((x) => {
        newState.set(x, movie.genres !== undefined ? movie.genres.includes(x) : false);
      });
      return newState;
    });
  }, []);

  const handleCheckBoxChange = (event) => {
    setCheckedItems((prev) => new Map(prev).set(event.target.name, !prev.get(event.target.name)));
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (event) => {
    event.preventDefault();

    const movieToSave = {
      id: movie.id,
      title: titleRef.current.value,
      release_date: releaseDateRef.current.value,
      poster_path: posterPathRef.current.value,
      overview: overviewRef.current.value,
      runtime: Number.parseInt(runtimeRef.current.value, 10),
      genres: [...checkedItems.keys()].filter((x) => checkedItems.get(x)).map((x) => x),
    };

    if (mode !== undefined && mode === "EDIT") {
      dispatch(editMovie(movieToSave));
    } else {
      dispatch(createMovie(movieToSave));
    }
    handleShowModal();
  };

  return (
    <>
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
            <section className="drop_down_container">
              <label>
                <span>GENRE</span>
              </label>
              <DropDown
                handleCheckBoxChange={handleCheckBoxChange}
                checkedItems={checkedItems}
              />
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
          </form>
        </div>
        <button role="search" type="button" onClick={onClose}>
          Reset
        </button>
        <button role="reset" type="button" onClick={handleChange}>
          Submit
        </button>
      </section>
      <ModalWindow
        title="Movie creation result:"
        actionStatus={creationStatus}
        errorDesc={errorBody}
        handleShowModal={handleShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default AddMovie;

AddMovie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    isShow: PropTypes.bool,
    release_date: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
  onClose: PropTypes.func.isRequired,
  mode: PropTypes.string,
};

AddMovie.defaultProps = {
  movie: {},
  mode: "",
};
