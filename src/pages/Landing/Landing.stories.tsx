import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from '@src/pages/Landing';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';

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

const Template: Story = (args) => (
  <>
    <Header isLogin={false} />
    <Landing {...args} />
    <Footer />
  </>
);

export const DefaultLanding = Template.bind({});
DefaultLanding.args = {};
