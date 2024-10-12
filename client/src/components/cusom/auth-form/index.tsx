'use client'
import style from './auth-form.module.scss'

import {ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react';
import Container from "../../ui/container/index";
import Input from "../../ui/input/index";
import Link from "next/link";
import {useEnterKey} from "@/hooks/useEnterKey";

interface AuthFormProps {
  title: string
  showConfirmPassword: boolean
  switchFormText: string
  onSwitch: string
  onSubmit: (formData: FormData) => void
}

const AuthForm: FC<AuthFormProps> = ({
                                       title = 'Title',
                                       onSubmit,
                                       showConfirmPassword = false,
                                       switchFormText = '',
                                       onSwitch= '',
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const formDataRef = useRef(new FormData)

  const handleInput = (event: ChangeEvent<HTMLInputElement>, dispatch: Dispatch<SetStateAction<string>>) => {
    const { value } = event.target

    dispatch(value)
  }

  const handleSubmit = () => {
    const formData = new FormData()

    formData.append('email', email)
    formData.append('password', password)

    if(confirmPassword){
      formData.append('confirmPassword', confirmPassword)
    }

    onSubmit(formData)
  }

  const handleEnterKey = useEnterKey(handleSubmit)

  useEffect(() => {
    const handleSubmitKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit()
      }
    }

    document.addEventListener('keypress', handleSubmitKeyPress)
    return () => {
      document.removeEventListener('keypress', handleSubmitKeyPress)
    }
  })

  return (
    <Container>
      <form className={style.container} onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
      <p className={style.title}>
        { title }
      </p>
      <div className={style.inputs}>
        <div className={style.inputContainer}>
          <label htmlFor={'email'}>
            Email
          </label>
          <Input
            id={'email'}
            onChange={((event: ChangeEvent<HTMLInputElement>) => handleInput(event, setEmail))}
            placeholder={'email'}
            type={'email'}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={'password'}>
            Password
          </label>
          <Input
            id={'password'}
            placeholder={'password'}
            type={'password'}
            onChange={((event: ChangeEvent<HTMLInputElement>) => handleInput(event, setPassword))}
          />
        </div>
         { showConfirmPassword &&
         <div className={style.inputContainer}>
          <label htmlFor={'confirm'}>
            Confirm password
          </label>
          <Input
            className={style.confirmInput}
            onChange={((event: ChangeEvent<HTMLInputElement>) => handleInput(event, setConfirmPassword))}
            id={'confirm'}
            placeholder={'confirm password'}
            type={'password'}
          />
        </div> }
      </div>
      <Container className={style.submitButton}>
        <button type={'submit'}>Submit</button>
      </Container>
      <Link href={onSwitch}>{ switchFormText }</Link>
      </form>
    </Container>
  );
};

export default AuthForm;
