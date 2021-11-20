import React, { ReactComponentElement, ReactNode } from 'react';
import cn from 'classnames';
import Text from '../Text';
import './style.scss';

export interface FormProps {
  title: string;
  align?: 'row' | 'column';
  titleColor?: 'main' | 'gray' | 'white' | 'gil-blue' | 'job-navy';
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({
  children,
  title,
  align = 'row',
  titleColor,
}) => {
  return (
    <div className={cn('_FORM_', `form-flex-direction-${align}`)}>
      <Text fontColor={titleColor} fontSize="medium" fontWeight="bold">
        {title}
      </Text>
      {children}
    </div>
  );
};

export default Form;
