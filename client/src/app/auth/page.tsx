'use client'
import React from 'react';
import AuthForm from "../../components/cusom/auth-form/index";
import {isUserExists, register} from "../../api";

const Page = () => {
  const handleRegistration = async (email: string, password: string, confirmPassword: string) => {
    if(!email || !password || !confirmPassword){
      alert('All fields are required')
      return
    }
    if(password !== confirmPassword){
      alert('Passwords do not match')
      return
    }
    if(await isUserExists(email)){
      alert('User with such email already exist')
      return
    }

    await register(email, password)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <AuthForm
        title={'Sign up'}
        onSubmit={handleRegistration}
        showConfirmPassword={true}
        switchFormText={'I already have an account'}
        onSwitch={''}
      />
    </div>
  );
};

export default Page;