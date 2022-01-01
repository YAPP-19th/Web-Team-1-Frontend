import React from 'react';
import './style.scss';
import { InfoCountItem } from '@src/components/atoms';

export interface InfoCountProps {
  infoList: {
    title: string;
    count?: number;
    unit: string;
  }[];
}

const InfoCount: React.FC<InfoCountProps> = ({ infoList = [] }) => {
  return (
    <div className="count-wrapper">
      {infoList.map((info) => (
        <InfoCountItem info={info} key={info.title} />
      ))}
    </div>
  );
};

export default InfoCount;
