'use client'
import style from './auth-form.module.scss'

import {
  ChangeEvent,
  FC,
  FormEvent,
  useReducer,
} from 'react';
import Container from "../../ui/container/index";
import Input from "../../ui/input/index";
import Link from "next/link";
import {useEnterKey} from "@/hooks/useEnterKey";
import LoadingSpinner from "@/components/cusom/loading-spinner";
import {IAuthData} from "@/types";

interface AuthFormProps {
  title: string
  showConfirmPassword: boolean
  switchFormText: string
  onSwitch: string
  onSubmit: (formData: IAuthData) => Promise<void>
  isLoading?: boolean
}

interface FormState{
  email: string
  password: string
  confirmPassword?: string
}

const formReducer = (state: FormState, action: { field: keyof FormState, value: string }): FormState => {
  return {
    ...state,
    [action.field]: action.value
  }
}

const AuthForm: FC<AuthFormProps> = ({
                                       title = 'Title',
                                       onSubmit,
                                       showConfirmPassword = false,
                                       switchFormText = '',
                                       onSwitch= '',
                                       isLoading = false
}) => {
  const [formState, dispatch] = useReducer(formReducer, {
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement>) => {

    dispatch({ field, value: event.target.value })
  }

  const validateForm = (): boolean => {
    const { email, password, confirmPassword } = formState

    if (!email || !password) {
      alert('Email and Password are required.')
      return false
    }
    if (showConfirmPassword && password !== confirmPassword) {
      alert('Passwords do not match.')
      return false
    }

    return true
  }

  const handleSubmit = async (e?: FormEvent) => {
    if(e) {
      e.preventDefault()
    }

    if(validateForm()) {
      const {email, password} = formState

      await onSubmit({email, password})
    }
  }
  const handleEnterKey = useEnterKey(handleSubmit)

  return (
    <>
    {isLoading && <LoadingSpinner/>}
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
            onChange={handleInputChange('email')}
            placeholder={'email'}
            type={'email'}
            onKeyDown={handleEnterKey}
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
            onChange={handleInputChange('password')}
            onKeyDown={handleEnterKey}
          />
        </div>
         { showConfirmPassword &&
         <div className={style.inputContainer}>
          <label htmlFor={'confirm'}>
            Confirm password
          </label>
          <Input
            className={style.confirmInput}
            onChange={handleInputChange('confirmPassword')}
            id={'confirm'}
            placeholder={'confirm password'}
            type={'password'}
            onKeyDown={handleEnterKey}
          />
        </div> }
      </div>
      <Container className={style.submitButton}>
        <button type={'submit'}>Submit</button>
      </Container>
      <Link href={onSwitch}>{ switchFormText }</Link>
      </form>
    </Container>
    </>
  );
};

export default AuthForm;
