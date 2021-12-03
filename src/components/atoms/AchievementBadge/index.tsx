import React from 'react';
import './style.scss';
import { AchievementIcon, Text } from '@src/components/atoms';

export interface AchievementBadgeProps {
  id?: number;
  size?: 'profile' | 'main';
  title: string;
  description?: string;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  id = 1,
  size = 'profile',
  title,
  description,
}) => {
  return (
    <div className="_ACHIEVEMENT_BADGE_">
      <AchievementIcon id={id} size={size} />
      <Text
        align="center"
        fontColor="gil-blue"
        fontSize="medium"
        fontWeight="bold"
      >
        {title}
      </Text>
      <Text align="center" fontColor="gray" fontSize="small">
        {description}
      </Text>
    </div>
  );
};

export default AchievementBadge;
