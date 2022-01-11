import { setModalOff } from '@src/slices/modalSlice';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

const Modal: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (event.target.classList[0] === 'modal-background') {
        dispatch(setModalOff());
      }
    },
    [dispatch],
  );
  return (
    <div
      className="modal-background"
      role="none"
      onClick={handleClick}
      onKeyUp={handleClick}
    >
      {children}
    </div>
  );
};

export default Modal;
