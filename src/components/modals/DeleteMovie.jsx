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
        <h3>{this.props.movieToEdit.title}</h3>

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
  onClose: PropTypes.func,
  isShow: PropTypes.bool,
};
