import React from 'react';
import cn from 'classnames';
import './style.scss';
import { Text } from '@src/components/atoms';

export interface BadgeProps {
  className?: string;
  step: string;
  align?: 'start' | 'center' | 'end';
}

const Badge: React.FC<BadgeProps> = ({ className, step, align }) => {
  return (
    <div className={cn('_BADGE_', className, `badge-align-${align}`)}>
      <Text
        align="center"
        fontColor="white"
        fontSize="small"
        fontWeight="regular"
      >
        {step}
      </Text>
    </div>
  );
};

export default Badge;
