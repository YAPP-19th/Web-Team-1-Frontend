import React from 'react';
import cn from 'classnames';
import './style.scss';
import shipIcon from '@src/assets/images/ship.svg';
import destinationIcon from '@src/assets/images/destination.svg';
import { Icon, Text } from '@src/components/atoms';

interface RoadmapContent {
  id: number;
  name: string;
  isRealQuest: boolean;
}

export interface RoadmapProps {
  iconSize: 'small' | 'medium' | 'large' | 'profile';
  iconLevel?: 1 | 2 | 3 | 4 | 5;
  authorName: string;
  category: string;
  title: string;
  contentList: RoadmapContent[];
  isScrap?: boolean;
}

const Roadmap: React.FC<RoadmapProps> = ({
  iconSize,
  iconLevel = 1,
  authorName,
  category,
  title,
  contentList,
  isScrap = true,
}) => {
  return (
    <div className="_ROADMAP_">
      <div className="roadmap-header">
        <div className="author-info">
          <Icon size={iconSize} level={iconLevel} />
          <div className="author-detail">
            <Text fontColor="main" fontSize="small" fontWeight="regular">
              {authorName}
            </Text>
            <Text fontColor="gil-blue" fontSize="small" fontWeight="regular">
              {category}
            </Text>
          </div>
        </div>
        <Text
          className="roadmap-title"
          fontColor="main"
          fontSize="xx-large"
          fontWeight="bold"
        >
          {title}
        </Text>
        {isScrap ? (
          <div className="roadmap-scrap-wrapper">
            <div className="roadmap-scrap">
              <Text fontColor="white" fontSize="small" fontWeight="medium">
                스크랩
              </Text>
              <div className="star" />
            </div>
          </div>
        ) : (
          <div className="roadmap-dummy" />
        )}
      </div>
      <div className="roadmap-body">
        <div className="ship">
          <img src={shipIcon} alt="ship icon" />
        </div>
        {contentList.map((quest, index) => (
          <div className="road-wrapper" key={quest.id}>
            <div className="road-left">
              {index % 2 ? (
                <div />
              ) : (
                <>
                  <div className="item-line" />
                  <div
                    className={cn(
                      quest.isRealQuest ? 'item' : 'non-quest-item',
                    )}
                  >
                    <Text
                      fontColor={quest.isRealQuest ? 'white' : 'gil-blue'}
                      fontSize="small"
                      fontWeight="light"
                    >
                      {quest.name}
                    </Text>
                  </div>
                </>
              )}
            </div>
            <div className="road-middle">
              <div className="road-circle" />
            </div>
            <div className="road-right">
              {index % 2 ? (
                <>
                  <div className="item-line" />
                  <div
                    className={cn(
                      quest.isRealQuest ? 'item' : 'non-quest-item',
                    )}
                  >
                    <Text
                      fontColor={quest.isRealQuest ? 'white' : 'gil-blue'}
                      fontSize="small"
                      fontWeight="light"
                    >
                      {quest.name}
                    </Text>
                  </div>
                </>
              ) : (
                <div />
              )}
            </div>
          </div>
        ))}
        <div className="destination">
          <img src={destinationIcon} alt="destination icon" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
