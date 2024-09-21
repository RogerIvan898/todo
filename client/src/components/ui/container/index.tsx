import {FC, HTMLProps} from 'react';
import style from './container.module.scss'

const Container: FC<HTMLProps<HTMLDivElement>> = ({children, className, ...props}) => {
  return (
    <div
      className={`${className ?? ''} ${style.container} `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
