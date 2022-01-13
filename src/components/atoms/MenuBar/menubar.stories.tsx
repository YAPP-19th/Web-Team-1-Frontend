import { Story, Meta } from '@storybook/react';
import MenuBar, { MenuBarProps } from '@src/components/atoms/MenuBar';

export default {
  title: 'Design System/Atoms/MenuBar',
  component: MenuBar,
  parameters: {
    docs: {
      description: {
        component: 'MenuBar',
      },
    },
  },
} as Meta;

const Template: Story<MenuBarProps> = (args) => <MenuBar {...args} />;

export const defaultMenuBar = Template.bind({});

defaultMenuBar.args = {
  menuList: [
    {
      index: 0,
      value: '퀘스트 전체',
      count: 49,
    },
    {
      index: 1,
      value: 'Front-End',
      count: 49,
    },
    {
      index: 2,
      value: 'Back-End',
      count: 49,
    },
  ],
};
