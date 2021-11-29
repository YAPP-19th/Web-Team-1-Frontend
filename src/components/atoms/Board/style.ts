import styled, { css } from 'styled-components';
import { BoardProps } from './index';

const StyledBoard = styled.article<BoardProps>`
  display: block;
  box-sizing: border-box;
  border: 1px solid #e3e3e3;
  border-radius: 2.5rem;
  padding: 2.5rem 3.5rem;
  background-color: #ffffff;
  margin: 0.75rem 0;
  ${({ width, height }) => {
    return css`
      width: ${width};
      height: ${height};
    `;
  }};
`;

export default StyledBoard;
