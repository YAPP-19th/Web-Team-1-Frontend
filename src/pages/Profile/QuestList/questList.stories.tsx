import { Story, Meta } from '@storybook/react';
import QuestList from '@src/pages/Profile/QuestList';

export default {
  title: 'Pages/Profile/QuestList',
  component: QuestList,
  parameters: {
    docs: {
      description: {
        component: 'QuestList',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story = (args) => <QuestList {...args} />;

export const DefaultQuestList = Template.bind({});

DefaultQuestList.args = {};
