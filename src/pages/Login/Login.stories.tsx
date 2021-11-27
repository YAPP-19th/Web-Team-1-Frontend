import { Story, Meta } from '@storybook/react';
import Login from '@src/pages/Login';

export default {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    docs: {
      description: {
        component: '로그인 페이지',
      },
    },
  },
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = (args) => <Login {...args} />;

export const DefaultLogin = Template.bind({});
DefaultLogin.args = {};
