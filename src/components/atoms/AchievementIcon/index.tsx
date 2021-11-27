import React from 'react';
import cn from 'classnames';
import './style.scss';

export interface AchievementIconProps {
  // profile: 12rem, main: 14.4rem
  size: 'profile' | 'main';
  id: number;
}

const AchievementIcon: React.FC<AchievementIconProps> = ({ size, id = 1 }) => {
  return (
    <div
      className={cn(`_ACHIVEMENT_ICON_`, `icon-size-${size}`, `icon-id-${id}`)}
    />
  );
};

export default AchievementIcon;
