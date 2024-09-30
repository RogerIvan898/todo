import React, {FC, HTMLProps} from 'react';
import style from './text-area.module.scss'

const TextArea: FC<HTMLProps<HTMLTextAreaElement>> = ({id = '', className = ''}) => {
  return (
    <div
      className={` ${className} ${style.container}`}
      id={id}
    >
      <textarea className={style.textArea}/>
    </div>
  );
};

export default TextArea;
