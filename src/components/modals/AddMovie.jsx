/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role,jsx-a11y/aria-role */
import React, {useState} from "react";
import PropTypes from "prop-types";

const AddMovie = (movie) => {
    // eslint-disable-next-line no-unused-vars
    const [values, setValues] = useState({
        title: movie.movieToEdit === undefined ? "" : movie.movieToEdit.title,
        release_date: movie.movieToEdit === undefined ? "" : movie.movieToEdit.release_date,
        movieUrl: movie.movieToEdit === undefined ? "" : movie.movieToEdit.movieUrl,
        genres: movie.movieToEdit === undefined ? "" : movie.movieToEdit.genres.join(),
        overview: movie.movieToEdit === undefined ? "" : movie.movieToEdit.overview,
        runtime: movie.movieToEdit === undefined ? "" : movie.movieToEdit.runtime
    });

    const set = (name) => {
        return ({target: {value}}) => {
            setValues((oldValues) => ({...oldValues, [name]: value}))
        }
    }


    const handleChange = (event) => {
       console.log('new vals: ', values);

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
                                onChange={set("movieUrl")}
                                placeholder="Enter movie URL"
                                value={values.movieUrl}
                            />
                        </label>
                    </section>
                    <section>
                        <label htmlFor="title">
                            <span>GENRE</span>
                            <input
                                type="text"
                                value={values.genres}
                                onChange={set("genres")}
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
                                onChange={set("overview")}
                                value={values.overview}
                            />
                        </label>
                    </section>
                    <section>
                        <label htmlFor="title">
                            <span>RUNTIME</span>
                            <input
                                type="text"
                                placeholder="Runtime here"
                                onChange={set("runtime")}
                                value={values.runtime}
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
