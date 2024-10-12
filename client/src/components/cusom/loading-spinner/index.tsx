import React, {FC, HTMLProps} from 'react';
import style from './loading-spinner.module.scss'
import clsx from "clsx";

interface LoadingSpinnerProps extends HTMLProps<HTMLDivElement>{}

const LoadingSpinner:FC<LoadingSpinnerProps> = ({className}) => {
  return (
    <div className={clsx(style.loadingSpinner, className)}>
      <div className={style.spinner}/>
    </div>
  );
};

export default LoadingSpinner;