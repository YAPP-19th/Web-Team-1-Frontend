import React, { useMemo } from 'react';
import { InfoCount } from '@src/components/molecules';
import { useGetQuestsCountQuery } from '@src/services/giljob';
import './style.scss';

const Count: React.FC = () => {
  const { data, isSuccess } = useGetQuestsCountQuery();
  const infoList = useMemo(
    () => [
      {
        title: '전체 퀘스트 수',
        count: data?.data.totalQuestCount,
        unit: '개',
      },
      {
        title: '진행 중 퀘스트',
        count: data?.data.onProgressQuestCount,
        unit: '개',
      },
      {
        title: '퀘스트 참여자 수',
        count: data?.data.totalParticipantCount,
        unit: '명',
      },
    ],
    [data],
  );

  return (
    <section className="count-background">
      {isSuccess && <InfoCount infoList={infoList} />}
    </section>
  );
};

export default Count;
