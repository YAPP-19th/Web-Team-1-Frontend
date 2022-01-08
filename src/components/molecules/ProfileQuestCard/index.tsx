import React from 'react';
import styled from 'styled-components';
import { Badge, Text } from '@src/components/atoms';
import { Author } from '@src/components/molecules';
import { QuestFiltering } from '@src/pages/Profile/QuestList';
import { Writer } from '@src/services/types/response';
import './style.scss';

export interface ProfileQuestCardProps {
  status: QuestFiltering;
  step: '입문' | '초급' | '중급' | '고급' | '통달';
  difficulty: number;
  position: string;
  name: string;
  // exp: number;
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
  step,
  position,
  name,
  participantCount,
  progress,
  writer,
  status,
  handleCardClick,
  handleButtonClick,
}) => {
  return (
    <div className="_PROFILE_QUEST_CARD_" onClick={handleCardClick}>
      <div className="card-main-info">
        <Badge step={step} align="end" />
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
        <Text
          align="start"
          fontColor="gil-blue"
          fontSize="small"
          fontWeight="bold"
        >
          퀘스트 진행률
        </Text>
        <div className="progress">
          {/* TODO: progress null이나 undefiend일 때 사용할 값 변경 */}
          <Degree value={progress ?? 0} />
        </div>
        <div className="more-info-wrapper">
          <Text
            align="start"
            fontColor="main"
            fontSize="large"
            fontWeight="regular"
          >
            {/* TODO: exp 추가하기*/}
            ??? EXP
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
