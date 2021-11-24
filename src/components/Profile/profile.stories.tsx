import { Story, Meta } from '@storybook/react';
import Profile from '@src/components/Profile';
import { ProfileProps } from './Profile';

export default {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    docs: {
      description: {
        component: 'Profile',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const defaultProfile = Template.bind({});

defaultProfile.args = {
  nickname: '가나다라마바사',
  level: 1,
  job: 'Frontend',
  selfDescription: '아아아',
};
