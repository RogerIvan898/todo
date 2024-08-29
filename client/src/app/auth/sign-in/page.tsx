'use client'

import AuthForm from "../../../components/cusom/auth-form/index";
import {api} from "../../../api";
import AuthPageLayout from "../../../components/page/auth-page-layout/index";

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
    <AuthPageLayout>
      <AuthForm title={'Sign in'}
                showConfirmPassword={false}
                switchFormText={'I have no account'}
                onSwitch={'/auth/sign-up'}
                onSubmit={handleLogin}
      />
    </AuthPageLayout>
  );
};

export default SignIn;