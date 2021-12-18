import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Board, Input, Dropdown, Editor } from '@src/components/atoms';
import {
  createQuestSelector,
  setName,
  setDropdown,
  setDetail,
} from '@src/slices/createQuestSlice';
import {
  questTitle,
  questDetail,
} from '@src/pages/CreateQuest/quest_data.json';
import { POSITION_LIST, DIFFICULTY_LIST } from '@src/constants/dropdown';
import './style.scss';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const createQuestState = useSelector(createQuestSelector);
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

  const handleEditor = useCallback(
    (value) => {
      dispatch(setDetail(value));
    },
    [dispatch],
  );

  return (
    <Board height={64.2}>
      <article className="quest-title">
        <Text fontWeight="bold" fontSize="large">
          {questTitle.main} <span className="blue-star">*</span>
        </Text>
        <Text fontColor="gil-blue">{questTitle.sub}</Text>
        <div className="contents">
          <Input hasCount count={10} onDispatch={handleTitle} />
          <Dropdown
            placeholder="카테고리 설정"
            selected={createQuestState.position}
            type="position"
            list={POSITION_LIST}
            onDispatch={handleDropdown}
          />
          <Dropdown
            placeholder="난이도 설정"
            selected={createQuestState.difficulty}
            type="difficulty"
            list={DIFFICULTY_LIST}
            onDispatch={handleDropdown}
          />
        </div>
      </article>

      <article className="quest-editor">
        <Text fontWeight="bold" fontSize="large">
          {questDetail.main} <span className="blue-star">*</span>
        </Text>
        <Text fontColor="gil-blue">{questDetail.sub}</Text>
        <Editor height={35} onDispatch={handleEditor} />
      </article>
    </Board>
  );
};

export default Main;
