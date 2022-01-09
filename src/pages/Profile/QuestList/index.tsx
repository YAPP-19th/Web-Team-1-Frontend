import React, { useCallback, useEffect, useState } from 'react';
import { Pagination, TabBar, Text } from '@src/components/atoms';
import ProfileQuestCard from '@src/components/molecules/ProfileQuestCard';
import empty_quest_list from '@src/assets/images/empty_quest_list.svg';
import {
  useGetUsersQuestsParticipationQuery,
  useGetUsersQuestsQuery,
} from '@src/services/giljob';
import { Quest } from '@src/services/types/response';
import { useHistory } from 'react-router-dom';
import './style.scss';

const TAB_LIST = [
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
const LIST_SIZE = 6;

// 필터링 기준 열거형
export enum QuestFiltering {
  Proceeding,
  Completed,
  Created,
}

interface QuestListProps {
  userId: number;
}

const QuestList: React.FC<QuestListProps> = ({ userId }) => {
  const history = useHistory();

  const [filtering, setFiltering] = useState(QuestFiltering.Proceeding); // 필터링 기준
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [participationPage, setParticipationPage] = useState<number>(0);

  const { data: quests } = useGetUsersQuestsQuery({
    userId: userId,
    page: page,
    size: LIST_SIZE,
  });
  const { data: questsParticipation } = useGetUsersQuestsParticipationQuery({
    userId: userId,
    page: participationPage,
    completed: isCompleted,
    size: LIST_SIZE,
  });

  const handleCardClick = useCallback((id) => {
    history.push(`/detail/${id}`);
  }, []);

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (window.confirm('삭제하시겠습니까?')) {
      // TODO: 해당 퀘스트 삭제
    }
  };

  useEffect(() => {
    if (filtering === QuestFiltering.Proceeding) {
      setIsCompleted(false);
      setParticipationPage(0);
    } else if (filtering === QuestFiltering.Completed) {
      setIsCompleted(true);
      setParticipationPage(0);
    } else if (filtering === QuestFiltering.Created) {
      setPage(0);
    }
  }, [filtering]);

  return (
    <div className="profile-page-quest-list">
      <TabBar
        tabList={TAB_LIST}
        hasDivider={false}
        align="start"
        selected={filtering}
        setFiltering={setFiltering}
      />
      <section className="profile-page-list-wrapper">
        {(
          filtering === QuestFiltering.Created
            ? quests?.data.totalCount
            : questsParticipation?.data.totalCount
        ) ? (
          <div className="profile-page-card-wrapper">
            {(filtering === QuestFiltering.Created
              ? quests?.data.questList
              : questsParticipation?.data.questList
            )?.map(
              ({
                id,
                name,
                position,
                participantCount,
                writer,
                difficulty,
                thumbnail,
                progress,
              }: Quest) => (
                <ProfileQuestCard
                  key={id}
                  difficulty={difficulty}
                  position={position}
                  name={name}
                  participantCount={participantCount}
                  progress={progress}
                  status={filtering}
                  writer={writer}
                  handleCardClick={() => handleCardClick(id)}
                  handleButtonClick={handleDeleteClick}
                />
              ),
            )}
          </div>
        ) : (
          <div className="empty-list-wrapper">
            <img src={empty_quest_list} alt="empty_quest_list" loading="lazy" />
            <Text fontColor="gray" fontSize="x-large" fontWeight="bold">
              퀘스트가 없습니다
            </Text>
          </div>
        )}
        <div className="profile-page-pagination-wrapper">
          {filtering === QuestFiltering.Created ? (
            <Pagination
              pageSize={LIST_SIZE}
              currentId={page}
              totalLength={quests?.data.totalCount ?? 0}
              onDispatch={setPage}
            />
          ) : (
            <Pagination
              pageSize={LIST_SIZE}
              currentId={participationPage}
              totalLength={questsParticipation?.data.totalCount ?? 0}
              onDispatch={setParticipationPage}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default QuestList;
