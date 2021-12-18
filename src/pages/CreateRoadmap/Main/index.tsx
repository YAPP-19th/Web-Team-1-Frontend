import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, Board, Input, Dropdown } from '@src/components/atoms';
import { setTitle, setDropdown } from '@src/slices/createRoadmapSlice';
import { roadmapTitle } from '@src/pages/CreateRoadmap/roadmap_data.json';
import { POSITION_LIST } from '@src/constants/dropdown';
import './style.scss';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const handleTitle = useCallback(
    (value: string) => {
      dispatch(setTitle(value));
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
