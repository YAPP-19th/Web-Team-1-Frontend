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

export const defaultText = Template.bind({});

defaultText.args = {
  step: '입문',
  category: 'Front-End',
  name: 'React',
  exp: 100,
  participant: 123,
  author: '호랑이형님',
};
