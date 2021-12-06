import { Story, Meta } from '@storybook/react';
import Editor, { EditorProps } from '@src/components/atoms/Editor';

export default {
  title: 'Design System/Atoms/Editor',
  component: Editor,
  parameters: {
    docs: {
      description: {
        component: '글쓰기 에디터',
      },
    },
  },
  argTypes: {
    height: {
      description: 'rem 단위로 받습니다.',
      type: 'number',
    },
  },
} as Meta;

const Template: Story<EditorProps> = (args) => <Editor {...args} />;

export const defaultEditor = Template.bind({});
defaultEditor.args = {
  height: 30,
};
