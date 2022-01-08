import React, { lazy } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './style.scss';

const LoginBox = lazy(() => import('./LoginBox'));
const RegisterBox = lazy(() => import('./RegisterBox'));

const Login: React.FC = () => {
  return (
    <section className="login">
      <div className="login-wrapper">
        <Route exact path="/login" component={LoginBox} />
        <Route exact path="/login/signup" component={RegisterBox} />
        <Redirect to="/login" />
      </div>
      <div className="login-background" />
    </section>
  );
};

export default Login;
