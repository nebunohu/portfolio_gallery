import React from 'react';
import ReactDOM from 'react-dom';

// Components
import ModalOverlay from '../modal-overlay/modal-overlay';

// Styles
import modalStyles from './modal.module.scss';

export default function Modal(props) {
  return ReactDOM.createPortal(
    <ModalOverlay closeModal={props.closeModal}>

      <div className={modalStyles.modalWrapper}>
        <div className={`${modalStyles.closeButtonWrapper}`} onClick={props.closeModal}>X</div>
        {props.children}
      </div>
    </ModalOverlay>,
    document.getElementById('modal-root'),
  );
}
