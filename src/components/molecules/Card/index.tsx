import React, { useCallback } from 'react';
import { Badge, Button, Text } from '@src/components/atoms';
import { Author } from '@src/components/molecules';
import cn from 'classnames';
import './style.scss';
import { useHistory } from 'react-router-dom';

export interface CardProps {
  id: number;
  step: '입문' | '초급' | '중급' | '고급' | '통달';
  category: string;
  name: string;
  exp: number;
  participant: number;
  author: string;
  level: 1 | 2 | 3 | 4 | 5;
  hasBorder?: boolean;
  handleCardClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleButtonClick?: (questId: number) => void;
  onDispatch?: () => void;
  isButtonModal?: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  step,
  category,
  name,
  exp,
  participant,
  author,
  level,
  hasBorder = false,
  handleCardClick,
  handleButtonClick,
  onDispatch,
  isButtonModal = false,
}) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    if (isButtonModal) {
      handleButtonClick?.(id);
      onDispatch?.();
      return;
    }
    history.push(`/detail/${id}`);
  }, [handleButtonClick, history, id, isButtonModal, onDispatch]);

  return (
    <div
      className={cn('_CARD_', { hasBorder })}
      onClick={handleCardClick}
      aria-hidden="true"
    >
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
      <div className="card-last-info">
        <Author authorName={author} iconSize="small" iconLevel={level} />
        <Button
          innerText="퀘스트 상세정보"
          buttonColor="white"
          textColor="gil-blue"
          textSize="medium"
          hasBorder
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
