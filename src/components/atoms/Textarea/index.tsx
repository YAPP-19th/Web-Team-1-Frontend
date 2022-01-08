import React, { ChangeEvent } from 'react';
import { Text } from '@src/components/atoms';
import cn from 'classnames';
import './style.scss';

export interface TextareaProps {
  className?: string;
  hasLimit: boolean;
  limit?: number;
  readOnly?: boolean;
  defaultValue?: string;
  onDispatch?: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  className,
  hasLimit = true,
  limit = 120,
  readOnly = false,
  defaultValue = '',
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
        defaultValue={defaultValue}
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
