import { Story, Meta } from '@storybook/react';
import Toast from '@src/components/atoms/Toast';

export default {
  title: 'Design System/Atoms/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: '퀘스트 완료 토스트 팝업 컴포넌트',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Toast {...args} />;

export const defaultInput = Template.bind({});
defaultInput.args = {};
