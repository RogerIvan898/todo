import React, {FC, ReactNode} from 'react';
import style from './auth-page-layout.module.scss'
import Layout from "../../ui/layout/index";
import BackButton from "../../cusom/back-button/index";

interface AuthPageLayoutProps{
  children: ReactNode
}

const AuthPageLayout: FC<AuthPageLayoutProps> = ({children}) => {
  return (
    <Layout>
      <BackButton className={style.button} path={'/'}/>
      <div className={style.formContainer}>
        {children}
      </div>
    </Layout>
  );
};

export default AuthPageLayout;