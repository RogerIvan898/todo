import React, {FC, ReactElement, useEffect, useRef} from 'react';
import style from './modal.module.scss'

interface ModalProps{
  onClose: () => void
  children: ReactElement
}

const Modal: FC<ModalProps> = ({children, onClose}) => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current?.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if(event.key === 'Escape'){
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={style.background}>
      <div
        className={style.container}
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
