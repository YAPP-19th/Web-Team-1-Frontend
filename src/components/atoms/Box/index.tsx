import React, { ReactNode } from 'react';
import cn from 'classnames';
import './style.scss';

export interface BoxProps {
  backgroundColor?: 'main' | 'white' | 'gil-blue' | 'job-navy' | 'gray';
  children: ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({
  backgroundColor = 'white',
  children,
  className = '',
}) => {
  return (
    <div
      className={cn('_BOX_', className, `background-color-${backgroundColor}`)}
    >
      {children}
    </div>
  );
};

export default Box;
