'use client'

import AuthForm from "../../../components/cusom/auth-form/index";
import {api} from "../../../api";
import AuthPageLayout from "../../../components/page/auth-page-layout/index";
import {useRouter} from "next/navigation";

const SignIn = () => {
  const navigate = useRouter()

  const handleLogin = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if(!email || !password){
      alert('Both fields are required')
      return
    }

    const response = await api.loginUser(email, password)

    if(response){
      navigate.replace('/todos')
    } else {
      alert('Login failed. Check your credentials.')
    }
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