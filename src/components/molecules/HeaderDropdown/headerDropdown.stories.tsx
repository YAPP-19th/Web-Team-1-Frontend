import { Story, Meta } from '@storybook/react';
import HeaderDropdown from '@src/components/molecules/HeaderDropdown';

export default {
  title: 'Design System/Molecules/HeaderDropdown',
  component: HeaderDropdown,
  parameters: {
    docs: {
      description: {
        component: 'HeaderDropdown',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <HeaderDropdown {...args} />;

export const DefaultHeaderDropdown = Template.bind({});
