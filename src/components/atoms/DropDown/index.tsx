import React, { useState, useCallback } from 'react';
import { Text } from '@src/components/atoms';
import dropdownItems from './list';
import './style.scss';

/*  결과값 저정에 redux hooks을 이용한다면 추후 인터페이스를 바꿔야 합니다. */

export interface DropDownProps {
  placeholder: string;
  selected?: string; // 드롭다운 선택된 결과 값
}

const DropDown: React.FC<DropDownProps> = ({ placeholder, selected }) => {
  const [isActivate, setIsActivate] = useState(false);

  const handleActivate = useCallback(() => {
    setIsActivate(!isActivate);
  }, [isActivate]);

  const handleSelect = useCallback((value: string) => {
    // value 를 이용해서 redux에 저장하면 됩니다.
    setIsActivate(false);
  }, []);

  return (
    <div className="_DROPDOWN_">
      <button className="drop-down-menu" type="button" onClick={handleActivate}>
        <Text fontColor="gray" align="center">
          {selected || placeholder}
        </Text>
        <div className="drop-down-arrow" />
      </button>
      {isActivate && (
        <div className="drop-down-wrapper">
          {dropdownItems.map(({ value }) => (
            <button
              className="drop-down-item"
              type="button"
              key={value}
              onClick={() => handleSelect(value)}
            >
              <Text fontColor="gray" align="center">
                {value}
              </Text>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
