import React, {FC, ReactNode} from 'react';
import style from './auth-page-layout.module.scss'
import Layout from "../../ui/layout/index";
import BackButton from "../../cusom/back-button/index";

const AuthPageLayout: FC = ({children}: ReactNode) => {
  return (
    <Layout>
      <BackButton className={style.button} path={'/'}/>
      {children}
    </Layout>
  );
};

export default AuthPageLayout;