import { Story, Meta } from '@storybook/react';
import Badge from '@src/components/atoms/Badge';
import { BadgeProps } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Badge',
      },
    },
  },
  argTypes: {
    align: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const defaultBadge = Template.bind({});

defaultBadge.args = {
  step: '입문',
};
