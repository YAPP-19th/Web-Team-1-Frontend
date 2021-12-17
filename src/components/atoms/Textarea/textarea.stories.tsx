import { Story, Meta } from '@storybook/react';
import Textarea, { TextareaProps } from '@src/components/atoms/Textarea';

export default {
  title: 'Design System/Atoms/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: 'Textarea',
      },
    },
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    hasLimit: {
      type: 'boolean',
    },
    limit: {
      type: 'number',
    },
  },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const DefaultTextarea = Template.bind({});
DefaultTextarea.args = {};
