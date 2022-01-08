import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Text, List, Button, Toast, Loading } from '@src/components/atoms';
import useCheckState from '@src/hooks/useCheckState';
import {
  createRoadmapSelector,
  RoadmapQuestListType,
} from '@src/slices/createRoadmapSlice';
import { usePostRoadmapsMutation } from '@src/services/giljob';
import { roadmapMain } from '@src/pages/CreateRoadmap/roadmap_data.json';
import map from '@src/assets/images/map.png';
import Main from './Main';
import Detail from './Detail';
import './style.scss';

const RoadmapCreate: React.FC = () => {
  const [postRoadmap, { isLoading }] = usePostRoadmapsMutation();
  const roadmapState = useSelector(createRoadmapSelector);
  const history = useHistory();
  const handleCheckState = useCheckState();

  const handleToast = useCallback(
    () =>
      toast(
        <Toast
          mainText="입력 정보를 전부 확인해주세요!"
          subText="입력 정보 확인"
          color="red"
        />,
        {
          duration: 2000,
          position: 'bottom-center',
          style: {
            background: 'transparent',
            boxShadow: 'none',
          },
        },
      ),
    [],
  );

  const handleRegisterRoadmap = () => {
    if (handleCheckState(roadmapState)) handleToast();
    else {
      const parsedList = roadmapState.questList.map(
        ({ questId, name }: RoadmapQuestListType) =>
          questId
            ? {
                questId,
                name: null,
              }
            : {
                questId,
                name,
              },
      );

      postRoadmap({ ...roadmapState, ...{ questList: parsedList } })
        .unwrap()
        .then(() => history.push('/quest'));
    }
  };

  return (
    <>
      {isLoading && <Loading />}
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
          <Main />
          <Detail />
          <div className="roadmap-footer">
            <Button
              innerText="등록"
              buttonColor="white"
              textColor="gil-blue"
              textSize="medium"
              hasShadow
              handleClick={handleRegisterRoadmap}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default RoadmapCreate;
