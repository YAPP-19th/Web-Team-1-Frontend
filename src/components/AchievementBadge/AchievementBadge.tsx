import React from 'react';
import './style.scss';
import Text from '@src/atoms/Text';
import achievement from '@src/assets/images/achievement.svg';

export interface AchievementBadgeProps {
  title: string;
  description?: string;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
}) => {
  return (
    <div className="_ACHIEVEMENT_BADGE_">
      {/* <Icon></Icon> */}
      <img
        className="Lv1Image"
        src={achievement}
        alt="achievementImage"
        width="200"
        height="200"
      />
      <Text
        align="center"
        fontColor="gil-blue"
        fontSize="medium"
        fontWeight="bold"
        lineHeight="wide"
      >
        {title}
      </Text>
      <Text align="center" fontColor="gray" fontSize="small" lineHeight="wide">
        {description}
      </Text>
    </div>
  );
};

export default AchievementBadge;
