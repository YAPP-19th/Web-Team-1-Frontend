import React from 'react';
import { Text } from '@src/components/atoms';
import './style.scss';

interface ListProps {
  listData: string[];
}

const List: React.FC<ListProps> = ({ listData }) => {
  return (
    <ul>
      {listData.map((text) => {
        const parsedText = text.split('\n');
        return (
          <li key={text}>
            <Text fontWeight="regular">{parsedText[0]}</Text>
            <Text fontWeight="regular" fontColor="gray">
              {parsedText[1]}
            </Text>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
