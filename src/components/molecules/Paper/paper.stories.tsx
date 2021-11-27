import { Story, Meta } from '@storybook/react';
import Paper, { PaperProps } from '@src/components/molecules/Paper';

export default {
  title: 'Design System/Molecules/Paper',
  component: Paper,
  parameters: {
    docs: {
      description: {
        component: 'Paper',
      },
    },
  },
} as Meta;

const Template: Story<PaperProps> = (args) => <Paper {...args} />;

export const defaultPaper = Template.bind({});

defaultPaper.args = {
  category: 'Front-End',
  name: '프론트엔드 개발자가 되는 법',
  level: 1,
  author: '호랑이형님',
};
