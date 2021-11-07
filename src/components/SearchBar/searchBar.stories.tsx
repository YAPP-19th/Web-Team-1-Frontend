import { Story, Meta } from '@storybook/react';
import SearchBar, { ISearchBarProps } from '@src/components/SearchBar';

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
  },
} as Meta;

const Template: Story<ISearchBarProps> = (args) => <SearchBar {...args} />;

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {
  placeholder: '취업의 목표가 될 길잡이를 검색해 보세요.',
};
