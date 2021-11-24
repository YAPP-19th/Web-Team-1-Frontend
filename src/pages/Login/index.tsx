import React from 'react';
import { Button, Text } from '@src/components/atoms';
import logo from '@src/assets/images/logo.svg';
import './style.scss';

const Login: React.FC = () => {
  return (
    <section className="login">
      <div className="login-wrapper">
        <div className="box">
          <img className="logo" src={logo} alt="logo" />
          <Text
            className="intro-text"
            align="center"
            fontSize="large"
            fontWeight="bold"
          >
            길잡에 오신 것을 환영합니다
          </Text>
          <Button
            innerText="카카오로 1초만에 시작하기"
            buttonColor="kakao"
            textColor="main"
            textSize="medium"
          />
        </div>
      </div>
      <div className="login-background" />
    </section>
  );
};

export default Login;
