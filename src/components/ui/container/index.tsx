import {FC, HTMLProps} from 'react';
import style from './container.module.scss'

const Container: FC<HTMLProps<HTMLDivElement>> = (props) => {
  const {children, className,...initialProps} = props

  return (
    <div className={`${style.container} ${className ?? ''}`}
         {...initialProps}>
      {children}
    </div>
  );
};

export default Container;