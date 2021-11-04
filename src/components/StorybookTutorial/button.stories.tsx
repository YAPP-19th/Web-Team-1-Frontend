import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@src/components/StorybookTutorial';

export default {
  title: 'Components/TutorialButton',
  component: Button,
  // docs에 들어갈 설명
  parameters: {
    docs: {
      description: {
        component: 'Component에 대한 설명',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Component Props에 대한 설명',
    },
    size: {
      description: 'Component Props에 대한 설명',
    },
    bgColor: {
      description: 'Component Props에 대한 설명',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: 'default',
  size: 'medium',
  bgColor: 'gray',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  ...DefaultButton.args,
  label: 'small',
  size: 'small',
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  ...DefaultButton.args,
  label: 'medium',
  size: 'medium',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  ...DefaultButton.args,
  label: 'large',
  size: 'large',
};
