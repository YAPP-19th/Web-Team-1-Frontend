import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createQuestSelector,
  setSubQuest,
  ListType,
} from '@src/slices/createQuestSlice';
import { Text, Board, List } from '@src/components/atoms';
import { DragDrop } from '@src/components/molecules';
import { DragDropListType } from '@src/components/molecules/DragDrop';
import { questSub } from '@src/constants/createQuest/quest_data.json';

const Sub: React.FC = () => {
  const dispatch = useDispatch();
  const { subQuestList } = useSelector(createQuestSelector);

  const handleSubQuest = useCallback(
    (value: DragDropListType) => {
      dispatch(setSubQuest(value as ListType[]));
    },
    [dispatch],
  );

  return (
    <Board height={45}>
      <article className="quest-sub">
        <Text fontWeight="bold" fontSize="large">
          {questSub.main} <span className="blue-star">*</span>
        </Text>
        <Text fontColor="gil-blue">{questSub.sub}</Text>
        <List listData={questSub.list} />

        <div className="contents">
          <DragDrop hasInput list={subQuestList} onDispatch={handleSubQuest} />
        </div>
      </article>
    </Board>
  );
};

export default Sub;
