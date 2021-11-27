import React from 'react';
import './style.scss';
import { Button, MenuBar, Pagination, SearchBar } from '@src/components/atoms';
import { Card } from '@src/components/molecules';
import { CardProps } from '@src/components/molecules/Card';

// 더미 데이터
// TODO: 서버로부터 얻어온 데이터로 대체 예정
const menuList = [
  {
    name: '퀘스트 전체',
    count: 49,
  },
  {
    name: 'Front-End',
    count: 49,
  },
  {
    name: 'Back-End',
    count: 49,
  },
];
// 더미 데이터
// TODO: 서버로부터 얻어온 데이터로 대체 예정
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

const QuestList: React.FC = () => {
  const onSubmit = () => {
    console.log('clicked!'); // TODO: 검색 기능 추가 예정
  };
  return (
    <div className="quest-page-quest-list">
      <section className="quest-list-wrapper">
        <MenuBar menuList={menuList} />
        <div className="quest-list-tools">
          <SearchBar
            placeholder="내게 맞는 취업 퀘스트를 검색해 보세요"
            onSubmit={onSubmit}
          />
          <Button
            innerText="퀘스트 생성"
            buttonColor="white"
            textColor="gil-blue"
            textSize="medium"
            hasShadow
          />
        </div>
        <div className="quest-card-wrapper">
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
              />
            ),
          )}
        </div>
        <div className="quest-pagination-wrapper">
          <Pagination pageSize={16} currentId={1} totalLength={65} />{' '}
        </div>
      </section>
    </div>
  );
};

export default QuestList;
