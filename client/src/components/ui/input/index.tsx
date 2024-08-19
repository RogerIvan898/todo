'use client'
import {FC, HTMLProps, useState} from 'react';
import style from './input.module.scss'

interface InputProps extends HTMLProps<HTMLInputElement>{}

const Input: FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false)

  const { className, id, style: innerStyle, ...inputProps } = props

  const handleSubmit = (e: KeyboardEvent) => {
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