import { Story, Meta } from '@storybook/react';
import Icon, { IconProps } from '@src/components/atoms/Icon';

export default {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon',
      },
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'profile'],
    },
    level: {
      options: [1, 2, 3, 4, 5],
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const lv1Icon = Template.bind({});
export const lv2Icon = Template.bind({});
export const lv3Icon = Template.bind({});
export const lv4Icon = Template.bind({});
export const lv5Icon = Template.bind({});

lv1Icon.args = {
  size: 'small',
  level: 1,
};
lv2Icon.args = {
  size: 'medium',
  level: 2,
};
lv3Icon.args = {
  size: 'large',
  level: 3,
};
lv4Icon.args = {
  size: 'profile',
  level: 4,
};
lv5Icon.args = {
  size: 'profile',
  level: 5,
};
