import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Text } from '@src/components/atoms';
import logo from '@src/assets/images/logo.svg';
import './style.scss';

const LoginBox: React.FC = () => {
  return (
    <article className="login-box">
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
        innerText="카카오로 1초만에 시작"
        buttonColor="kakao"
        textColor="main"
        textSize="medium"
      />
      <Link to="/quest" className="no-login">
        <Text
          align="center"
          fontColor="gray"
          fontSize="small"
          fontWeight="regular"
        >
          로그인 없이 둘러보기 ←
        </Text>
      </Link>
    </article>
  );
};

export default LoginBox;
