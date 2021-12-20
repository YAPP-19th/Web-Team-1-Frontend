import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Pagination, TabBar, Text } from '@src/components/atoms';
import { Paper } from '@src/components/molecules';
import empty_quest_list from '@src/assets/images/empty_quest_list.svg';
import './style.scss';

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const tabList = [
  {
    name: '로드맵 스크랩',
  },
  {
    name: '등록한 로드맵',
  },
];

interface RoadmapItems {
  category: string;
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  author: string;
}

// 더미 데이터
// TODO: 서버로부터 얻어온 데이터로 대체 예정
const scrapedRoadmapList: RoadmapItems[] = [
  {
    category: 'Frontend',
    name: '프론트엔드 개발자가 되는 법',
    level: 1,
    author: '호랑이 형님',
  },
  {
    category: 'Frontend',
    name: '프론트엔드 개발자가 되는 법',
    level: 2,
    author: '호랑이 형님',
  },
  {
    category: 'Frontend',
    name: '프론트엔드 개발자가 되는 법',
    level: 3,
    author: '호랑이 형님',
  },
  {
    category: 'Frontend',
    name: '프론트엔드 개발자가 되는 법',
    level: 4,
    author: '호랑이 형님',
  },
  {
    category: 'Frontend',
    name: '프론트엔드 개발자가 되는 법',
    level: 5,
    author: '호랑이 형님',
  },
];

const registeredRoadmapList: RoadmapItems[] = [];

// 필터링 기준 열거형
export enum RoadmapFiltering {
  Scraped,
  Registered,
}

const RoadmapList: React.FC = () => {
  // 필터링 기준
  const [filtering, setFiltering] = useState(RoadmapFiltering.Scraped);
  // 로드맵 리스트
  const [roadmapList, setRoadmapList] = useState(scrapedRoadmapList);

  useEffect(() => {
    if (filtering === RoadmapFiltering.Scraped) {
      setRoadmapList(scrapedRoadmapList);
    } else if (filtering === RoadmapFiltering.Registered) {
      setRoadmapList(registeredRoadmapList);
    }
  }, [filtering]);

  return (
    <div className="quest-page-roadmap-list">
      <TabBar
        tabList={tabList}
        hasDivider={false}
        align="start"
        selected={filtering}
        setFiltering={setFiltering}
      />
      <section className="quest-page-roadmap-list-wrapper">
        {roadmapList.length === 0 ? (
          <div className="empty-list-wrapper">
            <img src={empty_quest_list} alt="empty_quest_list" loading="lazy" />
            <Text fontColor="gray" fontSize="x-large" fontWeight="bold">
              로드맵이 없습니다
            </Text>
          </div>
        ) : (
          <div className="quest-page-paper-wrapper">
            {roadmapList.map(({ category, name, level, author }, index) => (
              <Paper
                category={category}
                name={name}
                level={level}
                author={author}
                key={index}
              />
            ))}
          </div>
        )}
        <div className="quest-page-roadmap-pagination-wrapper">
          <Pagination pageSize={6} currentId={1} totalLength={65} />
        </div>
      </section>
    </div>
  );
};

export default RoadmapList;
