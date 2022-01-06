import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Board, Input, Dropdown } from '@src/components/atoms';
import {
  setName,
  setDropdown,
  createRoadmapSelector,
} from '@src/slices/createRoadmapSlice';
import { roadmapTitle } from '@src/pages/CreateRoadmap/roadmap_data.json';
import { POSITION_LIST } from '@src/constants/dropdown';
import './style.scss';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const createRoadmapState = useSelector(createRoadmapSelector);

  const handleTitle = useCallback(
    (value: string) => {
      dispatch(setName(value));
    },
    [dispatch],
  );

  const handleDropdown = useCallback(
    (type: string, value: string | number) => {
      dispatch(setDropdown({ type, value }));
    },
    [dispatch],
  );

  return (
    <Board height={16}>
      <article className="roadmap-title">
        <Text fontWeight="bold" fontSize="large">
          {roadmapTitle.main} <span className="blue-star">*</span>
        </Text>
        <div className="contents">
          <Input hasCount onDispatch={handleTitle} />
          <Dropdown
            placeholder="카테고리 설정"
            selected={createRoadmapState.position}
            type="position"
            list={POSITION_LIST}
            onDispatch={handleDropdown}
          />
        </div>
      </article>
    </Board>
  );
};

export default Main;
