import React, {FC, HTMLProps} from 'react';
import style from './text-area.module.scss'
import clsx from "clsx";

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement>{}

const TextArea: FC<HTMLProps<HTMLTextAreaElement>> = ({id = '', className = '', ...props}) => {
  return (
    <div
      className={clsx(style.container, className)}
      id={id}
    >
      <textarea
          className={style.textArea}
          {...props}
      />
    </div>
  );
};

export default TextArea;
