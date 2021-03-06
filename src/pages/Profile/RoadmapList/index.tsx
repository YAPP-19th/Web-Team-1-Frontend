/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import { Modal, Pagination, TabBar, Text } from '@src/components/atoms';
import { Paper } from '@src/components/molecules';
import empty_quest_list from '@src/assets/images/empty_quest_list.svg';
import {
  useGetUsersRoadmapsQuery,
  useGetUsersRoadmapsScrapQuery,
} from '@src/services/giljob';
import { RoadmapListItem } from '@src/services/types/response';
import './style.scss';
import useRoadmapModal from '@src/hooks/useRoadmapModal';
import { modalSelector } from '@src/slices/modalSlice';
import { useSelector } from 'react-redux';
import { Roadmap } from '@src/components/organisms';

const TAB_LIST = [
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

interface RoadmapListProps {
  userId: number;
}

const RoadmapList: React.FC<RoadmapListProps> = ({ userId }) => {
  const [filtering, setFiltering] = useState(RoadmapFiltering.Scraped); // 필터링 기준
  const [page, setPage] = useState<number>(0);
  const [scrapPage, setScrapPage] = useState<number>(0);

  const { data: roadmaps } = useGetUsersRoadmapsQuery({
    userId,
    page,
    size: LIST_SIZE,
  });

  const { data: roadmapsScrap } = useGetUsersRoadmapsScrapQuery({
    userId,
    page: scrapPage,
    size: LIST_SIZE,
  });

  const { isModalOn } = useSelector(modalSelector);
  const [clickedRoadmapId, setClickedRoadmapId] = useState(0);
  const { roadmapModal, setRoadmapModal } = useRoadmapModal(clickedRoadmapId);
  const handlePaperClick = useCallback(
    (id: number) => {
      setClickedRoadmapId(id);
      setRoadmapModal();
    },
    [setRoadmapModal],
  );

  useEffect(() => {
    if (filtering === RoadmapFiltering.Registered) {
      setPage(0);
    } else if (filtering === RoadmapFiltering.Scraped) {
      setScrapPage(0);
    }
  }, [filtering]);

  return (
    <div className="quest-page-roadmap-list">
      {isModalOn && (
        <Modal>
          <Roadmap {...roadmapModal} iconSize="small" />
        </Modal>
      )}
      <TabBar
        tabList={TAB_LIST}
        hasDivider={false}
        align="start"
        selected={filtering}
        setFiltering={setFiltering}
      />
      <section className="quest-page-roadmap-list-wrapper">
        {(
          filtering === RoadmapFiltering.Registered
            ? roadmaps?.data.totalCount
            : roadmapsScrap?.data.totalCount
        ) ? (
          <div className="quest-page-paper-wrapper">
            {(filtering === RoadmapFiltering.Registered
              ? roadmaps?.data.contentList
              : roadmapsScrap?.data.contentList
            )?.map(({ id, name, position, writer }: RoadmapListItem) => (
              <Paper
                key={id}
                category={position}
                name={name}
                level={
                  (Math.floor(writer.point / 100) + 1) as 1 | 2 | 3 | 4 | 5
                }
                author={writer.nickname}
                handleClick={() => handlePaperClick(id)}
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
          {filtering === RoadmapFiltering.Registered ? (
            <Pagination
              pageSize={LIST_SIZE}
              currentPage={page}
              totalLength={roadmaps?.data.totalCount ?? 0}
              onDispatch={setPage}
            />
          ) : (
            <Pagination
              pageSize={LIST_SIZE}
              currentPage={scrapPage}
              totalLength={roadmaps?.data.totalCount ?? 0}
              onDispatch={setScrapPage}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default RoadmapList;
