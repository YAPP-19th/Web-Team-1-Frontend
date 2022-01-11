import React, { ReactNode } from 'react';
import cn from 'classnames';
import StyledBoard from './style';

export interface BoardProps {
  children?: ReactNode;
  className?: string;
  height?: number;
  width?: number;
  color?: string;
}

const Board: React.FC<BoardProps> = ({
  className,
  children,
  height,
  width,
  color,
}) => {
  return (
    <StyledBoard
      className={cn(`_BOARD_`, className)}
      height={height}
      width={width}
      color={color}
    >
      {children}
    </StyledBoard>
  );
};

export default Board;
