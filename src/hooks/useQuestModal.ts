import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useGetQuestsInfoQuery } from '@src/services/giljob';
import { setModalOn } from '@src/slices/modalSlice';
import { QuestsInfo } from '@src/services/types/response';

const useQuestModal = (questId: number) => {
  const { data } = useGetQuestsInfoQuery({
    questId,
  });
  const dispatch = useDispatch();
  const questModal: QuestsInfo = useMemo(
    () => ({
      id: data?.data.id ?? 0,
      name: data?.data.name ?? '',
      position: data?.data.position ?? '',
      difficulty: data?.data.difficulty ?? 1,
      tagList: data?.data.tagList ?? [],
      writer: data?.data.writer ?? {
        id: 0,
        nickname: '',
        position: '',
        point: 0,
        intro: '',
      },
      detail: data?.data.detail ?? '',
      participantCount: data?.data.participantCount ?? 0,
    }),
    [data],
  );
  const setQuestModal = useCallback(() => {
    dispatch(setModalOn());
  }, [dispatch]);

  return { questModal, setQuestModal };
};

export default useQuestModal;
