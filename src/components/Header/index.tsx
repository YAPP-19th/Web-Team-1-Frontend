import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from '@src/atoms/Text';
import logo from '@src/assets/images/logo.svg';
import Lv1 from '@src/assets/images/Lv1.svg';
import headerItems from './headerItems';
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
    <header className="headerContainer">
      <div className="logoWrapper">
        <img className="logoImage" src={logo} alt="logoImage" />
      </div>
      <div className="buttonContainer">
        <ul className="linkButtonList">
          {headerItems.map(({ name, route }: HeaderItems) => (
            <NavLink className="linkButton" key={name} to={route}>
              <Text align="center" fontSize="x-large">
                {name}
              </Text>
            </NavLink>
          ))}
        </ul>
        <div className="authWrapper">
          <NavLink className="linkButton" to={isLogin ? '/profile' : '/login'}>
            {isLogin ? (
              <button className="profileButton" type="button">
                <img src={Lv1} alt="profileIcon" />
              </button>
            ) : (
              <button className="authButton" type="button">
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
