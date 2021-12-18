import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from '@src/components/atoms/Dropdown';
import { DIFFICULTY_LIST } from '@src/constants/dropdown';

export default {
  title: 'Design System/Atoms/Dropdown',
  component: Dropdown,
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

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const defaultDropdown = Template.bind({});
defaultDropdown.args = {
  placeholder: '난이도 설정',
  list: DIFFICULTY_LIST,
};
