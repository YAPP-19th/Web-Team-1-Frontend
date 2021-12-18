import { Story, Meta } from '@storybook/react';
import Hashtag, { HashtagProps } from '@src/components/molecules/Hashtag';

export default {
  title: 'Design System/Molecules/Hashtag',
  component: Hashtag,
  parameters: {
    docs: {
      description: {
        component: 'Hashtag (최대 10개)',
      },
    },
  },
} as Meta;

const Template: Story<HashtagProps> = (args) => <Hashtag {...args} />;

export const DefaultHashtag = Template.bind({});
DefaultHashtag.args = {};
