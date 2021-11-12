import { Story, Meta } from '@storybook/react';
import Form from '@src/atoms/Form';
import { FormProps } from './Form';

export default {
  title: 'Atoms/Form',
  component: Form,
  parameters: {
    docs: {
      description: {
        component: 'Form',
      },
    },
  },
  argTypes: {
    align: {
      options: ['row', 'column'],
    },
  },
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args}></Form>;

export const textareaForm = Template.bind({});
textareaForm.args = {
  title: '자기소개',
  align: 'column',
  children: (
    <textarea defaultValue="안녕하세요, 저는 프론트앤드 개발자입니다. 제이쿼리, 자바스크립트 등에 관심이 많습니다. 현재 IT 업계 ABC회사에서 근무하고 있습니다 or 안녕하세요 저는 대학교 4학년 컴퓨터공학과 가나다라마바사입니다."></textarea>
  ),
};

export const inputForm = Template.bind({});
inputForm.args = {
  title: '닉네임',
  align: 'row',
  children: <input type="text" placeholder="" defaultValue="가나다라마바사" />,
};

export const comboboxForm = Template.bind({});
comboboxForm.args = {
  title: '직군',
  align: 'row',
  children: (
    <select>
      <option>Frontend</option>
      <option>Backend</option>
    </select>
  ),
};
