import React from 'react';
import './style.scss';
import { Board, Checkbox, Graph, Text } from '@src/components/atoms';
import { QuestsSubquest } from '@src/services/types/response';

export interface DetailContentProps {
  info?: QuestsSubquest;
}

const DetailContent: React.FC<DetailContentProps> = ({ info }) => {
  return info?.subQuestProgressList.length ? (
    <section className="quest-detail-content">
      <div className="detail-content-wrapper">
        <Board width={115} color="#f3f3f3">
          <div className="detail-achievement-wrapper">
            <Text
              className="quest-achievement-rate"
              fontWeight="bold"
              fontSize="large"
            >
              퀘스트 달성률
            </Text>
            <Graph value={info?.progress ?? 0} color="#0389ff" />
            <Text
              className="quest-achievement-number"
              fontWeight="bold"
              fontSize="large"
              fontColor="gil-blue"
            >
              {info?.progress ?? 0}%
            </Text>
          </div>
          <div className="detail-subquest-wrapper">
            {info?.subQuestProgressList.map(
              ({ subQuestId, subQuestName, isCompleted }) => (
                <Checkbox
                  id={subQuestId}
                  title={subQuestName}
                  status={isCompleted}
                  key={subQuestId}
                />
              ),
            )}
          </div>
        </Board>
      </div>
    </section>
  ) : null;
};

export default DetailContent;
