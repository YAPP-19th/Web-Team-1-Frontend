import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  useGetQuestsInfoQuery,
  useGetQuestsParticipationStatusQuery,
  useGetQuestsSubquestQuery,
  useGetUsersMeQuery,
} from '@src/services/giljob';
import { setQuestId } from '@src/slices/reviewListSlice';
import './style.scss';
import DetailContent from './DetailContent';
import DetailInfo from './DetailIntro';
import DetailDesc from './DetailDesc';
import DetailReview from './DetailReview';
import DetailQuestInteract from './DetailQuestInteract';

interface DetailParams {
  questId: string;
}

const Detail = () => {
  const dispatch = useDispatch();
  const { questId } = useParams<DetailParams>();
  const parsedQuestId = useMemo(() => parseInt(questId, 10), [questId]);
  const { data: questInfo } = useGetQuestsInfoQuery({
    questId: parsedQuestId,
  });
  const { data: subQuestInfo } = useGetQuestsSubquestQuery({
    questId: parsedQuestId,
  });
  const { data: userInfo } = useGetUsersMeQuery();
  const { data: participationInfo } = useGetQuestsParticipationStatusQuery({
    questId: parsedQuestId,
    userId: userInfo?.data.id ?? 0,
  });
  useEffect(() => {
    dispatch(setQuestId(parseInt(questId, 10)));
  }, [dispatch, questId]);
  return (
    <>
      <DetailInfo info={questInfo?.data} />
      {participationInfo?.data === '참여중인 퀘스트입니다.' && (
        <DetailContent info={subQuestInfo?.data} />
      )}
      <DetailDesc info={questInfo?.data} />
      <DetailReview
        questId={parsedQuestId}
        participationInfo={participationInfo?.data}
      />
      <DetailQuestInteract
        questId={parsedQuestId}
        participationInfo={participationInfo?.data}
      />
    </>
  );
};

export default Detail;
