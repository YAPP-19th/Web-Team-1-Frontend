import React from 'react';
import cn from 'classnames';
import './style.scss';

export interface FloatingBarProps {
  className?: string;
}

const FloatingBar: React.FC<FloatingBarProps> = ({ className, children }) => {
  return <div className={cn('_FLOATING_BAR_', className)}>{children}</div>;
};

export default FloatingBar;
