import React from "react";

// Styles
import modalOverlayStyles from './modal-overlay.module.scss';

export default function ModalOverlay(props) {
  const onClickHandler = () => {
    props.closeModal();
  }
  return (
    <div className={modalOverlayStyles.modalOverlay} onClick={onClickHandler}>
      {props.children}
    </div>
  );
}