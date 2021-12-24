import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '@src/slices/authSlice';

/* Redux의 access-token 확인을 통해 
접근 권환이 필요한 라우팅에 사용하시면 됩니다. */

const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const { accessToken } = useSelector(authSelector);

  return accessToken ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
