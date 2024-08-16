'use client'
import React, {useContext} from 'react';
import AuthForm from "../../components/cusom/auth-form";
import {api} from "../../api";
import {AuthContext} from "../../components/context/auth-context";

const Page = () => {
  const { userId, login } = useContext(AuthContext)

  const handleRegistration = async (email: string, password: string, confirmPassword: string) => {
    if(!email || !password || !confirmPassword){
      alert('All fields are required')
      return
    }
    if(password !== confirmPassword){
      alert('Passwords do not match')
      return
    }
    if(await api.isUserExists(email)){
      alert('User with such email already exist')
      return
    }

    const response = await api.registerUser(email, password)
    if(response){
      const { id } = response.data
      login(id)
    }
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