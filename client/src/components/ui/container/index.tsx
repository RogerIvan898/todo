import {ComponentPropsWithoutRef, ElementType, FC, HTMLProps, ReactNode} from 'react';
import style from './container.module.scss'
import clsx from "clsx";

interface ContainerProps<T extends ElementType>{
  as?: T,
  className?: string
  children: ReactNode
}

function Container<T extends ElementType = 'div'> ({
                                                         as,
                                                         children,
                                                         className,
                                                         ...props
}: ComponentPropsWithoutRef<T> & ContainerProps<T>){
  const Component = as || 'div'

  return (
    <Component
      className={clsx(style.container, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
