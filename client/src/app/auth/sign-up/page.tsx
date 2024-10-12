'use client'
import AuthForm from "../../../components/cusom/auth-form/index";
import {api} from "../../../api";
import AuthPageLayout from "../../../components/page/auth-page-layout/index";
import useAuth from "@/hooks/useAuth";

const Page = () => {
  const {handleAuth, isLoading} = useAuth(api.registerUser)

  return (
    <AuthPageLayout>
      <AuthForm
        title={'Sign up'}
        onSubmit={handleAuth}
        showConfirmPassword={true}
        switchFormText={'I already have an account'}
        onSwitch={'/auth/sign-in'}
        isLoading={isLoading}
      />
    </AuthPageLayout>
  );
};

export default Page;