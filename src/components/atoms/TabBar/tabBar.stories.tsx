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
    divider: {
      type: 'boolean',
    },
  },
} as Meta;

const Template: Story<TabBarProps> = (args) => <TabBar {...args} />;

export const defaultTabBar = Template.bind({});

defaultTabBar.args = {
  tabList: [
    {
      name: '프로필',
    },
    {
      name: '퀘스트',
    },
    {
      name: '로드맵',
    },
    {
      name: '항해 업적',
    },
  ],
};
