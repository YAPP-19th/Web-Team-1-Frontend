import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useGetRoadmapsQuery } from '@src/services/giljob';
import { setModalOn } from '@src/slices/modalSlice';

const useRoadmapModal = (roadmapId: number) => {
  const { data } = useGetRoadmapsQuery({ roadmapId });
  const dispatch = useDispatch();
  const roadmapModal = useMemo(
    () => ({
      title: data?.data.name ?? '',
      authorName: data?.data.writer.nickname ?? '',
      category: data?.data.position ?? '',
      contentList: data?.data.questList ?? [],
    }),
    [data],
  );
  const setRoadmapModal = useCallback(() => {
    dispatch(setModalOn());
  }, [dispatch]);

  return { roadmapModal, setRoadmapModal };
};

export default useRoadmapModal;
