/* eslint-disable react/button-has-type,jsx-a11y/no-interactive-element-to-noninteractive-role,react/destructuring-assignment,jsx-a11y/aria-role */
// eslint-disable react/prefer-stateless-function
// eslint-disable no-unused-expressions,react/prop-types
// eslint-disable react/prop-types
// eslint-disable react/require-default-props,react/no-unused-prop-types

import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class AddMovie extends React.Component {
  render() {
    return (
      <section className="modal">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
        <span className="close_mark" onClick={this.props.onClose}>
          &#10005;
        </span>
        <h3>ADD MOVIE</h3>
        <div className="content">
          <section>
            <label htmlFor="title">
              <span>TITLE</span>
              <input type="text" id="title" placeholder="Moana" />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>RELEASE DATE</span>
              <input type="date" value="Select Date" />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>MOVIE URL</span>
              <input type="date" value="Movie URL here" />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>GENRE</span>
              <input type="text" value="Select Genre" />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>OVERVIEW</span>
              <input type="text" value="Overview here" />
            </label>
          </section>
          <section>
            <label htmlFor="title">
              <span>RUNTIME</span>
              <input type="text" value="Runtime here" />
            </label>
          </section>
        </div>
        {/* eslint-disable-next-line react/prop-types */}
        <button role="reset" onClick={this.props.onClose}>
          Reset
        </button>
        <button role="search">Submit</button>
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
