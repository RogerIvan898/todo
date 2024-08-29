'use client'
import React from 'react';
import AuthForm from "../../../components/cusom/auth-form/index";
import {api} from "../../../api";
import {useAuth} from "../../../components/context/auth-context";
import AuthPageLayout from "../../../components/page/auth-page-layout/index";

const Page = () => {
  const { userId, login } = useAuth()

  const handleRegistration = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

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
    if(response.data){
      const { id } = response.data
      login(id)
    }
  }

  return (
    <AuthPageLayout>
      <AuthForm
        title={'Sign up'}
        onSubmit={handleRegistration}
        showConfirmPassword={true}
        switchFormText={'I already have an account'}
        onSwitch={'/auth/sign-in'}
      />
    </AuthPageLayout>
  );
};

export default Page;