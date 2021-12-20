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
  step: '입문',
  category: 'Front-End',
  name: 'React A to Z',
  exp: 100,
  participant: 123,
  author: '호랑이형님',
  level: 1,
  progress: 100,
};
