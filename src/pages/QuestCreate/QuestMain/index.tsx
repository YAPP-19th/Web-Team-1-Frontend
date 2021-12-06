import React from 'react';
import { Text, Board, Input, Dropdown, Editor } from '@src/components/atoms';
import './style.scss';
import {
  questTitle,
  questDetail,
} from '@src/pages/QuestCreate/quest_data.json';

const QuestMain: React.FC = () => {
  return (
    <Board height={64.2}>
      <article className="quest-title">
        <Text fontWeight="bold" fontSize="large">
          {questTitle.main} <span className="blue-star">*</span>
        </Text>
        <Text fontColor="gil-blue">{questTitle.sub}</Text>
        <div className="contents">
          <Input hasCount />
          <Dropdown placeholder="카테고리 설정" />
          <Dropdown placeholder="난이도 설정" />
        </div>
      </article>

      <article className="quest-editor">
        <Text fontWeight="bold" fontSize="large">
          {questDetail.main} <span className="blue-star">*</span>
        </Text>
        <Text fontColor="gil-blue">{questDetail.sub}</Text>
        <Editor height={35} />
      </article>
    </Board>
  );
};

export default QuestMain;
