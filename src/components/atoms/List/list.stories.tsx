import { Story, Meta } from '@storybook/react';
import { List } from '@src/components/atoms';
import questData from '@src/pages/QuestCreate/quest_data.json';

export default {
  title: 'Design System/Atoms/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: '리스트 컴포넌트',
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <List {...args} listData={questData.questMain.list} />
);

export const DefaultList = Template.bind({});
DefaultList.args = {};
