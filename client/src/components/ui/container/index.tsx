import {FC, HTMLProps} from 'react';
import style from './container.module.scss'

const Container: FC<HTMLProps<HTMLDivElement>> = (props) => {
  const {children, className,...initialProps} = props

  return (
    <div className={`${className ?? ''} ${style.container} `} {...initialProps}
    >
      {children}
    </div>
  );
};

export default Container;