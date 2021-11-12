import React from 'react';
import cn from 'classnames';
import './style.scss';

export interface BoxProps {}

const Box: React.FC<BoxProps> = ({ children }) => {
  return <div className="_BOX_">{children}</div>;
};

export default Box;
