import React from 'react';
import cn from 'classnames';
import './style.scss';

export interface IconProps {
  // small: 3.6rem, medium: 4.4rem, large: 4.8rem, profile: 20rem
  size: 'small' | 'medium' | 'large' | 'profile';
  level: 1 | 2 | 3 | 4 | 5;
}

const Icon: React.FC<IconProps> = ({ size, level = 1 }) => {
  return (
    <div className={cn(`_ICON_`, `icon-size-${size}`, `icon-level-${level}`)} />
  );
};

export default Icon;
