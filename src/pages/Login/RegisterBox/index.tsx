import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
  Button,
  Text,
  Input,
  Dropdown,
  Textarea,
  Loading,
  Toast,
} from '@src/components/atoms';
import { usePostRegisterMutation } from '@src/services/giljob';
import useCheckState from '@src/hooks/useCheckState';
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
  const authState = useSelector(authSelector);
  const registerState = useSelector(registerSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCheckState = useCheckState();

  useEffect(() => {
    /* Redux에 카카오 oauth 토큰을 통해 
    로그인을 안한 사람을 되돌립니다. */
    if (!authState.kakaoAccessToken) history.push('/login');
  }, [authState.kakaoAccessToken, history]);

  const handleToast = useCallback(
    () =>
      toast(
        <Toast
          mainText="입력 정보를 전부 확인해주세요!"
          subText="입력 정보 확인"
          color="red"
        />,
        {
          duration: 2000,
          position: 'bottom-center',
          style: {
            background: 'transparent',
            boxShadow: 'none',
          },
        },
      ),
    [],
  );

  const handleRegister = () => {
    if (handleCheckState(registerState)) handleToast();
    else {
      register({
        kakaoAccessToken: authState.kakaoAccessToken,
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
    }
  };

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
      {isLoading && <Loading />}
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
