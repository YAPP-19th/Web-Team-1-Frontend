import React from 'react';
import cn from 'classnames';
import './style.scss';
import { Text } from '@src/components/atoms';

interface TabItem {
  name: string;
}

export interface TabBarProps {
  tabList: TabItem[];
  align?: 'start' | 'center' | 'end';
  divider?: boolean;
}

const TabBar: React.FC<TabBarProps> = ({
  tabList,
  align = 'center',
  divider = true,
}) => {
  return (
    <div className={cn(`_TABBAR_`, `align-${align}`)}>
      {tabList.map((item, index) => (
        <Text
          fontColor="main"
          fontSize="x-large"
          fontWeight="regular"
          align="center"
          key={index}
        >
          {item.name}
        </Text>
      ))}
    </div>
  );
};

export default TabBar;
