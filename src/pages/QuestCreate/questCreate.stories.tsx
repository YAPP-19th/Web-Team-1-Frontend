import { Story, Meta } from '@storybook/react';
import QuestCreate from '@src/pages/QuestCreate';

export default {
  title: 'Pages/Quest-Create',
  component: QuestCreate,
  parameters: {
    docs: {
      description: {
        component: '퀘스트 생성 페이지',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <QuestCreate {...args} />;

export const DefaultQuestCreate = Template.bind({});
DefaultQuestCreate.args = {};
