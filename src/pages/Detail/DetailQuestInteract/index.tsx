import React, { useState, useCallback } from 'react';
import './style.scss';
import { FloatingBar, Button, Toast } from '@src/components/atoms';
import {
  usePatchQuestsCompleteMutation,
  usePostQuestsParticipationMutation,
} from '@src/services/giljob';
import toast from 'react-hot-toast';

export interface DetailQuestInteractProps {
  questId: number;
  participationInfo?: string;
}

const DetailQuestInteract: React.FC<DetailQuestInteractProps> = ({
  questId,
  participationInfo,
}) => {
  const [participationStatus, setParticipationStatus] = useState(false);
  const [completeStatus, setCompleteStatus] = useState(false);
  const [postQuestsParticipation] = usePostQuestsParticipationMutation();
  const [patchQuestsComplete] = usePatchQuestsCompleteMutation();

  const generateToast = useCallback(
    (mainText: string, subText: string) =>
      toast(<Toast mainText={mainText} subText={subText} color="blue" />, {
        duration: 2000,
        position: 'bottom-left',
        style: {
          background: 'transparent',
          boxShadow: 'none',
        },
      }),
    [],
  );

  const acceptQuest = useCallback(() => {
    postQuestsParticipation({ questId });
    setParticipationStatus(true);
    location.reload();
    generateToast('퀘스트를 수락했습니다!', '화이팅~');
  }, [generateToast, postQuestsParticipation, questId]);

  const completeQuest = useCallback(() => {
    patchQuestsComplete({ questId });
    generateToast('퀘스트를 완료했습니다!', `퀘스트 완료 보상 획득`);
    setCompleteStatus(true);
    location.reload();
  }, [generateToast, patchQuestsComplete, questId]);

  return (
    <FloatingBar className="handle-quest-bar">
      {!participationStatus &&
        participationInfo === '아직 참여하지 않은 퀘스트입니다.' && (
          <Button
            innerText="퀘스트 수락"
            buttonColor="gil-blue"
            textColor="white"
            hasBorder
            handleClick={() => acceptQuest()}
          />
        )}
      {(participationStatus ||
        participationInfo === '참여중인 퀘스트입니다.') && (
        <>
          {!completeStatus && (
            <Button
              innerText="퀘스트 완료"
              buttonColor="gil-blue"
              textColor="white"
              hasBorder
              handleClick={() => completeQuest()}
            />
          )}
          <Button
            innerText={completeStatus ? '완료한 퀘스트' : '퀘스트 포기'}
            buttonColor="dark-gray"
            textColor="white"
            hasBorder
          />
        </>
      )}
    </FloatingBar>
  );
};

export default DetailQuestInteract;
