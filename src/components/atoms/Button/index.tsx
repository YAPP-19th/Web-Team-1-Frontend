import React from 'react';
import cn from 'classnames';
import './style.scss';

export interface ButtonProps {
  innerText: string;
  buttonColor: 'gil-blue' | 'job-navy' | 'main-gray' | 'white' | 'kakao';
  textColor: 'main' | 'white' | 'gil-blue' | 'job-navy' | 'dark-gray';
  textSize?: 'small' | 'medium' | 'large';
  hasBorder?: boolean;
  hasShadow?: boolean;
  hasFixedWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  innerText,
  buttonColor,
  textColor,
  textSize = 'medium',
  hasBorder = false,
  hasShadow = false,
  hasFixedWidth = false,
}) => {
  return (
    <button
      className={cn(
        `_BUTTON_`,
        `button-color-${buttonColor}`,
        `text-color-${textColor}`,
        `text-size-${textSize}`,
        { hasBorder },
        hasFixedWidth ? `fixed-${textSize}` : '',
        { hasShadow },
      )}
      type="button"
    >
      {innerText}
    </button>
  );
};

export default Button;
