import { Story, Meta } from '@storybook/react';
import CreateQuest from '@src/pages/CreateQuest';

export default {
  title: 'Pages/Create-Quest',
  component: CreateQuest,
  parameters: {
    docs: {
      description: {
        component: '퀘스트 생성 페이지',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <CreateQuest {...args} />;

export const DefaultCreateQuest = Template.bind({});
DefaultCreateQuest.args = {};
