import React from 'react';
import cn from 'classnames';
import { Text } from '@src/components/atoms';
import toastArrow from '@src/assets/images/toast_arrow.svg';
import './style.scss';

export interface ToastProps {
  mainText: string;
  subText: string;
  color?: 'blue' | 'red';
}

const Toast: React.FC<ToastProps> = ({ mainText, subText, color = 'blue' }) => {
  return (
    <div className={cn('_TOAST_', `toast-background-${color}`)}>
      <div className="toast-wrapper">
        <Text fontColor="white" fontSize="medium" fontWeight="bold">
          {mainText}
        </Text>
        <div>
          <Text fontColor="white" fontWeight="bold">
            {subText}
          </Text>
          <img alt="toast-arrow" src={toastArrow} />
        </div>
      </div>
    </div>
  );
};

export default Toast;
