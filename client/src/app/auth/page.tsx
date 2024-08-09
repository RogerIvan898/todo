'use client'
import React from 'react';
import AuthForm from "../../components/cusom/auth-form/index";

const Page = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <AuthForm title={'Sign up'}/>
    </div>
  );
};

export default Page;