import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Text } from '@src/components/atoms';
import './style.scss';

export interface InputProps {
  className?: string;
  hasCount?: boolean;
  inputHeight?: 'narrow' | 'wide';
  placeholder?: string;
  placeholderColor?: 'gray' | 'blue';
  handleChange: (value: string) => void;
  onSubmit?: () => void;
}

const Input: React.FC<InputProps> = ({
  className,
  hasCount = true,
  inputHeight = 'narrow',
  placeholder,
  placeholderColor = 'gray',
  handleChange,
  onSubmit,
}) => {
  const [count, setCount] = useState(0);
  const handleCount = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setCount(inputValue.length);
      handleChange(inputValue);
    },
    [handleChange],
  );
  const handleEnter = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (onSubmit) onSubmit();
      }
    },
    [onSubmit],
  );

  return (
    <div
      className={cn(
        'input-container',
        className,
        `input-height-${inputHeight}`,
      )}
    >
      <input
        className={cn('input', `input-placeholder-${placeholderColor}`)}
        type="text"
        placeholder={placeholder}
        onChange={handleCount}
        onKeyPress={handleEnter}
        maxLength={hasCount ? 20 : undefined}
      />
      {hasCount && (
        <Text
          className="input-count"
          align="center"
          fontColor="gray"
          fontWeight="regular"
        >
          {count} / 20
        </Text>
      )}
    </div>
  );
};

export default Input;
