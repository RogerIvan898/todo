import style from './auth-form.module.scss'

import React, {ChangeEvent, Dispatch, FC, SetStateAction, useState} from 'react';
import Container from "../../ui/container/index";
import Input from "../../ui/input/index";

interface AuthFormProps {
  title: string
}

const AuthForm: FC<AuthFormProps> = ({title}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleInput = (event: ChangeEvent<HTMLInputElement>, dispatch: Dispatch<SetStateAction<string>>) => {
    const {value} = event.currentTarget
    dispatch(value)
  }

  const handleSubmit = async () => {
    if(password !== confirmPassword){
      return
    }

    const responce = await fetch(`http://localhost:3001/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
  }

  return (
    <Container className={style.container}>
      <p className={style.title}>
        { title ?? 'Title' }
      </p>
      <div className={style.inputs}>
        <div className={style.inputContainer}>
          <label htmlFor={'email'}>
            Email
          </label>
          <Input
            id={'email'}
            onInput={((event: ChangeEvent<HTMLInputElement>) => handleInput(event, setEmail))}
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
            onInput={((event: ChangeEvent<HTMLInputElement>) => handleInput(event, setPassword))}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={'confirm'}>
            Confirm password
          </label>
          <Input
            className={style.confirmInput}
            onInput={((event: ChangeEvent<HTMLInputElement>) => handleInput(event, setConfirmPassword))}
            id={'confirm'}
            placeholder={'confirm password'}
            type={'password'}
          />
        </div>
      </div>
      <Container
        onClick={handleSubmit}
        className={style.submitButton}>
        Submit
      </Container>
    </Container >
  );
};

export default AuthForm;