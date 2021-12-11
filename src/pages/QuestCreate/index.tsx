import React from 'react';
import { Text, List, Button } from '@src/components/atoms';
import { questMain } from '@src/pages/QuestCreate/quest_data.json';
import lighthouse from '@src/assets/images/lighthouse.svg';
import QuestMain from './QuestMain';
import QuestDetail from './QuestDetail';
import QuestSub from './QuestSub';
import './style.scss';

const QuestCreate: React.FC = () => {
  return (
    <div className="quest-background">
      <section className="quest-wrapper">
        <div className="quest-header">
          <div className="title">
            <Text className="title-text" fontWeight="bold">
              퀘스트 생성
            </Text>
            <List listData={questMain.list} />
          </div>
          <img src={lighthouse} alt="lighthouse" />
        </div>
        <QuestMain />
        <QuestSub />
        <QuestDetail />
        <div className="quest-footer">
          <Button
            innerText="등록"
            buttonColor="white"
            textColor="gil-blue"
            textSize="medium"
            hasShadow
          />
        </div>
      </section>
    </div>
  );
};

export default QuestCreate;
