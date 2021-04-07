import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalActive } from '../Redux/Actions/modal';
import { MdClose } from 'react-icons/md';
import { setSelectedObject } from '../Redux/Actions/object';
import { CSSTransition } from 'react-transition-group';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const modalActive = useSelector((state) => state.modal.modalActive);

  return (
    <>
      <CSSTransition
        in={modalActive}
        timeout={400}
        unmountOnExit
        classNames="alert"
      >
        <div className={'Modal'}>
          <div className={'Modal__inner'} onClick={(e) => e.stopPropagation()}>
            {children}
            <button
              className="Modal__close"
              onClick={() => {
                dispatch(toggleModalActive(false));
                setTimeout(() => {
                  dispatch(setSelectedObject(null));
                }, 400);
              }}
            >
              <MdClose />
            </button>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={modalActive}
        timeout={400}
        unmountOnExit
        classNames="bcg"
      >
        <div className="bcg-modal"></div>
      </CSSTransition>
    </>
  );
};

export default Modal;
