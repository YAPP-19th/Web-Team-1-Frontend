import React from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Text } from '@src/components/atoms';
import { HeaderDropdown } from '@src/components/molecules';
import { authSelector } from '@src/slices/authSlice';
import logo from '@src/assets/images/logo.svg';
import HEADER_LIST from '@src/constants/header';
import './style.scss';

export interface HeaderList {
  name: string;
  route: string;
}

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { isAuth } = useSelector(authSelector);

  return !pathname.includes('/login') ? (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img className="logo-image" src={logo} alt="logoImage" />
          </Link>
        </div>
        <div className="button-container">
          <ul className="button-list">
            {HEADER_LIST.map(({ name, route }: HeaderList) => (
              <NavLink className="link-button" key={name} to={route}>
                <Text align="center" fontSize="x-large">
                  {name}
                </Text>
              </NavLink>
            ))}
          </ul>
          <div className="auth-wrapper">
            {isAuth ? (
              <HeaderDropdown />
            ) : (
              <Link to="/login">
                <Button
                  innerText="로그인 / 회원가입"
                  buttonColor="gil-blue"
                  textColor="white"
                  textSize="small"
                  hasBorder
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  ) : null;
};

export default Header;
