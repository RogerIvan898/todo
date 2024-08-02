'use client'
import {FC, HTMLProps, useState} from 'react';
import style from './input.module.scss'

const Input: FC<HTMLProps<HTMLInputElement>> = (props) => {
  const [isFocused, setIsFocused] = useState(false)

  const { className, id, ...otherProps } = props

  const applyFocusedStyle = () => {
    return isFocused ? style.focused : ''
  }

  return (
    <div id={id} className={`${style.inputContainer} ${applyFocusedStyle()}`}>
      <input
        className={style.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...otherProps}
      />
      <div className={style.submit}>
        <span className={`material-symbols-outlined ${applyFocusedStyle()}`}>
          check_circle
        </span>
      </div>
    </div>
  );
};

export default Input;