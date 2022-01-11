import React, { ChangeEvent } from 'react';
import { Text } from '@src/components/atoms';
import cn from 'classnames';
import './style.scss';

export interface TextareaProps {
  className?: string;
  hasLimit: boolean;
  limit?: number;
  readOnly?: boolean;
  value?: string;
  onDispatch?: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  className,
  hasLimit = true,
  limit = 120,
  readOnly = false,
  value = '',
  onDispatch,
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    if (onDispatch) onDispatch(input);
  };
  return (
    <div className={cn('_TEXTAREA_', className)}>
      <textarea
        className={readOnly ? 'readOnly' : 'readWrite'}
        maxLength={hasLimit ? limit : undefined}
        readOnly={readOnly}
        value={value}
        onChange={handleChange}
      />
      {hasLimit && (
        <div className="limit-count">
          <Text fontColor="gray">{`${limit}자`}</Text>
        </div>
      )}
    </div>
  );
};

export default Textarea;
