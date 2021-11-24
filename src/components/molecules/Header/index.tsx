import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Button, Icon, Text } from '@src/components/atoms';
import logo from '@src/assets/images/logo.svg';
import headerList from './list';
import './style.scss';

export interface HeaderProps {
  isLogin?: boolean;
}

export interface HeaderItems {
  name: string;
  route: string;
}

const Header: React.FC<HeaderProps> = ({ isLogin = false }) => {
  const { pathname } = useLocation();

  return pathname !== '/login' ? (
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
              <Icon size="large" level={1} />
            ) : (
              <Button
                innerText="로그인 / 회원가입"
                buttonColor="gil-blue"
                textColor="white"
                textSize="small"
                hasBorder
              />
            )}
          </NavLink>
        </div>
      </div>
    </header>
  ) : null;
};

export default Header;
