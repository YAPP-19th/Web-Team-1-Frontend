import React, { useState, useCallback } from 'react';
import { Text, Board, List, Input } from '@src/components/atoms';
import './style.scss';
import lighthouse from '@src/assets/images/lighthouse.svg';
import questData from './quest_data.json';

const QuestCreate: React.FC = () => {
  const {
    questCreate,
    questTitle,
    questDetail,
    questSub,
    questThumbnail,
    questHashtag,
  } = questData;
  const [quest, setQuest] = useState({
    title: '',
  });
  const handleQuest = useCallback(
    (e) => {
      setQuest({ ...quest, [e.target.value.name]: e.target.value });
    },
    [quest],
  );

  return (
    <div className="quest-background">
      <section className="quest-wrapper">
        <div className="quest-title-wrapper">
          <div className="title">
            <Text className="title-text" fontWeight="bold">
              퀘스트 생성
            </Text>
            <List listData={questCreate.list} />
          </div>
          <img src={lighthouse} alt="lighthouse" />
        </div>
        <Board height="64.2rem">
          <div className="quest-title">
            <Text fontWeight="bold" fontSize="large">
              {questTitle.main}
              <Text fontWeight="bold" fontSize="large" fontColor="gil-blue">
                *
              </Text>
            </Text>
            <Text fontColor="gil-blue">{questTitle.sub}</Text>
            <Input hasCount handleChange={handleQuest} />
          </div>
          <div className="quest-detail">
            <Text fontWeight="bold" fontSize="large">
              {questDetail.main}
            </Text>
            <Text fontColor="gil-blue">{questDetail.sub}</Text>
          </div>
        </Board>
        <Board height="33.8rem" />
        <Board height="46.5rem" />
      </section>
    </div>
  );
};

export default QuestCreate;
