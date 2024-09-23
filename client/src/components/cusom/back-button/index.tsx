'use client'

import React, {FC, HTMLProps} from 'react';
import Container from "../../ui/container/index";
import {useRouter} from "next/navigation";
import style from './back-button.module.scss'

interface IBackButton extends HTMLProps<HTMLDivElement>{
  path?: string
}

const BackButton: FC<IBackButton> = ({className= '', path}) => {
  const router = useRouter()

  const handleBack = () => {
    path ? router.push(path) : router.back()
  }

  return (
    <Container className={`${style.container} ${className}`} onClick={handleBack}>
      <span className={'material-symbols-outlined'}>Arrow_back</span>
    </Container>
  );
};

export default BackButton;
