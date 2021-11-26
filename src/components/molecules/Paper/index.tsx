import React from 'react';
import './style.scss';
import { Text } from '@src/components/atoms';
import { Author } from '@src/components/molecules';

export interface PaperProps {
  category: string;
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  author: string;
}

const Paper: React.FC<PaperProps> = ({ category, name, level, author }) => {
  return (
    <div className="_PAPER_">
      <div className="paper-contents">
        <Text fontColor="gil-blue" fontSize="large" fontWeight="medium">
          {category}
        </Text>
        <Text fontColor="main" fontSize="xx-large" fontWeight="bold">
          {name}
        </Text>
        <Author authorName={author} iconSize="small" iconLevel={level} />
      </div>
    </div>
  );
};

export default Paper;