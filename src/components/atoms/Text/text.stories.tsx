import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from '@src/components/atoms/Text';

export default {
  title: 'Design System/Atoms/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'Text',
      },
    },
  },
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
    },
    fontColor: {
      options: ['main', 'gray', 'white', 'gil-blue', 'job-navy'],
    },
    fontSize: {
      options: [
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
        'xx-large',
        'xxx-large',
        'xxxx-large',
      ],
    },
    fontWeight: {
      options: ['light', 'regular', 'medium', 'bold'],
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<TextProps> = (props) => (
  <Text {...props}>취업의 바다에서 길잡이가 되어주다, GilJOB</Text>
);

export const defaultText = Template.bind({});

defaultText.args = {
  align: 'start',
  fontColor: 'main',
  fontSize: 'small',
  fontWeight: 'medium',
};
