import React from 'react';
import cn from 'classnames';
import '@src/components/StorybookTutorial/button.scss';

export interface ButtonProps {
  label: string;
  size: 'small' | 'medium' | 'large';
  bgColor: 'gray' | 'green' | 'red';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  bgColor = 'gray',
  label,
  ...props
}) => {
  return (
    <button
      className={cn('defaultButton', size, bgColor)}
      {...props}
      type="button"
    >
      {label}
    </button>
  );
};
