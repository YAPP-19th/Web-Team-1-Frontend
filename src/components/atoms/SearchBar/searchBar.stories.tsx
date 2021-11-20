import { Story, Meta } from '@storybook/react';
import SearchBar, { SearchBarProps } from '@src/components/atoms/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: '검색창 컴포넌트',
      },
    },
  },
  argTypes: {
    placeholder: {
      description: '검색창 기본 문구',
    },
    onSubmit: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {
  placeholder: '취업의 목표가 될 길잡이를 검색해 보세요.',
};
