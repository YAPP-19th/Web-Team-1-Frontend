import { Story, Meta } from '@storybook/react';
import Board, { BoardProps } from '@src/components/atoms/Board';

export default {
  title: 'Design System/Atoms/Board',
  component: Board,
  parameters: {
    docs: {
      description: {
        component: 'Board',
      },
    },
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<BoardProps> = (args) => <Board {...args} />;

export const defaultBoard = Template.bind({});
defaultBoard.args = {
  width: '30rem',
  height: '20rem',
};
