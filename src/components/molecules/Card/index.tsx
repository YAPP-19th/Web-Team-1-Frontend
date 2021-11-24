import React from 'react';
import './style.scss';
import { Text, Badge } from '@src/components/atoms';

export interface CardProps {
  step: '입문' | '초급' | '중급' | '고급' | '통달';
  category: string;
  name: string;
  exp: number;
  participant: number;
  author: string;
}

const Card: React.FC<CardProps> = ({
  step,
  category,
  name,
  exp,
  participant,
  author,
}) => {
  return (
    <div className="_CARD_">
      <div className="_TOP_">
        <Badge step={step} align="end" />
        <Text
          align="start"
          fontColor="gil-blue"
          fontSize="large"
          fontWeight="bold"
          lineHeight="wide"
        >
          {category}
        </Text>
        <Text
          align="start"
          fontColor="white"
          fontSize="xx-large"
          fontWeight="bold"
          lineHeight="wide"
        >
          {name}
        </Text>
      </div>
      <div className="_MIDDLE_">
        <Text
          align="start"
          fontColor="main"
          fontSize="large"
          fontWeight="medium"
          lineHeight="wide"
        >
          {exp} Exp
        </Text>
        <Text
          align="start"
          fontColor="main"
          fontSize="small"
          fontWeight="medium"
          lineHeight="wide"
        >
          {participant} 참여 중
        </Text>
      </div>
      <div className="_BOTTOM_">
        <Text
          align="start"
          fontColor="main"
          fontSize="medium"
          fontWeight="regular"
          lineHeight="wide"
        >
          {author}
        </Text>
        {/* 이 아래로 아이콘과 버튼이 들어갑니다. */}
      </div>
    </div>
  );
};

export default Card;
