import React, { ReactNode } from 'react';
import cn from 'classnames';
import './style.scss';

export interface BoxProps {
  backgroundColor?: string;
  children: ReactNode;
}

const Box: React.FC<BoxProps> = ({ backgroundColor = 'white', children }) => {
  return (
    <div className={cn('_BOX_', `background-color-${backgroundColor}`)}>
      {children}
    </div>
  );
};

export default Box;
