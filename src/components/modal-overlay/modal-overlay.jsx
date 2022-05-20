import React from 'react';

// Styles
import modalOverlayStyles from './modal-overlay.module.scss';

export default function ModalOverlay({ closeModal, children}) {
  const onClickHandler = () => {
    closeModal();
  };
  return (
    <div className={modalOverlayStyles.modalOverlay} onClick={onClickHandler}>
      {children}
    </div>
  );
}
