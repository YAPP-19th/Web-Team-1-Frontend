import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Text, Input, Dropdown, Textarea } from '@src/components/atoms';
import { usePostRegisterMutation } from '@src/services/giljob';
import { setAuth, setAccessToken, authSelector } from '@src/slices/authSlice';
import {
  registerSelector,
  setNickname,
  setIntro,
  setPosition,
  resetRegister,
} from '@src/slices/registerSlice';
import { POSITION_LIST } from '@src/constants/dropdown';
import './style.scss';

const RegisterBox: React.FC = () => {
  const [register, { isLoading }] = usePostRegisterMutation();
  const { kakaoAccessToken } = useSelector(authSelector);
  const registerState = useSelector(registerSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    /* Redux에 카카오 oauth 토큰을 통해 
    로그인을 안한 사람을 되돌립니다. */
    if (!kakaoAccessToken) history.push('/login');
  }, [kakaoAccessToken, history]);

  const handleRegister = useCallback(() => {
    register({
      kakaoAccessToken,
      ...registerState,
    })
      .unwrap()
      .then(({ data }) => {
        const { accessToken } = data;

        dispatch(setAccessToken(accessToken));
        dispatch(setAuth(true));

        dispatch(resetRegister());

        history.push('/quest');
      });
  }, [register, kakaoAccessToken, registerState, dispatch, history]);

  const handleNickname = useCallback(
    (value: string) => {
      dispatch(setNickname(value));
    },
    [dispatch],
  );

  const handlePosition = useCallback(
    (type: string, value: string | number) => {
      dispatch(setPosition({ type, value }));
    },
    [dispatch],
  );

  const handleIntro = useCallback(
    (value: string) => {
      dispatch(setIntro(value));
    },
    [dispatch],
  );

  return (
    <article className="profile-setting">
      {isLoading && <div className="loading">loading...</div>}
      <Text
        className="title"
        align="start"
        fontColor="gil-blue"
        fontWeight="bold"
      >
        프로필 설정
      </Text>
      <div className="default-wrapper">
        <div className="nickname">
          <Text fontSize="large" fontColor="main" fontWeight="bold">
            닉네임 <span className="blue-star">*</span>
          </Text>
          <Input hasCount onDispatch={handleNickname} />
        </div>
        <div className="position">
          <Text fontSize="large" fontColor="main" fontWeight="bold">
            직군 <span className="blue-star">*</span>
          </Text>
          <Dropdown
            placeholder="직군 설정"
            type="position"
            selected={registerState.position}
            list={POSITION_LIST}
            onDispatch={handlePosition}
          />
        </div>
      </div>
      <div className="introduce-wrapper">
        <Text fontSize="large" fontColor="main" fontWeight="bold">
          자기 소개 <span className="blue-star">*</span>
        </Text>
        <Textarea hasLimit onDispatch={handleIntro} />
      </div>
      <div className="button-wrapper">
        <Button
          innerText="항해 시작"
          buttonColor="white"
          textColor="gil-blue"
          hasShadow
          handleClick={handleRegister}
        />
      </div>
    </article>
  );
};

export default RegisterBox;
