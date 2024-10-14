'use client'
import React, {FC, HTMLProps, useState} from 'react';
import style from './input.module.scss'
import clsx from "clsx";
import {useEnterKey} from "@/hooks/useEnterKey";

interface InputProps extends HTMLProps<HTMLInputElement>{
  onSubmit?: () => void
}

const Input: FC<InputProps> = ({
                                 className,
                                 id,
                                 onSubmit,
                                 style: customStyle,
                                 ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = useEnterKey(onSubmit)

  return (
    <div id={id}
         className={clsx(style.inputContainer, {[style.focused]: isFocused}, className)}
         style={customStyle}
    >
      <input
        className={style.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleSubmit}
        {...props}
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
