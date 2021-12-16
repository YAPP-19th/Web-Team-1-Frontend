import React from 'react';
import { Badge, ProgressBar, Text } from '@src/components/atoms';
import { Author } from '@src/components/molecules';
import styled from 'styled-components';

import './style.scss';
import { QuestFiltering } from '@src/pages/Profile/QuestList';

export interface ProfileQuestCardProps {
  step: '입문' | '초급' | '중급' | '고급' | '통달';
  category: string;
  name: string;
  exp: number;
  participant: number;
  author: string;
  level: 1 | 2 | 3 | 4 | 5;
  progress: number;
  status: QuestFiltering;
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
  category,
  name,
  exp,
  participant,
  author,
  level,
  progress,
  status,
}) => {
  return (
    // TODO: 클릭 시 해당 퀘스트로 이동
    <div className="_PROFILE_QUEST_CARD_">
      <div className="card-main-info">
        <Badge step={step} align="end" />
        <Text
          align="start"
          fontColor="gil-blue"
          fontSize="x-large"
          fontWeight="bold"
        >
          {category}
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
          <Degree value={progress} />
        </div>
        <div className="more-info-wrapper">
          <Text
            align="start"
            fontColor="main"
            fontSize="large"
            fontWeight="regular"
          >
            {exp} Exp
          </Text>
          <Text
            align="start"
            fontColor="main"
            fontSize="small"
            fontWeight="medium"
          >
            {participant}명 참여 중
          </Text>
        </div>
      </div>
      <span className="divider"></span>
      <div className="card-last-info">
        <Author authorName={author} iconSize="small" iconLevel={level} />
        {status === QuestFiltering.Proceeding && (
          // TODO: 클릭 시 해당 퀘스트 삭제
          <button className="delete-button" type="button">
            <span className="line" />
          </button>
        )}
      </div>
    </div>
  );
};
export default ProfileQuestCard;
