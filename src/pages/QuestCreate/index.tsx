import React from 'react';
import { Text, List, Button } from '@src/components/atoms';
import { questCreate } from '@src/pages/QuestCreate/quest_data.json';
import lighthouse from '@src/assets/images/lighthouse.svg';
import QuestMain from './QuestMain';
import QuestDetail from './QuestDetail';
import QuestSub from './QuestSub';
import './style.scss';

const QuestCreate: React.FC = () => {
  return (
    <div className="quest-background">
      <section className="quest-wrapper">
        <article className="quest-title-wrapper">
          <div className="title">
            <Text className="title-text" fontWeight="bold">
              퀘스트 생성
            </Text>
            <List listData={questCreate.list} />
          </div>
          <img src={lighthouse} alt="lighthouse" />
        </article>
        <QuestMain />
        <QuestSub />
        <QuestDetail />
        <article className="quest-button-wrapper">
          <Button
            innerText="등록"
            buttonColor="white"
            textColor="gil-blue"
            textSize="medium"
            hasShadow
          />
        </article>
      </section>
    </div>
  );
};

export default QuestCreate;
