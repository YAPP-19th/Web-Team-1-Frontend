import React from 'react';
import styled from 'styled-components';
import Text from '@src/atoms/Text';
import './style.scss';

export interface ProgressBarProps {
  title: string;
  value: number;
}

const Degree = styled.div`
  width: ${(props: any) => props.value}%;
  height: 100%;
  background: #0389ff;
  border-radius: 2.5rem;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ title, value }) => {
  return (
    <div className="_PROGRESS_BAR_WRAPPER_">
      <Text fontSize="medium" fontWeight="medium">
        {title}
      </Text>
      <div className="_PROGRESS_BAR_">
        <Degree value={value} />
      </div>
      <Text fontColor="gil-blue" fontWeight="bold">
        {value}
      </Text>
    </div>
  );
};

export default ProgressBar;
