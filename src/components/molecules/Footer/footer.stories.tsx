import { Story, Meta } from '@storybook/react';
import Footer from '@src/components/molecules/Footer';

export default {
  title: 'Design System/Molecules/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Footer',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {};
