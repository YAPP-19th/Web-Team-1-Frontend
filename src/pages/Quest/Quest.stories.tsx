import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
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
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Quest {...args} />;

export const DefaultQuest = Template.bind({});
DefaultQuest.args = {};
