import React, { useState, useCallback } from 'react';
import { Text } from '@src/components/atoms';
import cn from 'classnames';
import './style.scss';

export interface DropdownListType {
  /* 드롭다운의 타입 Ex) postition, level
  type을 통해 Redux에서 value를 원하는 곳에 지정합니다. */
  type?: string;
  name?: string; // 드롭다운의 placeholder Ex) 초급 (10Exp)
  value: string | number; // Redux에 저장될 값
}

export interface DropdownProps {
  placeholder: string;
  type?: string;
  selected?: string | number;
  list: DropdownListType[];
  onDispatch: (name: string, value: string | number) => void;
  hasBorder?: boolean;
  fontColor?: 'gray' | 'white' | 'main';
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  type = 'default',
  selected,
  list,
  onDispatch,
  hasBorder = true,
  fontColor = 'gray',
}) => {
  const [isActivate, setIsActivate] = useState(false);

  const handleActivate = useCallback(() => {
    setIsActivate(!isActivate);
  }, [isActivate]);

  const handleSelect = useCallback(
    (value) => {
      onDispatch(type, value);
      setIsActivate(false);
    },
    [type, onDispatch],
  );

  return (
    <div className={cn('_DROPDOWN_', { hasBorder }, `fontColor-${fontColor}`)}>
      <button className="drop-down-menu" type="button" onClick={handleActivate}>
        <Text fontColor={fontColor} align="center">
          {selected || placeholder}
        </Text>
        <div className={cn('drop-down-arrow', `fontColor-${fontColor}`)} />
      </button>
      {isActivate && (
        <div className="drop-down-wrapper">
          {list.map(({ name, value }) => (
            <button
              className="drop-down-item"
              type="button"
              key={name}
              onClick={() => handleSelect(value)}
            >
              <Text fontColor="gray" align="center">
                {name}
              </Text>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
