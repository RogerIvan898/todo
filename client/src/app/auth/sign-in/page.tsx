'use client'

import React from 'react';
import style from './sign-in.module.scss'
import AuthForm from "../../../components/cusom/auth-form/index";
import Layout from "../../../components/ui/layout/index";
import {api} from "../../../api";
import BackButton from "../../../components/cusom/back-button/index";

const SignIn = () => {
  const handleLogin = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if(!email || !password){
      alert('Both fields are required')
      return
    }

    await api.loginUser(email, password)
  }

  return (
    <Layout>
      <BackButton className={style.button}/>
      <AuthForm title={'Sign in'}
                showConfirmPassword={false}
                switchFormText={'I have no account'}
                onSwitch={''}
                onSubmit={handleLogin}
      />
    </Layout>
  );
};

export default SignIn;