import React, { ReactNode } from 'react';
import cn from 'classnames';
import './style.scss';
import { Text } from '@src/components/atoms';

export interface FormProps {
  title: string;
  align?: 'row' | 'column';
  titleAlign?: 'start' | 'center' | 'end';
  titleColor?: 'main' | 'gray' | 'white' | 'gil-blue' | 'job-navy';
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({
  children,
  title,
  align = 'row',
  titleAlign = 'start',
  titleColor,
}) => {
  return (
    <div className={cn('_FORM_', `flex-direction-${align}`)}>
      <Text
        className="_ITEM_"
        fontColor={titleColor}
        align={titleAlign}
        fontSize="medium"
        fontWeight="bold"
      >
        {title}
      </Text>
      <div className="_ITEM_">{children}</div>
    </div>
  );
};

export default Form;
