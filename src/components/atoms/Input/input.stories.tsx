import { Story, Meta } from '@storybook/react';
import Input, { InputProps } from '@src/components/atoms/Input';

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: '인풋 컴포넌트',
      },
    },
  },
  argTypes: {
    placeholder: {
      type: 'string',
    },
    placeholderColor: {
      options: ['gray', 'blue'],
    },
    inputHeight: {
      options: ['narrow', 'wide'],
    },
    hasCount: {
      options: [true, false],
    },
    count: {
      type: 'number',
    },
    className: {
      table: {
        disable: true,
      },
    },
    handleChange: {
      table: {
        disable: true,
      },
    },
    onSubmit: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const defaultInput = Template.bind({});
defaultInput.args = {};

export const placeholderInput = Template.bind({});
placeholderInput.args = {
  placeholder: '서브 퀘스트를 입력하세요.',
};
