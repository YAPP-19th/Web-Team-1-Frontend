import React from 'react';
import { Text } from '@src/components/atoms';
import cn from 'classnames';
import './style.scss';

export interface TextareaProps {
  className?: string;
  hasLimit: boolean;
  limit?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  className,
  hasLimit = true,
  limit = 120,
}) => {
  return (
    <div className={cn('_TEXTAREA_', className)}>
      <textarea maxLength={hasLimit ? limit : undefined} />
      {hasLimit && (
        <div className="limit-count">
          <Text fontColor="gray">{`${limit}자`}</Text>
        </div>
      )}
    </div>
  );
};

export default Textarea;
