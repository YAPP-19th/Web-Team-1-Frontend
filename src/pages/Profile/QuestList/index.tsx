import React, { useEffect, useState } from 'react';
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
                  // TODO: undefined일 때 어떻게 처리할지 고민해보기
                  step={step[difficulty] ?? '입문'}
                  position={position}
                  name={name}
                  // exp={exp}
                  participantCount={participantCount}
                  progress={progress}
                  status={filtering}
                  writer={writer}
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
