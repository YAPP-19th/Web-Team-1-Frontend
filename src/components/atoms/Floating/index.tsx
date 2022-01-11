import React from 'react';
import { useLocation } from 'react-router-dom';
import floating from '@src/assets/images/floating.png';
import './style.scss';

const Floating: React.FC = () => {
  const { pathname } = useLocation();
  const handleClick = () => {
    window.open('https://open.kakao.com/o/gu470qTd', '_blank');
  };

  return !pathname.includes('/login') ? (
    <button
      id="kakao-talk-chaneel-chat-button"
      className="_FLOATING_"
      type="button"
      onClick={handleClick}
    >
      <img src={floating} alt="floatingButton" />
    </button>
  ) : null;
};

export default React.memo(Floating);
