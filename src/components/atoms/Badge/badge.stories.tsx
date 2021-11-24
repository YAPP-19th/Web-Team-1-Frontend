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

export const introductionBadge = Template.bind({});
export const beginnerBadge = Template.bind({});
export const intermediateBadge = Template.bind({});
export const highBadge = Template.bind({});
export const masterBadge = Template.bind({});

introductionBadge.args = {
  step: '입문',
};
beginnerBadge.args = {
  step: '초급',
};
intermediateBadge.args = {
  step: '중급',
};
highBadge.args = {
  step: '고급',
};
masterBadge.args = {
  step: '통달',
};
