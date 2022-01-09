import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import { Text } from '@src/components/atoms';
import useDebounce from '@src/hooks/useDebounce';

import './style.scss';

export interface InputProps {
  className?: string;
  hasCount?: boolean;
  count?: number;
  inputHeight?: 'narrow' | 'wide';
  placeholder?: string;
  placeholderColor?: 'gray' | 'blue';
  onDispatch?: (value: string) => void; // redux 저장 함수
  onSubmit?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  hasCount = true,
  count = 20,
  inputHeight = 'narrow',
  placeholder,
  placeholderColor = 'gray',
  onDispatch,
  onSubmit,
}) => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 1000);

  // Debounce 적용
  useEffect(() => {
    if (onDispatch) onDispatch(debouncedInput);
  }, [debouncedInput, onDispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  // Redux에 Input 컴포넌트를 연결 하지 않을 경우에만 작동합니다.
  const handleEnter = useCallback(
    (e: React.KeyboardEvent) => {
      if (!onDispatch && input && e.key === 'Enter') {
        setInput('');
        if (onSubmit) onSubmit(input);
      }
    },
    [input, onSubmit, onDispatch],
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
