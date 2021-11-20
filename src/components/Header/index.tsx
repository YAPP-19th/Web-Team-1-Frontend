import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from '@src/atoms/Text';
import logo from '@src/assets/images/logo.svg';
import Lv1 from '@src/assets/images/Lv1.svg';
import headerList from './list';
import './style.scss';

export interface HeaderProps {
  isLogin: boolean;
}

export interface HeaderItems {
  name: string;
  route: string;
}

const Header: React.FC<HeaderProps> = ({ isLogin = false }) => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img className="logo-image" src={logo} alt="logoImage" />
      </div>
      <div className="button-container">
        <ul className="button-list">
          {headerList.map(({ name, route }: HeaderItems) => (
            <NavLink className="link-button" key={name} to={route}>
              <Text align="center" fontSize="x-large">
                {name}
              </Text>
            </NavLink>
          ))}
        </ul>
        <div className="auth-wrapper">
          <NavLink className="link-button" to={isLogin ? '/profile' : '/login'}>
            {isLogin ? (
              <button className="profile" type="button">
                <img src={Lv1} alt="profileIcon" />
              </button>
            ) : (
              <button className="auth" type="button">
                <Text align="center" fontSize="small" fontColor="white">
                  로그인 / 회원가입
                </Text>
              </button>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
