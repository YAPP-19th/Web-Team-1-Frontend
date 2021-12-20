import React, { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import { Text } from '@src/components/atoms';
import './style.scss';

interface TabItem {
  name: string;
}

export interface TabBarProps {
  tabList: TabItem[];
  align?: 'start' | 'center' | 'end';
  hasDivider?: boolean;
  selected?: number;
  setFiltering: Dispatch<SetStateAction<number>>;
}

const TabBar: React.FC<TabBarProps> = ({
  tabList,
  align = 'center',
  hasDivider = true,
  selected = 0,
  setFiltering,
}) => {
  return (
    <div className={cn(`_TABBAR_`, `align-${align}`, { hasDivider })}>
      {tabList.map((item, index) => (
        <button
          className="filtering-button"
          key={index}
          onClick={() => {
            setFiltering(index);
          }}
        >
          <Text
            fontColor={index === selected ? 'gil-blue' : 'main'}
            fontSize="x-large"
            fontWeight="regular"
            align="center"
          >
            {item.name}
          </Text>
        </button>
      ))}
    </div>
  );
};

export default TabBar;
