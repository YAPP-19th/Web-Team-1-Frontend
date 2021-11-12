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

const Template: Story<ProfileProps> = () => <Profile />;

export const defaultProfile = Template.bind({});

defaultProfile.args = {};
