import { Story, Meta } from '@storybook/react';
import Login, { LoginProps } from '@src/pages/Login';

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
  argTypes: {
    isLogin: {
      type: 'boolean',
    },
  },
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const DefaultLogin = Template.bind({});
DefaultLogin.args = {
  isLogin: false,
};
