import { Story, Meta } from '@storybook/react';
import Header from '@src/components/molecules/Header';

export default {
  title: 'Design System/Molecules/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Header',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
