import { Story, Meta } from '@storybook/react';
import Floating from '@src/components/atoms/Floating';

export default {
  title: 'Design System/Atoms/Floating',
  component: Floating,
  parameters: {
    docs: {
      description: {
        component: '카카오톡 플로팅 버튼',
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

const Template: Story = (args) => <Floating {...args} />;

export const defaultFloating = Template.bind({});

defaultFloating.args = {};
