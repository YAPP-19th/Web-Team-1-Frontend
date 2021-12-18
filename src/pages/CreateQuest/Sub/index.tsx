import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSubQuest } from '@src/slices/createQuestSlice';
import { Text, Board, List } from '@src/components/atoms';
import { DragDrop } from '@src/components/molecules';
import { questSub } from '@src/pages/CreateQuest/quest_data.json';

export interface SubQuestType {
  id: string;
  name: string;
}

const Sub: React.FC = () => {
  const dispatch = useDispatch();
  const handleSubQuest = useCallback(
    (value: SubQuestType[]) => {
      dispatch(setSubQuest(value));
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
          <DragDrop onDispatch={handleSubQuest} />
        </div>
      </article>
    </Board>
  );
};

export default Sub;
