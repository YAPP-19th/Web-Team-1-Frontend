import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Pagination, TabBar, Text } from '@src/components/atoms';
import ProfileQuestCard from '@src/components/molecules/ProfileQuestCard';
import './style.scss';

const tabList = [
  {
    name: '진행중 퀘스트',
  },
  {
    name: '완료된 퀘스트',
  },
  {
    name: '생성한 퀘스트',
  },
];

interface QuestListItems {
  step: '입문' | '초급' | '중급' | '고급' | '통달';
  category: string;
  name: string;
  exp: number;
  participant: number;
  author: string;
  level: 1 | 2 | 3 | 4 | 5;
  progress: number;
}

// 더미 데이터
// TODO: 서버로부터 얻어온 데이터로 대체 예정
const proceedingQuestList: QuestListItems[] = [
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
    progress: 10,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
    progress: 20,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
    progress: 30,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
    progress: 40,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
    progress: 50,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
    progress: 60,
  },
];

const completedQuestList: QuestListItems[] = [
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
    progress: 100,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
    progress: 100,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
    progress: 100,
  },
];

const createdQuestList: QuestListItems[] = [];

// 필터링 기준 열거형
export enum QuestFiltering {
  Proceeding,
  Completed,
  Created,
}

const QuestList: React.FC = () => {
  // 필터링 기준
  const [filtering, setFiltering] = useState(QuestFiltering.Proceeding);
  // 퀘스트 리스트
  const [questList, setQuestList] = useState(proceedingQuestList);

  useEffect(() => {
    if (filtering === QuestFiltering.Proceeding) {
      setQuestList(proceedingQuestList);
    } else if (filtering === QuestFiltering.Completed) {
      setQuestList(completedQuestList);
    } else if (filtering === QuestFiltering.Created) {
      setQuestList(createdQuestList);
    }
  }, [filtering]);

  return (
    <div className="quest-page-quest-list">
      <TabBar
        tabList={tabList}
        hasDivider={false}
        align="start"
        selected={filtering}
        setFiltering={setFiltering}
      />
      <section className="quest-page-list-wrapper">
        <div
          className={cn(
            'quest-page-card-wrapper',
            `${questList.length === 0 ? 'empty-list' : ''}`,
          )}
        >
          {questList.map(
            (
              {
                step,
                category,
                name,
                exp,
                participant,
                author,
                level,
                progress,
              }: QuestListItems,
              index,
            ) => (
              <ProfileQuestCard
                step={step}
                category={category}
                name={name}
                exp={exp}
                participant={participant}
                author={author}
                level={level}
                key={index}
                progress={progress}
                status={filtering}
              />
            ),
          )}
          {questList.length === 0 && (
            <div className="empty-list-wrapper">
              <Text fontColor="gray" fontSize="x-large" fontWeight="bold">
                퀘스트가 없습니다
              </Text>
            </div>
          )}
        </div>
        <div className="quest-page-pagination-wrapper">
          <Pagination pageSize={6} currentId={1} totalLength={65} />
        </div>
      </section>
    </div>
  );
};

export default QuestList;
