import { Story, Meta } from '@storybook/react';
import Box from '@src/components/atoms/Box';
import { BoxProps } from './Box';
import AchievementBadge from '@src/components/atoms/AchievementBadge';

export default {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Box',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const defaultBox = Template.bind({});

defaultBox.args = {
  children: (
    <AchievementBadge
      title="5급 항해사"
      description="길잡 신규가입 시 달성"
    ></AchievementBadge>
  ),
};
