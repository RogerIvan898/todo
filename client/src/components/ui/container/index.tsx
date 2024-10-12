import {FC, HTMLProps} from 'react';
import style from './container.module.scss'
import clsx from "clsx";

const Container: FC<HTMLProps<HTMLDivElement>> = ({children, className, ...props}) => {
  return (
    <div
      className={clsx(style.container, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
