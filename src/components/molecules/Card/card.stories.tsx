import { Story, Meta } from '@storybook/react';
import Card, { CardProps } from '@src/components/molecules/Card';

export default {
  title: 'Design System/Molecules/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'Card',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<CardProps> = (props) => <Card {...props} />;

export const questCard = Template.bind({});

questCard.args = {
  step: '입문',
  category: 'Front-End',
  name: 'React A to Z',
  exp: 100,
  participant: 123,
  author: '호랑이형님',
  level: 1,
};
