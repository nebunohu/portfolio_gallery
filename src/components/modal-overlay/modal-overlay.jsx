import React from 'react';
import PropTypes from 'prop-types';

// Styles
import modalOverlayStyles from './modal-overlay.module.scss';

export default function ModalOverlay({ closeModal, children }) {
  const onClickHandler = () => {
    closeModal();
  };
  return (
    <div className={modalOverlayStyles.modalOverlay} role="button" tabIndex={0} onClick={onClickHandler}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
