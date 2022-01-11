import { Story, Meta } from '@storybook/react';
import Pagination, { PaginationProps } from '@src/components/atoms/Pagination';

export default {
  title: 'Design System/Atoms/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'Pagination',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const defaultPagination = Template.bind({});

defaultPagination.args = {
  pageSize: 16,
  currentPage: 1,
  totalLength: 65,
};
