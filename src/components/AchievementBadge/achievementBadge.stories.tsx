import { Story, Meta } from '@storybook/react';
import AchievementBadge from '@src/components/AchievementBadge';
import { AchievementBadgeProps } from './AchievementBadge';

export default {
  title: 'Components/AchievementBadge',
  component: AchievementBadge,
  parameters: {
    docs: {
      description: {
        component: 'AchievementBadge',
      },
    },
  },
  argTypes: {
    title: {
      description: '업적 이름',
    },
    description: {
      description: '업적 설명',
    },
  },
} as Meta;

const Template: Story<AchievementBadgeProps> = (props) => (
  <AchievementBadge {...props} />
);

export const defaultAchievementBadge = Template.bind({});

defaultAchievementBadge.args = {
  title: '5급 항해사',
  description: '길잡 신규가입 시 달성',
};
