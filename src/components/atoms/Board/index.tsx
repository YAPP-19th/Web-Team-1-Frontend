import React, { ReactNode } from 'react';
import StyledBoard from './style';

export interface BoardProps {
  children?: ReactNode;
  className?: string;
  width?: string;
  height?: string;
}

const Board: React.FC<BoardProps> = ({
  className,
  children,
  width = '100%',
  height = '100%',
}) => {
  return (
    <StyledBoard className={className} width={width} height={height}>
      {children}
    </StyledBoard>
  );
};

export default Board;
