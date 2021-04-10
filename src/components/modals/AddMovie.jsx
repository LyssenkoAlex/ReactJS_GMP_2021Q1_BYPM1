// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role,jsx-a11y/aria-role,jsx-a11y/label-has-associated-control,max-len,no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import DropDown from '../utils/DropDown';
import { createMovie, editMovie } from '../../redux/actions/actions';
import ModalWindow from '../utils/ModalWindow';

const AddMovie = ({ onClose, movie, mode }) => {
  const creationStatus = useSelector((state) => state.post_movie_desc);
  const errorBody = useSelector((state) => state.error_body);
  const genreList = useSelector((state) => state.genres);

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

  const saveMovie = (movieToSave) => {
    if (mode !== undefined && mode === 'EDIT') {
      dispatch(editMovie(movieToSave));
    } else {
      delete movieToSave.id;
      dispatch(createMovie(movieToSave));
    }
    handleShowModal();
  };

  const formik = useFormik({
    initialValues: {
      title: movie.title === undefined ? '' : movie.title,
      release_date: movie.release_date === undefined ? '' : movie.release_date,
      poster_path: movie.poster_path === undefined ? '' : movie.poster_path,
      overview: movie.overview === undefined ? '' : movie.overview,
      runtime: movie.runtime === undefined ? '' : movie.runtime,
      id: movie.id === undefined ? '' : movie.id,
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required.'),
      release_date: Yup.date().required('Release date is required.'),
      poster_path: Yup.string().required('Poster path  is required.'),
      overview: Yup.string().min(5, 'Too short!').max(1000, 'Too long').required('Overview path  is required.'),
      runtime: Yup.number().positive().integer('It must be a whole number').required('Runtime is required.'),
    }),
    onSubmit: (values) => {
      values.genres = [...checkedItems.keys()].filter((x) => checkedItems.get(x)).map((x) => x);
      saveMovie(values);
    },
  });

  return (
    <>
      <section className="modal">
        <span className="close_mark" onClick={onClose}>
          &#10005;
        </span>
        <h3>ADD MOVIE</h3>
        <div className="content">
          <form onSubmit={formik.handleSubmit}>
            <section>
              <label htmlFor="title">
                <span>TITLE</span>
                <input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} />
                {formik.errors.title && formik.touched.title && <p>{formik.errors.title}</p>}
              </label>
            </section>
            <section>
              <label htmlFor="release_date">
                <span>Release Date</span>
                <input
                  type="date"
                  name="release_date"
                  value={formik.values.release_date}
                  onChange={formik.handleChange}
                />
                {formik.errors.release_date && formik.touched.release_date && <p>{formik.errors.release_date}</p>}
              </label>
            </section>
            <section>
              <label htmlFor="poster_path">
                <span>Movie URL</span>
                <input
                  type="text"
                  name="poster_path"
                  value={formik.values.poster_path}
                  onChange={formik.handleChange}
                />
                {formik.errors.poster_path && formik.touched.poster_path && <p>{formik.errors.poster_path}</p>}
              </label>
            </section>
            <section className="drop_down_container">
              <label>
                <span>GENRE</span>
              </label>
              <DropDown handleCheckBoxChange={handleCheckBoxChange} checkedItems={checkedItems} />
            </section>
            <section>
              <label htmlFor="overview">
                <span>OVERVIEW</span>
                <input type="text" name="overview" value={formik.values.overview} onChange={formik.handleChange} />
                {formik.errors.overview && formik.touched.overview && <p>{formik.errors.overview}</p>}
              </label>
            </section>
            <section>
              <label htmlFor="runtime">
                <span>RUNTIME</span>
                <input type="number" name="runtime" value={formik.values.runtime} onChange={formik.handleChange} />
                {formik.errors.runtime && formik.touched.runtime && <p>{formik.errors.runtime}</p>}
              </label>
            </section>
            <button type="submit">Submit</button>
            <button type="submit" onClick={onClose}>
              Reset
            </button>
          </form>
        </div>
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
  mode: '',
};
