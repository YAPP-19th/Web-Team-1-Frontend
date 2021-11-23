import React from 'react';
import { Text } from '@src/components/atoms';
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
          <button className="login-button" type="button">
            <Text align="center" fontSize="small" fontWeight="bold">
              카카오로 1초만에 시작하기
            </Text>
          </button>
        </div>
      </div>
      <div className="login-background" />
    </section>
  );
};

export default Login;
