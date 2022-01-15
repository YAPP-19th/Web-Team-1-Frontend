import React from 'react';
import './style.scss';
import { Badge, Text } from '@src/components/atoms';
import { Author } from '@src/components/molecules';
import { QuestsInfo } from '@src/services/types/response';

export interface DetailInfoProps {
  info?: QuestsInfo;
}

const DetailInfo: React.FC<DetailInfoProps> = ({ info }) => {
  return (
    <section className="quest-detail-intro">
      <div className="detail-intro-wrapper">
        <div className="detail-badges">
          <Badge step="고급" />
          <Badge step="FRONTEND" />
        </div>
        <div className="detail-title">
          <Text fontSize="xxx-large" fontColor="main" fontWeight="bold">
            {info?.name}
          </Text>
        </div>
        <div className="detail-base-info">
          <div className="detail-info-quest">
            <Text fontSize="medium" fontColor="main" fontWeight="regular">
              퀘스트 완료 보상
            </Text>
            <Text fontSize="medium" fontColor="gil-blue" fontWeight="bold">
              {/* TODO: difficulty와 exp의 관계 파악 필요 */}
              {/* {`${info?.difficulty.toString()}00` ?? 0} Exp */}
              {info?.difficulty ? info.difficulty * 5 + 10 : 0} Exp
            </Text>
            <Text fontSize="medium" fontColor="gray" fontWeight="light">
              |
            </Text>
            <div className="participant-count">
              <Text fontSize="medium" fontColor="gray" fontWeight="light">
                현재&nbsp;
              </Text>
              <Text fontSize="medium" fontColor="gray" fontWeight="bold">
                {info?.participantCount ?? 0}명
              </Text>
              <Text fontSize="medium" fontColor="gray" fontWeight="light">
                이 이 퀘스트에 참여 중입니다
              </Text>
            </div>
          </div>
          <div className="detail-info-author">
            <Author
              authorName={info?.writer.nickname ?? ''}
              iconSize="small"
              // TODO: iconLevel
              // iconLevel={1}
              iconLevel={
                (Math.floor((info?.writer.point ?? 0) / 100) + 1) as
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
              }
            />
          </div>
        </div>
        <hr className="detail-hr" />
      </div>
    </section>
  );
};

export default DetailInfo;
