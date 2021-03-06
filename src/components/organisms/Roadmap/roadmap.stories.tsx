import { Story, Meta } from '@storybook/react';
import { Roadmap } from '@src/components/organisms';

export default {
  title: 'Design System/Organisms/Roadmap',
  component: Roadmap,
  parameters: {
    docs: {
      description: {
        component: 'Roadmap',
      },
    },
  },
} as Meta;

const contentList = [
  {
    id: 1,
    name: '코딩 스터디',
    isRealQuest: true,
  },
  {
    id: 2,
    name: 'OOO 자격증',
    isRealQuest: false,
  },
  {
    id: 3,
    name: '연합 동아리',
    isRealQuest: false,
  },
  {
    id: 4,
    name: 'javascript 스터디',
    isRealQuest: true,
  },
];

const Template: Story = () => (
  <Roadmap
    iconSize="medium"
    iconLevel={1}
    authorName="호랑이형님"
    category="Front-End"
    title="프론트엔드 개발자가 되는 법"
    questList={contentList}
  />
);

export const defaultCarousel = Template.bind({});
