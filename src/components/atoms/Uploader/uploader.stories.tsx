import { Story, Meta } from '@storybook/react';
import Uploader from '@src/components/atoms/Uploader';

export default {
  title: 'Design System/Atoms/Uploader',
  component: Uploader,
  parameters: {
    docs: {
      description: {
        component: '이미지 업로더',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Uploader {...args} />;

export const DefaultUploader = Template.bind({});
DefaultUploader.args = {};
