import { Story, Meta } from '@storybook/react';
import DragDrop from '@src/components/molecules/DragDrop';

export default {
  title: 'Design System/Molecules/DragDrop',
  component: DragDrop,
  parameters: {
    docs: {
      description: {
        component: 'DragDrop',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <DragDrop {...args} />;

export const DefaultDragDrop = Template.bind({});
DefaultDragDrop.args = {};
