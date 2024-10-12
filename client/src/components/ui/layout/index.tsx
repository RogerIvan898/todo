'use client'

import React, {FC, ReactNode} from 'react';
import style from './layout.module.scss'
import clsx from "clsx";

interface LayoutProps{
  className?: string
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({children, className = ''}) => {
  return (
    <div className={clsx(style.container, className)}>
      { children }
    </div>
  );
};

export default Layout;