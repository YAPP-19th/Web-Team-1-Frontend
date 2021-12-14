import React from 'react';
import { Text, Board, Input, Dropdown } from '@src/components/atoms';
import { roadmapTitle } from '@src/pages/RoadmapCreate/roadmap_data.json';
import { POSITION_LIST } from '@src/constants/dropdown';
import './style.scss';

const RoadmapMain: React.FC = () => {
  return (
    <Board height={16}>
      <article className="roadmap-title">
        <Text fontWeight="bold" fontSize="large">
          {roadmapTitle.main} <span className="blue-star">*</span>
        </Text>
        <div className="contents">
          <Input hasCount />
          <Dropdown placeholder="카테고리 설정" dropdownList={POSITION_LIST} />
        </div>
      </article>
    </Board>
  );
};

export default RoadmapMain;
