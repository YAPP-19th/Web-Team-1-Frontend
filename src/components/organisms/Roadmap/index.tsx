import { Icon, Text } from '@src/components/atoms';
import React from 'react';
import './style.scss';

export interface RoadmapProps {
  iconSize: 'small' | 'medium' | 'large' | 'profile';
  iconLevel?: 1 | 2 | 3 | 4 | 5;
  authorName: string;
  category: string;
  title: string;
  questList: string[];
}

const Roadmap: React.FC<RoadmapProps> = ({
  iconSize,
  iconLevel = 1,
  authorName,
  category,
  title,
  questList,
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
        <div className="roadmap-scrap">
          <Text fontColor="white" fontSize="small" fontWeight="medium">
            스크랩
          </Text>
          <div className="star" />
        </div>
      </div>
      <div className="roadmap-body">
        <div className="ship" />
        {questList.map((quest) => (
          <div className="road-wrapper" key="quest">
            <div className="road-left" />
            <div className="road-middle">
              <div className="road-circle" />
            </div>
            <div className="road-right">
              <div className="item-line" />
              <div className="item">
                <Text fontColor="white" fontSize="small" fontWeight="light">
                  {quest}
                </Text>
              </div>
            </div>
          </div>
        ))}
        <div className="destination" />
      </div>
    </div>
  );
};

export default Roadmap;
