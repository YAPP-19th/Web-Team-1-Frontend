import { Story, Meta } from '@storybook/react';
import Form, { FormProps } from '@src/components/atoms/Form';

export default {
  title: 'Design System/Atoms/Form',
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
    titleColor: {
      options: ['main', 'gray', 'white', 'gil-blue', 'job-navy'],
    },
    titleAlign: {
      options: ['start', 'center', 'end'],
    },
  },
} as Meta;

const TextAreaTemplate: Story<FormProps> = (args) => (
  <Form {...args}>
    {' '}
    <textarea defaultValue="안녕하세요, 저는 프론트앤드 개발자입니다. 제이쿼리, 자바스크립트 등에 관심이 많습니다. 현재 IT 업계 ABC회사에서 근무하고 있습니다 or 안녕하세요 저는 대학교 4학년 컴퓨터공학과 가나다라마바사입니다." />
  </Form>
);
const InputTemplate: Story<FormProps> = (args) => (
  <Form {...args}>
    <input type="text" placeholder="" defaultValue="가나다라마바사" />
  </Form>
);
const ComboboxTemplate: Story<FormProps> = (args) => (
  <Form {...args}>
    {' '}
    <select>
      <option>Frontend</option>
      <option>Backend</option>
    </select>
  </Form>
);

export const textareaForm = TextAreaTemplate.bind({});
textareaForm.args = {
  title: '자기소개',
  align: 'column',
};

export const inputForm = InputTemplate.bind({});
inputForm.args = {
  title: '닉네임',
  align: 'row',
};

export const comboboxForm = InputTemplate.bind({});
comboboxForm.args = {
  title: '직군',
  align: 'row',
};
