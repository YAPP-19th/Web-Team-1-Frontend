/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './style.scss';
import { Text } from '@src/components/atoms';
import { Author } from '@src/components/molecules';

export interface PaperProps {
  category: string;
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  author: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Paper: React.FC<PaperProps> = ({
  category,
  name,
  level,
  author,
  handleClick,
}) => {
  return (
    <div className="_PAPER_" onClick={handleClick}>
      <div className="paper-contents">
        <Text
          className="paper-category"
          fontColor="gil-blue"
          fontSize="large"
          fontWeight="medium"
        >
          {category}
        </Text>
        <Text
          className="paper-name"
          fontColor="main"
          fontSize="xx-large"
          fontWeight="bold"
        >
          {name}
        </Text>
        <Author authorName={author} iconSize="small" iconLevel={level} />
      </div>
    </div>
  );
};

export default Paper;
