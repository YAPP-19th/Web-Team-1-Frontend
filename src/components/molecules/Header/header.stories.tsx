import { Story, Meta } from '@storybook/react';
import Header, { HeaderProps } from '@src/components/molecules/Header';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Design System/Molecules/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Header',
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

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  isLogin: false,
};

export const LoginHeader = Template.bind({});
LoginHeader.args = {
  isLogin: true,
};