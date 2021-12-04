import { Story, Meta } from '@storybook/react';
import DropDown, { DropDownProps } from '@src/components/atoms/DropDown';

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
  argTypes: {
    placeholder: {
      type: 'string',
    },
    selected: {
      type: 'string',
    },
    setSelected: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<DropDownProps> = (args) => <DropDown {...args} />;

export const defaultDropDown = Template.bind({});
defaultDropDown.args = {
  placeholder: '난이도 설정',
};
