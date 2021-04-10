import React from 'react';
import PropTypes from 'prop-types';

const ModalWindow = ({ title, actionStatus, errorDesc, handleShowModal, showModal }) => {
  if (showModal) {
    return (
      <section className="modal">
        <div>
          <h3>{title}</h3>
          <span className="close_mark" onClick={handleShowModal}>
            &#10005;
          </span>
        </div>
        <h3>{actionStatus}</h3>
        <h6>{errorDesc}</h6>
      </section>
    );
  }

  return null;
};

export default ModalWindow;

ModalWindow.propTypes = {
  title: PropTypes.string.isRequired,
  actionStatus: PropTypes.string,
  errorDesc: PropTypes.string,
  handleShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

ModalWindow.defaultProps = {
  actionStatus: 'no data',
  errorDesc: '',
};
