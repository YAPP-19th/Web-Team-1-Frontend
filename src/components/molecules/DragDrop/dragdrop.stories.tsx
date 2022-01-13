import { Story, Meta } from '@storybook/react';
import DragDrop, { DragDropProps } from '@src/components/molecules/DragDrop';

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

const Template: Story<DragDropProps> = (args) => <DragDrop {...args} />;

export const DefaultDragDrop = Template.bind({});
DefaultDragDrop.args = {
  hasInput: true,
  list: [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
  ],
};
