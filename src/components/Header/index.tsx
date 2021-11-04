import React from 'react';
import './index.scss';

import logo from '@src/assets/images/logo.svg';
import Lv1 from '@src/assets/images/Lv1.svg';
import headerItems from './headerItems';

export interface IHeaderProps {
  isLogin: boolean;
}

export interface IHeaderItems {
  name: string;
  route: string;
}

const Header: React.FC<IHeaderProps> = ({ isLogin = false }) => {
  return (
    <header className="headerContainer">
      <div className="logoWrapper">
        <img className="logoImage" src={logo} alt="logoImage" />
      </div>
      <div className="buttonContainer">
        <ul className="linkButtonList">
          {headerItems.map(({ name, route }: IHeaderItems) => {
            return (
              <li className="linkButton" key={name}>
                {name}
              </li>
            );
          })}
        </ul>
        <div className="authWrapper">
          {isLogin ? (
            <button className="profileButton" type="button">
              <img src={Lv1} alt="profileIcon" />
            </button>
          ) : (
            <button className="authButton" type="button">
              로그인 / 회원가입
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
