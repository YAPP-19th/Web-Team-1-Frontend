import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Text } from '@src/components/atoms';
import './style.scss';

export interface InputProps {
  className?: string;
  hasCount?: boolean;
  count?: number;
  inputHeight?: 'narrow' | 'wide';
  placeholder?: string;
  placeholderColor?: 'gray' | 'blue';
  onSubmit?: (value: string | number) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  hasCount = true,
  count = 20,
  inputHeight = 'narrow',
  placeholder,
  placeholderColor = 'gray',
  onSubmit,
}) => {
  const [input, setInput] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  }, []);

  // Enter 키 인식
  const handleEnter = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        setInput('');
        if (onSubmit) onSubmit(input);
      }
    },
    [input, onSubmit],
  );

  return (
    <div className={cn('_INPUT_', className, `input-height-${inputHeight}`)}>
      <input
        className={`input-placeholder-${placeholderColor}`}
        type="text"
        value={input}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleEnter}
        maxLength={hasCount ? count : undefined}
      />
      {hasCount && (
        <Text
          className="input-count"
          align="center"
          fontColor="gray"
          fontWeight="regular"
        >
          {input.length} / {count}
        </Text>
      )}
    </div>
  );
};

export default Input;
