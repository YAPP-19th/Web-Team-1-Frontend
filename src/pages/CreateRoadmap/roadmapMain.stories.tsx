import { Story, Meta } from '@storybook/react';
import RoadmapCreate from '@src/pages/CreateRoadmap';

export default {
  title: 'Pages/Roadmap-Create',
  component: RoadmapCreate,
  parameters: {
    docs: {
      description: {
        component: '로드맵 생성 페이지',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <RoadmapCreate {...args} />;

export const DefaultRoadmapCreate = Template.bind({});
DefaultRoadmapCreate.args = {};
