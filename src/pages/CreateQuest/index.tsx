import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Text, List, Button, Loading, Toast } from '@src/components/atoms';
import {
  createQuestSelector,
  ListType,
  resetCreateQuest,
} from '@src/slices/createQuestSlice';
import { usePostQuestsMutation } from '@src/services/giljob';
import useCheckState from '@src/hooks/useCheckState';
import { questMain } from '@src/constants/createQuest/quest_data.json';
import lighthouse from '@src/assets/images/lighthouse.svg';
import Main from './Main';
import Detail from './Detail';
import Sub from './Sub';
import './style.scss';

const CreateQuest: React.FC = () => {
  const [postQuest, { isLoading }] = usePostQuestsMutation();
  const questState = useSelector(createQuestSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCheckState = useCheckState();

  useEffect(() => {
    return () => {
      dispatch(resetCreateQuest());
    };
  }, []);

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

  const handleRegisterQuest = () => {
    if (handleCheckState(questState)) handleToast();
    else {
      const parsedList = questState.subQuestList.map(({ name }: ListType) => ({
        name,
      }));

      postQuest({
        ...questState,
        ...{
          subQuestList: parsedList,
          difficulty: (questState.difficulty - 10) / 5,
        },
      })
        .unwrap()
        .then(() => history.push('/quest'));
    }
  };

  return (
    <>
      {isLoading && <Loading />}
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
            <Button
              innerText="등록"
              buttonColor="white"
              textColor="gil-blue"
              textSize="medium"
              hasShadow
              handleClick={handleRegisterQuest}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateQuest;
