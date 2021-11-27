import React from 'react';
import './style.scss';
import { Text, Icon } from '@src/components/atoms';

export interface AuthorProps {
  authorName: string;
  iconSize: 'small' | 'medium' | 'large';
  iconLevel: 1 | 2 | 3 | 4 | 5;
}

const Author: React.FC<AuthorProps> = ({ authorName, iconSize, iconLevel }) => {
  return (
    <div className="_AUTHOR_">
      <Icon size={iconSize} level={iconLevel} />
      <Text fontColor="main" fontSize="medium" fontWeight="regular">
        {authorName}
      </Text>
    </div>
  );
};

export default Author;
