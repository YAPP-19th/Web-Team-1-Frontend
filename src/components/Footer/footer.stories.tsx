import { Story, Meta } from '@storybook/react';
import Footer from '@src/components/Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Footer',
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {};
