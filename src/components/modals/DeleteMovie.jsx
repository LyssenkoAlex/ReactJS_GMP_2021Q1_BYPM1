/* eslint-disable react/prefer-stateless-function,jsx-a11y/click-events-have-key-events,react/destructuring-assignment,jsx-a11y/no-static-element-interactions,jsx-a11y/aria-role,react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class DeleteMovie extends React.Component {
  render() {
    return (
      <section className="modal">
        <span className="close_mark" onClick={this.props.onClose}>
          &#10005;
        </span>
        <h3>DELETE MOVIE</h3>
        <div className="content">
          <h3>Are you sure you want to delete this movie?</h3>
        </div>
        <button
          role="reset"
          type="submit"
          onClick={this.props.onClose}
        >
          Confirm
        </button>
      </section>
    );
  }
}

export default DeleteMovie;

DeleteMovie.propTypes = {
  // eslint-disable-next-line react/require-default-props
  onClose: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  isShow: PropTypes.bool,
};
