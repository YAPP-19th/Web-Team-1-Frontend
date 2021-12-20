import { Story, Meta } from '@storybook/react';
import CreateRoadmap from '@src/pages/CreateRoadmap';

export default {
  title: 'Pages/Create-Roadmap',
  component: CreateRoadmap,
  parameters: {
    docs: {
      description: {
        component: '로드맵 생성 페이지',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <CreateRoadmap {...args} />;

export const DefaultCreateRoadmap = Template.bind({});
DefaultCreateRoadmap.args = {};
