import { Story, Meta } from '@storybook/react';
import Loading from '@src/components/atoms/Loading';

export default {
  title: 'Design System/Atoms/Loading',
  component: Loading,
  parameters: {
    docs: {
      description: {
        component: 'Loading',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Loading {...args} />;

export const introductionLoading = Template.bind({});
