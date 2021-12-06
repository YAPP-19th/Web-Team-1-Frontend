import React from 'react';
import { Text, Board, List } from '@src/components/atoms';
import { DragDrop } from '@src/components/molecules';
import { questSub } from '@src/pages/QuestCreate/quest_data.json';
import './style.scss';

const QuestSub: React.FC = () => {
  return (
    <Board height={45}>
      <article className="quest-sub">
        <Text fontWeight="bold" fontSize="large">
          {questSub.main} <span className="blue-star">*</span>
        </Text>
        <Text fontColor="gil-blue">{questSub.sub}</Text>
        <List listData={questSub.list} />

        <div className="contents">
          <DragDrop />
        </div>
      </article>
    </Board>
  );
};

export default QuestSub;
