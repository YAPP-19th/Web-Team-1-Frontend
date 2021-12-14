import React from 'react';
import { Text, List, Button } from '@src/components/atoms';
import { Toaster } from 'react-hot-toast';
import { roadmapMain } from '@src/pages/RoadmapCreate/roadmap_data.json';
import map from '@src/assets/images/map.png';
import RoadmapMain from './RoadmapMain';
import RoadmapDetail from './RoadmapDetail';
import './style.scss';

const RoadmapCreate: React.FC = () => {
  return (
    <div className="roadmap-background">
      <section className="roadmap-wrapper">
        <div className="roadmap-header">
          <div className="title">
            <Text className="title-text" fontWeight="bold">
              로드맵 등록
            </Text>
            <List listData={roadmapMain.list} />
          </div>
          <img src={map} alt="map" />
        </div>
        <RoadmapMain />
        <RoadmapDetail />
        <div className="roadmap-footer">
          <Button
            innerText="등록"
            buttonColor="white"
            textColor="gil-blue"
            textSize="medium"
            hasShadow
          />
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default RoadmapCreate;
