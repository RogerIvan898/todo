'use client'
import {FC, HTMLProps, useRef, useState} from 'react';
import style from './input.module.scss'
import React from "react/ts5.0";

interface InputProps extends HTMLProps<HTMLInputElement>{}

const Input: FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false)

  const { className, id, style: innerStyle, ...inputProps } = props

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && props.onSubmit){
      e.preventDefault()
      props.onSubmit()
    }
  }
  const applyFocusedClass = isFocused ? style.focused : ''

  return (
    <div id={id}
         className={`${style.inputContainer} ${applyFocusedClass} ${className ?? ''}`}
         style={innerStyle}
    >
      <input
        className={style.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyPress={handleSubmit}
        {...inputProps}
      />
      {/*<div className={style.submit}>*/}
      {/*  <span className={`material-symbols-outlined ${applyFocusedStyle()}`}*/}
      {/*    onClick={props?.onSubmit}*/}
      {/*  >*/}
      {/*    check_circle*/}
      {/*  </span>*/}
      {/*</div>*/}
    </div>
  );
};

export default Input;