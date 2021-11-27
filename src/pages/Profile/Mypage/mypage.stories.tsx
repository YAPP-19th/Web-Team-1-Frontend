import { Story, Meta } from '@storybook/react';
import { MypageProps } from './Mypage';
import Mypage from './Mypage';

export default {
  title: 'Pages/Profile/Mypage',
  component: Mypage,
  parameters: {
    docs: {
      description: {
        component: 'Mypage',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<MypageProps> = (args) => <Mypage {...args} />;

export const DefaultMypage = Template.bind({});

DefaultMypage.args = {
  nickname: '가나다라마바사',
  level: 1,
  job: 'Frontend',
  selfDescription: '아아아',
};
