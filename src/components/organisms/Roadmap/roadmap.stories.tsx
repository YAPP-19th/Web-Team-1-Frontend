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

const Template: Story = () => (
  <Roadmap
    iconSize="medium"
    iconLevel={1}
    authorName="호랑이형님"
    category="Front-End"
    title="프론트엔드 개발자가 되는 법"
    questList={['코딩 스터디', '연합동아리', 'javascript 공부']}
  />
);

export const defaultCarousel = Template.bind({});
