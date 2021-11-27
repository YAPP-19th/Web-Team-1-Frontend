import { Story, Meta } from '@storybook/react';
import Author, { AuthorProps } from '@src/components/molecules/Author';

export default {
  title: 'Design System/Molecules/Author',
  component: Author,
  parameters: {
    docs: {
      description: {
        component: 'Author',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<AuthorProps> = (props) => <Author {...props} />;

export const defaultAuthor = Template.bind({});

defaultAuthor.args = {
  authorName: '호랑이형님',
  iconSize: 'small',
  iconLevel: 1,
};
