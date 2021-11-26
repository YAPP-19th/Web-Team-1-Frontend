import React from 'react';
import cn from 'classnames';
import './style.scss';
import { Text } from '@src/components/atoms';

interface MenuItem {
  name: string;
  count: number;
}

export interface MenuBarProps {
  menuList: MenuItem[];
}

const MenuBar: React.FC<MenuBarProps> = ({ menuList }) => {
  return (
    <div className={cn(`_MENUBAR_`)}>
      {menuList.map((item, index) => (
        <Text
          fontColor="main"
          fontSize="x-large"
          fontWeight="regular"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >{`${item.name}  ${item.count}`}</Text>
      ))}
    </div>
  );
};

export default MenuBar;
