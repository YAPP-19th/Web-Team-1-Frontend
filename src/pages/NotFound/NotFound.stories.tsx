import { Story, Meta } from '@storybook/react';
import NotFound from '@src/pages/NotFound';

export default {
  title: 'Pages/NotFound',
  component: NotFound,
  parameters: {
    docs: {
      description: {
        component: '404 페이지',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <NotFound {...args} />;

export const DefaultNotFound = Template.bind({});
