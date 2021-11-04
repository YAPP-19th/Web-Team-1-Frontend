import { Story, Meta } from '@storybook/react';
import Header, { IHeaderProps } from '@src/components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Header',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  isLogin: false,
};

export const LoginHeader = Template.bind({});
LoginHeader.args = {
  isLogin: true,
};
