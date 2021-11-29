import { Story, Meta } from '@storybook/react';
import DropDown from '@src/components/atoms/DropDown';

export default {
  title: 'Design System/Atoms/DropDown',
  component: DropDown,
  parameters: {
    docs: {
      description: {
        component: '드롭다운',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<any> = (args) => <DropDown {...args} />;

export const defaultDropDown = Template.bind({});
defaultDropDown.args = {};
