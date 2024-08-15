import style from './auth-form.module.scss'

import {ChangeEvent, Dispatch, FC, SetStateAction, useState} from 'react';
import Container from "../../ui/container/index";
import Input from "../../ui/input/index";

interface AuthFormProps {
  title: string
  showConfirmPassword: boolean
  switchFormText: string
  onSwitch: string
  onSubmit: (email: string, password: string, confirmPassword?: string) => Promise<void>
}

const AuthForm: FC<AuthFormProps> = ({title, onSubmit, showConfirmPassword, switchFormText}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleInput = (event: ChangeEvent<HTMLInputElement>, dispatch: Dispatch<SetStateAction<string>>) => {
    const { value } = event.target

    dispatch(value)
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
      <Container
        onClick={() => onSubmit(email, password, confirmPassword)}
        className={style.submitButton}>
        Submit
      </Container>
      <a href={''}>{ switchFormText }</a>
    </Container >
  );
};

export default AuthForm;