import { Story, Meta } from '@storybook/react';
import ProfileQuestCard, {
  ProfileQuestCardProps,
} from '@src/components/molecules/ProfileQuestCard';

export default {
  title: 'Design System/Molecules/ProfileQuestCard',
  component: ProfileQuestCard,
  parameters: {
    docs: {
      description: {
        component: 'ProfileQuestCard',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<ProfileQuestCardProps> = (props) => (
  <ProfileQuestCard {...props} />
);

export const defaultProfileQuestCard = Template.bind({});

defaultProfileQuestCard.args = {
  status: 0,
  difficulty: 0,
  position: 'Front-End',
  name: 'React A to Z',
  participantCount: 123,
  progress: 100,
  writer: {
    id: 1,
    nickname: '호랑이형님',
    position: 'Back-end',
    point: 300,
    intro: '안녕하세요 호랑이형님입니다.',
  },
};
