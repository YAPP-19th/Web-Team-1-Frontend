import React from 'react';
import LoginBox from './LoginBox';
import SettingBox from './SettingBox';
import './style.scss';

export interface LoginProps {
  isLogin: boolean;
}

const Login: React.FC<LoginProps> = ({ isLogin = false }) => {
  return (
    <section className="login">
      <div className="login-wrapper">
        {!isLogin ? <LoginBox /> : <SettingBox />}
      </div>
      <div className="login-background" />
    </section>
  );
};

export default Login;
