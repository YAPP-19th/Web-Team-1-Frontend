import React from 'react';
import styled from 'styled-components';
import { Badge, Text } from '@src/components/atoms';
import { Author } from '@src/components/molecules';
import { QuestFiltering } from '@src/pages/Profile/QuestList';
import { Writer } from '@src/services/types/response';
import './style.scss';
import { step } from '@src/pages/Profile/list';
export interface ProfileQuestCardProps {
  status: QuestFiltering;
  difficulty: number;
  position: string;
  name: string;
  participantCount: number;
  progress?: number;
  writer: Writer;
  thumbnail: string;
  handleCardClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleButtonClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    questId: number,
  ) => void;
}

interface DegreeProps {
  value: number;
}

const Degree = styled.div`
  width: ${({ value }: DegreeProps) => Math.min(value, 100)}%;
  height: 100%;
  background: #0389ff;
  border-radius: 2.5rem;
`;

interface MainInfoProps {
  thumbnail: string;
}

const MainInfo = styled.div`
  background: url(${({ thumbnail }: MainInfoProps) =>
    thumbnail ?? '@src/assets/images/bg_quest.png'});
`;

const ProfileQuestCard: React.FC<ProfileQuestCardProps> = ({
  status,
  difficulty,
  position,
  name,
  participantCount,
  progress,
  writer,
  thumbnail,
  handleCardClick,
  handleButtonClick,
}) => {
  return (
    <div className="_PROFILE_QUEST_CARD_" onClick={handleCardClick}>
      <MainInfo className="card-main-info" thumbnail={thumbnail}>
        <Badge step={step[difficulty]} align="end" />
        <Text
          align="start"
          fontColor="gil-blue"
          fontSize="x-large"
          fontWeight="bold"
        >
          {position}
        </Text>
        <Text
          align="start"
          fontColor="white"
          fontSize="xx-large"
          fontWeight="bold"
        >
          {name}
        </Text>
      </MainInfo>
      <div className="card-more-info">
        {status !== QuestFiltering.Created && (
          <>
            <Text
              align="start"
              fontColor="gil-blue"
              fontSize="small"
              fontWeight="bold"
            >
              퀘스트 진행률
            </Text>
            <div className="progress">
              <Degree value={progress ?? 0} />
            </div>
          </>
        )}

        <div className="more-info-wrapper">
          <Text
            align="start"
            fontColor="main"
            fontSize="large"
            fontWeight="regular"
          >
            {10 + difficulty * 5} EXP
          </Text>
          <Text
            align="start"
            fontColor="main"
            fontSize="small"
            fontWeight="medium"
          >
            {participantCount}명 참여 중
          </Text>
        </div>
      </div>
      <span className="divider"></span>
      <div className="card-last-info">
        <Author
          authorName={writer.nickname}
          iconSize="small"
          iconLevel={(Math.floor(writer.point / 100) + 1) as 1 | 2 | 3 | 4 | 5}
        />
        {status === QuestFiltering.Proceeding && (
          <button
            className="delete-button"
            type="button"
            onClick={handleButtonClick}
          >
            <span className="line" />
          </button>
        )}
      </div>
    </div>
  );
};
export default ProfileQuestCard;
