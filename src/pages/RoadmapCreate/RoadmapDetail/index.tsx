import React, { useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import {
  Text,
  Board,
  SearchBar,
  List,
  Input,
  Toast,
} from '@src/components/atoms';
import { Card, DragDrop } from '@src/components/molecules';
import { CardProps } from '@src/components/molecules/Card';
import {
  roadmapDetail,
  roadmapCreateQuest,
  roadmapCreateText,
  roadmapCreateList,
  roadmapPreview,
} from '@src/pages/RoadmapCreate/roadmap_data.json';
import './style.scss';

// 더미 데이터
// 서버로부터 얻어온 데이터로 대체 예정
const questList: CardProps[] = [
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
  },
  {
    step: '입문',
    category: 'Front-End',
    name: 'React A to Z',
    exp: 100,
    participant: 123,
    author: '호랑이형님',
    level: 1,
  },
];

const RoadmapDetail: React.FC = () => {
  // 현재 컴포넌트의 모든 State는 Redux에 저장해야 합니다.
  // 아래 state는 임시입니다.
  const [quest, setQuest] = useState(['']);

  const handleToast = useCallback(
    () =>
      toast(<Toast />, {
        duration: 2000,
        position: 'bottom-right',
        style: {
          background: 'transparent',
          boxShadow: 'none',
        },
      }),
    [],
  );

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      console.log('card button click');
    },
    [],
  );

  return (
    <Board height={205}>
      <article className="roadmap-detail">
        <Text fontWeight="bold" fontSize="large">
          {roadmapDetail.main} <span className="blue-star">*</span>
        </Text>
        <Text fontColor="gil-blue">{roadmapDetail.sub}</Text>
        <List listData={roadmapDetail.list} />
      </article>
      <article className="roadmap-quest">
        <Text fontWeight="bold" fontSize="large">
          {roadmapCreateQuest.main}
        </Text>
        <div className="contents">
          <div className="roadmap-quest-header">
            <SearchBar
              placeholder="로드맵에 등록할 퀘스트를 검색해주세요"
              onSubmit={() => {
                console.log('submit');
              }}
            />
          </div>
          <div className="roadmap-quest-list">
            {questList.map(
              ({
                step,
                category,
                name,
                exp,
                participant,
                author,
                level,
              }: CardProps) => (
                <Card
                  step={step}
                  category={category}
                  name={name}
                  exp={exp}
                  participant={participant}
                  author={author}
                  level={level}
                  key={name}
                  hasBorder={quest.includes(name)}
                  handleCardClick={handleToast}
                  handleButtonClick={handleButtonClick}
                />
              ),
            )}
          </div>
        </div>
      </article>
      <article className="roadmap-text">
        <Text fontWeight="bold" fontSize="large">
          {roadmapCreateText.main}
        </Text>
        <div className="contents">
          <Input
            hasCount={false}
            placeholder="기타 수행할 로드맵을 등록해주세요"
          />
        </div>
      </article>
      <article className="roadmap-list">
        <Text fontWeight="bold" fontSize="large">
          {roadmapCreateList.main}
        </Text>
        <div className="contents">
          <DragDrop />
        </div>
      </article>
      {/* 미리보기 임시 컴포넌트 */}
      <article className="roadmap-preview">
        <Text fontWeight="bold" fontSize="large">
          {roadmapPreview.main}
        </Text>
      </article>
    </Board>
  );
};

export default RoadmapDetail;
