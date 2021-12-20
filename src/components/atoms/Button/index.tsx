import React from 'react';
import cn from 'classnames';
import './style.scss';

export interface ButtonProps {
  className?: string;
  innerText: string;
  buttonColor: 'gil-blue' | 'job-navy' | 'main-gray' | 'white' | 'kakao';
  textColor: 'main' | 'white' | 'gil-blue' | 'job-navy' | 'dark-gray';
  textSize?: 'small' | 'medium' | 'large';
  hasBorder?: boolean;
  hasShadow?: boolean;
  hasFixedWidth?: boolean;
  onHover?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  innerText,
  buttonColor,
  textColor,
  textSize = 'medium',
  hasBorder = false,
  hasShadow = false,
  hasFixedWidth = false,
  handleClick,
  onHover = true,
}) => {
  return (
    <button
      className={cn(
        `_BUTTON_`,
        className,
        `button-color-${buttonColor}`,
        `text-color-${textColor}`,
        `text-size-${textSize}`,
        { hasBorder },
        hasFixedWidth ? `fixed-${textSize}` : '',
        { hasShadow },
        onHover ? 'onHover' : '',
      )}
      type="button"
      onClick={handleClick}
    >
      {innerText}
    </button>
  );
};

export default Button;
