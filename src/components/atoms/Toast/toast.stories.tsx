import { Story, Meta } from '@storybook/react';
import Toast, { ToastProps } from '@src/components/atoms/Toast';

export default {
  title: 'Design System/Atoms/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: '토스트 팝업 컴포넌트',
      },
    },
  },
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  mainText: '해당 퀘스트가 등록되었습니다!',
  subText: '로드맵 리스트 확인',
  color: 'blue',
};

export const WarningToast = Template.bind({});
WarningToast.args = {
  mainText: '입력 정보를 전부 확인해주세요!',
  subText: '입력 정보 확인',
  color: 'red',
};
