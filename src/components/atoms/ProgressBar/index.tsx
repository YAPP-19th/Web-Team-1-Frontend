import React from 'react';
import styled from 'styled-components';
import './style.scss';
import { Text } from '@src/components/atoms';

export interface ProgressBarProps {
  title: string;
  value: number;
  totalValue: number;
}

interface DegreeProps {
  value: number;
  totalValue: number;
}

const Degree = styled.div`
  width: ${({ value, totalValue }: DegreeProps) => (value / totalValue) * 100}%;
  height: 100%;
  background: #0389ff;
  border-radius: 2.5rem;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  value,
  totalValue,
}) => {
  return (
    <div className="_PROGRESS_BAR_WRAPPER_">
      <Text fontSize="medium" fontWeight="medium">
        {title}
      </Text>
      <div className="_PROGRESS_BAR_">
        <Degree value={value} totalValue={totalValue} />
      </div>
      <Text fontColor="gil-blue" fontWeight="bold">
        {value}
      </Text>
    </div>
  );
};

export default ProgressBar;
