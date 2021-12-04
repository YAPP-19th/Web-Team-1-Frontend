import styled, { css } from 'styled-components';
import { BoardProps } from './index';

const StyledBoard = styled.section<BoardProps>`
  display: block;
  box-sizing: border-box;
  padding: 2.5rem 3.5rem;
  margin: 0.75rem 0;
  border: 1px solid #e3e3e3;
  border-radius: 2.5rem;
  background-color: #ffffff;

  ${({ width, height }) => {
    return css`
      width: ${width};
      height: ${height};
    `;
  }};
`;

export default StyledBoard;
