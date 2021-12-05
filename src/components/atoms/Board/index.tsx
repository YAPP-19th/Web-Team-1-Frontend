import React, { ReactNode } from 'react';
import StyledBoard from './style';

export interface BoardProps {
  children?: ReactNode;
  className?: string;
  height: number;
}

const Board: React.FC<BoardProps> = ({ className, children, height }) => {
  return (
    <StyledBoard className={className} height={height}>
      {children}
    </StyledBoard>
  );
};

export default Board;
