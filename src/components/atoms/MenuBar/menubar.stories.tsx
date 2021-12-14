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
      name: '퀘스트 전체',
      count: 49,
    },
    {
      name: 'Front-End',
      count: 49,
    },
    {
      name: 'Back-End',
      count: 49,
    },
  ],
};
