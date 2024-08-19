'use client'

import React, {FC, ReactNode} from 'react';
import style from './layout.module.scss'

const Layout: FC<ReactNode> = ({children, className}) => {
  return (
    <div className={`${style.container} ${className}`}>
      { children }
    </div>
  );
};

export default Layout;