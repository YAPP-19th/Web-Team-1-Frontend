import React, { useCallback, useMemo } from 'react';
import cn from 'classnames';
import './style.scss';
import { Text } from '@src/components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { questListSelector, setPosition } from '@src/slices/questListSlice';

interface MenuItem {
  position: string;
  questCount: number;
}

export interface MenuBarProps {
  menuList: MenuItem[];
}

const MenuBar: React.FC<MenuBarProps> = ({ menuList }) => {
  const dispatch = useDispatch();
  const { position: selectedPosition } = useSelector(questListSelector);
  const currentPosition = useMemo(
    () => selectedPosition || '퀘스트 전체',
    [selectedPosition],
  );
  const handleClick = useCallback(
    (event) => {
      const { innerText } = event.target;
      const [currentPosition] = innerText.split('  ');
      dispatch(
        setPosition(currentPosition === '퀘스트 전체' ? '' : currentPosition),
      );
    },
    [dispatch],
  );

  return (
    <div className={cn(`_MENUBAR_`)}>
      {menuList.map(({ position, questCount }) => (
        <Text
          className={currentPosition === position ? 'clicked' : ''}
          fontColor="main"
          fontSize="x-large"
          fontWeight="regular"
          key={position}
          role="menuitem"
          handleClick={handleClick}
          handleKeyUp={handleClick}
        >{`${position}  ${questCount}`}</Text>
      ))}
    </div>
  );
};

export default MenuBar;
