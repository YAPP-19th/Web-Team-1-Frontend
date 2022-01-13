import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import './style.scss';
import { Text } from '@src/components/atoms';

export interface MenuItem {
  index: number; // 메뉴에서의 위치
  value: string; // 실제로 내부에서 사용할 값
  count: number; // 아이템이 얼마나 존재하는지 보여줄 수
}

export interface MenuBarProps {
  menuList: MenuItem[];
  onDispatch: React.Dispatch<React.SetStateAction<string>>;
}

const MenuBar: React.FC<MenuBarProps> = ({ menuList, onDispatch }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const handleClick = useCallback(
    (index: number, value: string) => {
      setFocusedIndex(index);
      onDispatch(value);
    },
    [onDispatch],
  );

  return (
    <div className={cn(`_MENUBAR_`)}>
      {menuList.map(({ index, value, count }) => (
        <Text
          className={index === focusedIndex ? 'clicked' : ''}
          fontColor="main"
          fontSize="x-large"
          fontWeight="regular"
          key={value}
          role="menuitem"
          handleClick={() => handleClick(index, value)}
          handleKeyUp={() => handleClick(index, value)}
        >{`${index ? value : '퀘스트 전체'}  ${count}`}</Text>
      ))}
    </div>
  );
};

export default MenuBar;
