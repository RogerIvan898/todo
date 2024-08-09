import style from './auth-form.module.scss'
import React, {FC} from 'react';
import Container from "../../ui/container/index";
import Input from "../../ui/input/index";

interface AuthFormProps {
  title: string
}

const AuthForm: FC<AuthFormProps> = ({title}) => {
  return (
    <Container className={style.container}>
      <p className={style.title}>{title ?? 'Title'}</p>
      <div className={style.inputs}>
        <div className={style.inputContainer}>
          <label htmlFor={'email'}>Email</label>
          <Input id={'email'} placeholder={'email'} type={'email'}/>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={'password'}>Password</label>
          <Input id={'password'} placeholder={'password'} type={'password'}/>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={'confirm'}>Confirm password</label>
          <Input id={'confirm'}  placeholder={'confirm password'} type={'password'}/>
        </div>
      </div>
      <Container className={style.submitButton}>
        Submit
      </Container>
    </Container >
  );
};

export default AuthForm;