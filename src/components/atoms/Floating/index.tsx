import React from 'react';
import { useLocation } from 'react-router-dom';
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
    />
  ) : null;
};

export default React.memo(Floating);
