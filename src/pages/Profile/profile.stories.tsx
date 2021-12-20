import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from '@src/pages/Profile';

export default {
  title: 'Pages/Profile',
  component: Profile,
  parameters: {
    docs: {
      description: {
        component: '프로필 페이지',
      },
    },
  },
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Profile {...args} />;

export const DefaultProfile = Template.bind({});
DefaultProfile.args = {};
