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
      position: '퀘스트 전체',
      questCount: 49,
    },
    {
      position: 'Front-End',
      questCount: 49,
    },
    {
      position: 'Back-End',
      questCount: 49,
    },
  ],
};
