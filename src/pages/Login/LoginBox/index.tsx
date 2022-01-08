import React, { useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Text, Loading } from '@src/components/atoms';
import { usePostLoginMutation } from '@src/services/giljob';
import { setAuth, setKakaoToken, setAccessToken } from '@src/slices/authSlice';
import logo from '@src/assets/images/logo.svg';
import './style.scss';

const LoginBox: React.FC = () => {
  const [login, { isLoading }] = usePostLoginMutation();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = useCallback(
    (Kakao) => {
      /* Kakao.Auth.login 으로 
      카카오 oauth 팝업창을 띄웁니다. */
      Kakao.Auth.login({
        success(authObj: Record<string, string>) {
          const kakaoAccessToken = authObj.access_token;
          // mutation으로 생성된 login 함수
          login({ kakaoAccessToken })
            .unwrap()
            .then(({ data }) => {
              const { isSignedUp, accessToken } = data;

              if (isSignedUp) {
                // 회원
                dispatch(setAccessToken(accessToken));
                dispatch(setAuth(true));

                history.push('/quest');
              } else {
                // 비회원
                dispatch(setKakaoToken(kakaoAccessToken));

                history.push('/login/signup');
              }
            });
        },
        fail(err: string) {
          console.log(JSON.stringify(err));
        },
      });
    },
    [dispatch, history, login],
  );

  return (
    <>
      {isLoading && <Loading />}
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
          handleClick={() => handleLogin(window.Kakao)}
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
    </>
  );
};

export default LoginBox;
