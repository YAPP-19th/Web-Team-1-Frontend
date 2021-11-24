import { Story, Meta } from '@storybook/react';
import Badge, { BadgeProps } from '@src/components/atoms/Badge';

export default {
  title: 'Design System/Atoms/Badge',
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
