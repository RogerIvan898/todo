import React from 'react';
import style from './modal.module.scss'

const Modal = ({children}) => {
  return (
    <div className={style.background}>
      <div className={style.container}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
