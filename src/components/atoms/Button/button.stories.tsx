import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '@src/components/atoms/Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button',
      },
    },
  },
  argTypes: {
    innerText: {
      type: 'string',
    },
    buttonColor: {
      options: ['gil-blue', 'job-navy', 'main-gray', 'white', 'kakao'],
    },
    textColor: {
      options: ['main', 'white', 'gil-blue', 'job-navy', 'dark-gray'],
    },
    textSize: {
      options: ['small', 'medium', 'large'],
    },
    hasBorder: {
      type: 'boolean',
    },
    hasShadow: {
      type: 'boolean',
    },
    hasFixedWidth: {
      type: 'boolean',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const loginButton = Template.bind({});
export const startButton = Template.bind({});
export const createQuestButton = Template.bind({});
export const questInfoButton = Template.bind({});
export const kakaoButton = Template.bind({});
export const hashtagButton = Template.bind({});

loginButton.args = {
  innerText: '로그인 / 회원가입',
  buttonColor: 'gil-blue',
  textColor: 'white',
  textSize: 'small',
  hasBorder: true,
  hasShadow: false,
  hasFixedWidth: false,
};
startButton.args = {
  innerText: 'START',
  buttonColor: 'job-navy',
  textColor: 'white',
  textSize: 'large',
  hasBorder: true,
  hasShadow: false,
  hasFixedWidth: true,
};
createQuestButton.args = {
  innerText: '퀘스트 생성',
  buttonColor: 'white',
  textColor: 'gil-blue',
  textSize: 'medium',
  hasBorder: false,
  hasShadow: true,
  hasFixedWidth: false,
};
questInfoButton.args = {
  innerText: '퀘스트 상세정보',
  buttonColor: 'white',
  textColor: 'gil-blue',
  textSize: 'medium',
  hasBorder: true,
  hasShadow: false,
  hasFixedWidth: true,
};
kakaoButton.args = {
  innerText: '카카오로 1초만에 시작',
  buttonColor: 'kakao',
  textColor: 'main',
  textSize: 'medium',
  hasBorder: false,
  hasShadow: false,
  hasFixedWidth: false,
};
hashtagButton.args = {
  innerText: '# YAPP',
  buttonColor: 'main-gray',
  textColor: 'dark-gray',
  textSize: 'medium',
  hasBorder: false,
  hasShadow: false,
  hasFixedWidth: true,
};
