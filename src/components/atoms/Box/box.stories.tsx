import { Story, Meta } from '@storybook/react';
import Box, { BoxProps } from '@src/components/atoms/Box';
import AchievementBadge from '@src/components/atoms/AchievementBadge';

export default {
  title: 'Design System/Atoms/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Box',
      },
    },
  },
  argTypes: {
    backgroundColor: {
      options: ['main', 'white', 'gil-blue', 'job-navy', 'gray'],
    },
  },
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <Box {...args}>
    <AchievementBadge title="5급 항해사" description="길잡 신규가입 시 달성" />
  </Box>
);

export const defaultBox = Template.bind({});

defaultBox.args = {
  backgroundColor: 'white',
};
