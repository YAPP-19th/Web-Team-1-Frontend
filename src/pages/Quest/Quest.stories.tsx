import { Story, Meta } from '@storybook/react';
import Quest from '@src/pages/Quest';

export default {
  title: 'Pages/Quest',
  component: Quest,
  parameters: {
    docs: {
      description: {
        component: '로드맵•퀘스트 페이지',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Quest {...args} />;

export const DefaultQuest = Template.bind({});
DefaultQuest.args = {};
