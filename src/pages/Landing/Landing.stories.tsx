import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from '@src/pages/Landing';

export default {
  title: 'Pages/Landing',
  component: Landing,
  parameters: {
    docs: {
      description: {
        component: '랜딩 페이지',
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

const Template: Story = (args) => <Landing {...args} />;

export const DefaultLanding = Template.bind({});
DefaultLanding.args = {};
