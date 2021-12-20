import { Story, Meta } from '@storybook/react';
import TabBar, { TabBarProps } from '@src/components/atoms/TabBar';

export default {
  title: 'Design System/Atoms/TabBar',
  component: TabBar,
  parameters: {
    docs: {
      description: {
        component: 'TabBar',
      },
    },
  },
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
    },
    hasDivider: {
      type: 'boolean',
    },
    selected: {
      type: 'number',
    },
  },
} as Meta;

const Template: Story<TabBarProps> = (args) => <TabBar {...args} />;

export const defaultTabBar = Template.bind({});

defaultTabBar.args = {
  tabList: [
    {
      name: '진행중 퀘스트',
    },
    {
      name: '완료된 퀘스트',
    },
    {
      name: '생성한 퀘스트',
    },
  ],
  align: 'center',
  hasDivider: true,
  selected: 0,
};
