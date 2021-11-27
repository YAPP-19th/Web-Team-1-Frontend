import { Story, Meta } from '@storybook/react';
import AchievementIcon, {
  AchievementIconProps,
} from '@src/components/atoms/AchievementIcon';

export default {
  title: 'Design System/Atoms/AchievementIcon',
  component: AchievementIcon,
  parameters: {
    docs: {
      description: {
        component: 'AchievementIcon',
      },
    },
  },
  argTypes: {
    size: {
      options: ['profile', 'main'],
    },
    id: {
      options: [1, 2],
    },
  },
} as Meta;

const Template: Story<AchievementIconProps> = (args) => (
  <AchievementIcon {...args} />
);

export const id1Icon = Template.bind({});
export const id2Icon = Template.bind({});

id1Icon.args = {
  size: 'profile',
  id: 1,
};
id2Icon.args = {
  size: 'main',
  id: 2,
};
