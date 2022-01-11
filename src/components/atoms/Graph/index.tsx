import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Text } from '@src/components/atoms';

const Base = styled.div`
  font-weight: 500;
  float: none;
  display: flex;
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  border-radius: 3rem;
  background: #ccc;
`;

interface BarProps {
  value: number;
  color: string;
}

const BarKeyframe = (width: number) => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${width}%;
  }
`;

const Bar = styled.span<BarProps>`
  background: ${(props) => (props.value ? props.color : null)};
  width: ${(props) => props.value}%;
  border-radius: 3rem;
  padding-left: 2rem;
  overflow: hidden;
  z-index: 2;
  color: black;
  text-align: left;
  animation: 1.5s ${(props) => BarKeyframe(props.value)};
`;

const Stat = styled.span`
  width: 79rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding-left: 2rem;
  z-index: 3;
`;

interface GraphProps {
  value: number;
  color: string;
}

const Graph: React.FC<GraphProps> = ({ value, color }) => {
  return (
    <Base>
      <Bar value={value} color={color} />
      <Stat>
        <Text fontSize="small" fontColor="white">
          START
        </Text>
        <Text fontSize="small" fontColor="white">
          FINISH
        </Text>
      </Stat>
    </Base>
  );
};

export default Graph;
