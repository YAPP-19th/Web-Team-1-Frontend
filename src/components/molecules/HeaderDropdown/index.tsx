import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Icon, Text } from '@src/components/atoms';
import { resetAuth } from '@src/slices/authSlice';
import './style.scss';
import { useGetUsersMeQuery } from '@src/services/giljob';

const HeaderDropdown: React.FC = () => {
  const [isActivate, setIsActivate] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { data: me, isSuccess } = useGetUsersMeQuery();

  const handleActivate = useCallback(() => {
    setIsActivate(!isActivate);
  }, [isActivate]);

  const handleLogout = useCallback(() => {
    handleActivate();
    dispatch(resetAuth());

    history.push('/login');
  }, [history, dispatch, handleActivate]);

  return (
    <div className="_HEADER_DROPDOWN_">
      <button className="drop-down-menu" type="button" onClick={handleActivate}>
        <Icon
          size="medium"
          level={
            (Math.floor((me?.data?.point ?? 0) / 100) + 1) as 1 | 2 | 3 | 4 | 5
          }
        />
      </button>

      {isActivate && (
        <div className="drop-down-wrapper">
          <button
            className="drop-down-item"
            type="button"
            onClick={() => {
              handleActivate();
              history.push('/profile');
            }}
          >
            <Text fontSize="medium" fontColor="main" align="center">
              프로필
            </Text>
          </button>

          <button
            className="drop-down-item"
            type="button"
            onClick={handleLogout}
          >
            <Text fontSize="medium" fontColor="main" align="center">
              로그아웃
            </Text>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
