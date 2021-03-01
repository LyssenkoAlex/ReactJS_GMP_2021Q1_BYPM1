/* eslint-disable react/button-has-type,jsx-a11y/no-interactive-element-to-noninteractive-role,react/destructuring-assignment,jsx-a11y/aria-role,react/no-unused-state,class-methods-use-this,react/prop-types */
// eslint-disable react/prefer-stateless-function
// eslint-disable no-unused-expressions,react/prop-types
// eslint-disable react/prop-types
// eslint-disable react/require-default-props,react/no-unused-prop-types

import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:
        this.props.movieToEdit === undefined
          ? 'Please enter title'
          : this.props.movieToEdit.title,
      release_date:
        this.props.movieToEdit === undefined
          ? ''
          : this.props.movieToEdit.release_date,
      movie_url:
        this.props.movieToEdit === undefined
          ? ''
          : this.props.movieToEdit.poster_path,
      genres:
        this.props.movieToEdit === undefined
          ? ''
          : this.props.movieToEdit.genres.join(),
      overview:
        this.props.movieToEdit === undefined
          ? ''
          : this.props.movieToEdit.overview,
      runtime:
        this.props.movieToEdit === undefined
          ? ''
          : this.props.movieToEdit.runtime,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section className="modal">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
        <span className="close_mark" onClick={this.props.onClose}>
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
                  onChange={this.handleChange}
                />
              </label>
            </section>
            <section>
              <label htmlFor="title">
                <span>RELEASE DATE</span>
                <input
                  type="date"
                  onChange={this.handleChange}
                  placeholder="dd-mm-yyyy"
                  value={this.state.release_date}
                />
              </label>
            </section>
            <section>
              <label htmlFor="title">
                <span>MOVIE URL</span>
                <input
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Enter movie URL"
                  value={this.state.movie_url}
                />
              </label>
            </section>
            <section>
              <label htmlFor="title">
                <span>GENRE</span>
                <input
                  type="text"
                  value={this.state.genres}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  value={this.state.overview}
                />
              </label>
            </section>
            <section>
              <label htmlFor="title">
                <span>RUNTIME</span>
                <input
                  type="text"
                  placeholder="Runtime here"
                  onChange={this.handleChange}
                  value={this.state.runtime}
                />
              </label>
            </section>
          </form>
        </div>
        {/* eslint-disable-next-line react/prop-types */}
        <button role="reset" onClick={this.props.onClose}>
          Reset
        </button>
        <button role="search" onClick={this.props.onClose}>
          Submit
        </button>
      </section>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  isShow: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  onClose: PropTypes.func,
};
