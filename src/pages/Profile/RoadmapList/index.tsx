import React, { useState } from 'react';
import { Pagination, TabBar, Text } from '@src/components/atoms';
import { Paper } from '@src/components/molecules';
import empty_quest_list from '@src/assets/images/empty_quest_list.svg';
import {
  useGetUsersRoadmapsQuery,
  useGetUsersRoadmapsScrapQuery,
} from '@src/services/giljob';
import { RoadmapListItem } from '@src/services/types/response';
import './style.scss';

const tabList = [
  {
    name: '로드맵 스크랩',
  },
  {
    name: '등록한 로드맵',
  },
];

const LIST_SIZE = 6;

// 필터링 기준 열거형
export enum RoadmapFiltering {
  Scraped,
  Registered,
}

const RoadmapList: React.FC = () => {
  // 필터링 기준
  const [filtering, setFiltering] = useState(RoadmapFiltering.Scraped);

  // TODO: userId, cursor 값 변경
  const { data: roadmaps } = useGetUsersRoadmapsQuery({
    userId: 1,
    // cursor: 100,
    size: LIST_SIZE,
  });
  // TODO: userId, cursor 값 변경
  const { data: roadmapsScrap } = useGetUsersRoadmapsScrapQuery({
    userId: 1,
    // cursor: 100,
    size: LIST_SIZE,
  });

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
        {(filtering === RoadmapFiltering.Registered
          ? roadmaps?.data
          : roadmapsScrap?.data
        )?.length ? (
          <div className="quest-page-paper-wrapper">
            {(filtering === RoadmapFiltering.Registered
              ? roadmaps?.data
              : roadmapsScrap?.data
            )?.map(({ id, name, position, writer }: RoadmapListItem) => (
              // TODO: writer point에 맞게 level 변경하기
              <Paper
                key={id}
                category={position}
                name={name}
                level={1}
                author={writer.nickname}
              />
            ))}
          </div>
        ) : (
          <div className="empty-list-wrapper">
            <img src={empty_quest_list} alt="empty_quest_list" loading="lazy" />
            <Text fontColor="gray" fontSize="x-large" fontWeight="bold">
              로드맵이 없습니다
            </Text>
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
