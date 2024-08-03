import {FC, HTMLProps} from 'react';
import style from './container.module.scss'

const Container: FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div className={`${style.container} ${props.className ?? ''}`}>
      {props.children}
    </div>
  );
};

export default Container;