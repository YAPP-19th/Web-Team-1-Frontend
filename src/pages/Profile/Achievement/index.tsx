import React from 'react';
import { AchievementIcon, Box, Text } from '@src/components/atoms';
import {
  exp_achievement,
  quest_achievement,
} from '@src/pages/Profile/achievement_data.json';
import './style.scss';

interface AchievementItem {
  id: number;
  title: string;
  description: string;
}

const Achievement: React.FC = () => {
  return (
    <div className="achievement-page">
      <section>
        <Text
          fontSize="large"
          fontColor="gil-blue"
          fontWeight="bold"
          align="center"
          className="achievement-title"
        >
          {exp_achievement.title}
        </Text>
        <Text fontSize="xx-small" align="center">
          {exp_achievement.description}
        </Text>
        <div className="achievement-icon-wrapper">
          {exp_achievement.list.map((achievement: AchievementItem) => (
            <div className="achievement-icon" key={achievement.id}>
              <AchievementIcon size="main" id={achievement.id} />
              <Box className="tooltip">
                <Text fontColor="gil-blue" align="center">
                  {achievement.title}
                </Text>
                <Text fontSize="xx-small" align="center">
                  {achievement.description}
                </Text>
              </Box>
            </div>
          ))}
        </div>
      </section>
      <span className="divider" />
      <section>
        <Text
          fontSize="large"
          fontColor="gil-blue"
          fontWeight="bold"
          align="center"
          className="achievement-title"
        >
          {quest_achievement.title}
        </Text>
        <Text fontSize="xx-small" align="center">
          {quest_achievement.description}
        </Text>
        <div className="achievement-icon-wrapper">
          {quest_achievement.list.map((achievement: AchievementItem) => (
            <div className="achievement-icon" key={achievement.id}>
              <AchievementIcon size="main" id={achievement.id} />
              <Box className="tooltip">
                <Text fontColor="gil-blue" align="center">
                  {achievement.title}
                </Text>
                <Text fontSize="xx-small" align="center">
                  {achievement.description}
                </Text>
              </Box>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievement;
