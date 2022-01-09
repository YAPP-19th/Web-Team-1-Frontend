import React, { useCallback, useEffect, useState } from 'react';
import { Pagination, TabBar, Text } from '@src/components/atoms';
import ProfileQuestCard from '@src/components/molecules/ProfileQuestCard';
import empty_quest_list from '@src/assets/images/empty_quest_list.svg';
import {
  useGetUsersQuestsParticipationQuery,
  useGetUsersQuestsQuery,
} from '@src/services/giljob';
import { Quest } from '@src/services/types/response';
import { step } from '../list';
import './style.scss';
import { useHistory } from 'react-router-dom';

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

const LIST_SIZE = 6;

// 필터링 기준 열거형
export enum QuestFiltering {
  Proceeding,
  Completed,
  Created,
}

const QuestList: React.FC = () => {
  const history = useHistory();
  // 필터링 기준
  const [filtering, setFiltering] = useState(QuestFiltering.Proceeding);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // TODO: userId, cursor 값 변경
  const { data: quests } = useGetUsersQuestsQuery({
    userId: 1,
    // cursor: 1,
    size: LIST_SIZE,
  });
  // TODO: userId, cursor 값 변경
  const { data: questsParticipation } = useGetUsersQuestsParticipationQuery({
    userId: 1,
    // cursor: 1,
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
    } else if (filtering === QuestFiltering.Completed) {
      setIsCompleted(true);
    }
  }, [filtering]);

  return (
    <div className="profile-page-quest-list">
      <TabBar
        tabList={tabList}
        hasDivider={false}
        align="start"
        selected={filtering}
        setFiltering={setFiltering}
      />
      <section className="profile-page-list-wrapper">
        {(filtering !== QuestFiltering.Created
          ? questsParticipation?.data
          : quests?.data
        )?.length ? (
          <div className="profile-page-card-wrapper">
            {(filtering !== QuestFiltering.Created
              ? questsParticipation?.data
              : quests?.data
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
          <Pagination pageSize={6} currentId={1} totalLength={65} />
        </div>
      </section>
    </div>
  );
};

export default QuestList;
