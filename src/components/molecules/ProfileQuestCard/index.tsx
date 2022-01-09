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
  handleCardClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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

const ProfileQuestCard: React.FC<ProfileQuestCardProps> = ({
  status,
  difficulty,
  position,
  name,
  participantCount,
  progress,
  writer,
  handleCardClick,
  handleButtonClick,
}) => {
  return (
    <div className="_PROFILE_QUEST_CARD_" onClick={handleCardClick}>
      <div className="card-main-info">
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
      </div>
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
        <Author authorName={writer.nickname} iconSize="small" iconLevel={1} />
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
