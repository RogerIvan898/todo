'use client'

import AuthForm from "../../../components/cusom/auth-form/index";
import {api} from "../../../api";
import AuthPageLayout from "../../../components/page/auth-page-layout/index";
import useAuth from "@/hooks/useAuth";

const SignIn = () => {
  const {handleAuth, isLoading} = useAuth(api.loginUser)

  return (
    <AuthPageLayout>
      <AuthForm title={'Sign in'}
                showConfirmPassword={false}
                switchFormText={'I have no account'}
                onSwitch={'/auth/sign-up'}
                onSubmit={handleAuth}
                isLoading={isLoading}
      />
    </AuthPageLayout>
  );
};

export default SignIn;