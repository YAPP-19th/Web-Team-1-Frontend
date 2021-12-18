import React from 'react';
import { Link } from 'react-router-dom';
import { Text, List, Button } from '@src/components/atoms';
import { questMain } from '@src/pages/CreateQuest/quest_data.json';
import lighthouse from '@src/assets/images/lighthouse.svg';
import Main from './Main';
import Detail from './Detail';
import Sub from './Sub';
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
        <Main />
        <Sub />
        <Detail />
        <div className="quest-footer">
          <Link to="/create-roadmap">
            <Button
              innerText="등록"
              buttonColor="white"
              textColor="gil-blue"
              textSize="medium"
              hasShadow
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QuestCreate;
