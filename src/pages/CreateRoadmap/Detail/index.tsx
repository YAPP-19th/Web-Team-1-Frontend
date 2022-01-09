import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import {
  Text,
  Board,
  SearchBar,
  List,
  Input,
  Toast,
  Loading,
} from '@src/components/atoms';
import { Card, DragDrop } from '@src/components/molecules';
import { useGetQuestsQuery } from '@src/services/giljob';
import {
  createRoadmapSelector,
  setQuestList,
  RoadmapQuestListType,
} from '@src/slices/createRoadmapSlice';
import { DragDropListType } from '@src/components/molecules/DragDrop';
import {
  roadmapDetail,
  roadmapCreateQuest,
  roadmapCreateText,
  roadmapCreateList,
  roadmapPreview,
} from '@src/pages/CreateRoadmap/roadmap_data.json';
import './style.scss';

const Detail: React.FC = () => {
  const { questList } = useSelector(createRoadmapSelector);
  const [keyword, setKeyword] = useState('');
  const { data: rawQuestsData, isLoading } = useGetQuestsQuery({
    keyword,
  });
  const dispatch = useDispatch();

  const handleToast = useCallback(
    () =>
      toast(
        <Toast
          mainText="해당 퀘스트가 등록되었습니다!"
          subText="로드맵 리스트 확인"
          color="blue"
        />,
        {
          duration: 2000,
          position: 'bottom-right',
          style: {
            background: 'transparent',
            boxShadow: 'none',
          },
        },
      ),
    [],
  );

  // 검색, 카드 이벤트
  const handleSearch = useCallback((keyword: string) => {
    setKeyword(keyword);
  }, []);

  const handleCardClick = (questId: number, name: string) => {
    dispatch(setQuestList([...questList, { questId, name }]));
    handleToast();
  };

  const handleCardButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      console.log('퀘스트 상세보기');
    },
    [],
  );

  // 텍스트 퀘스트 이벤트
  const handleTextQuest = (name: string) => {
    dispatch(setQuestList([...questList, { questId: null, name }]));
  };

  const handleQuestList = useCallback(
    (value: DragDropListType) => {
      dispatch(setQuestList(value as RoadmapQuestListType[]));
    },
    [dispatch],
  );

  return (
    <>
      {isLoading && <Loading />}
      <Board height={205}>
        <article className="roadmap-detail">
          <Text fontWeight="bold" fontSize="large">
            {roadmapDetail.main} <span className="blue-star">*</span>
          </Text>
          <Text fontColor="gil-blue">{roadmapDetail.sub}</Text>
          <List listData={roadmapDetail.list} />
        </article>
        <article className="roadmap-quest">
          <Text fontWeight="bold" fontSize="large">
            {roadmapCreateQuest.main}
          </Text>
          <div className="contents">
            <div className="roadmap-quest-header">
              <SearchBar
                placeholder="로드맵에 등록할 퀘스트를 검색해주세요"
                onSubmit={handleSearch}
              />
            </div>
            <div className="roadmap-quest-list">
              {rawQuestsData?.data.questList.map(
                ({
                  id,
                  name,
                  position,
                  participantCount,
                  writer,
                  difficulty,
                }) => (
                  <Card
                    id={id}
                    step="입문" // 백엔드에서 단계를 줘야함
                    category={position}
                    name={name}
                    exp={writer.point}
                    participant={participantCount}
                    author={writer.nickname}
                    level={difficulty}
                    key={id}
                    hasBorder={questList.includes(name)}
                    handleCardClick={() => handleCardClick(id, name)}
                    isButtonModal
                  />
                ),
              )}
            </div>
          </div>
        </article>
        <article className="roadmap-text">
          <Text fontWeight="bold" fontSize="large">
            {roadmapCreateText.main}
          </Text>
          <div className="contents">
            <Input
              hasCount={false}
              placeholder="기타 수행할 로드맵을 등록해주세요"
              onSubmit={handleTextQuest}
            />
          </div>
        </article>
        <article className="roadmap-list">
          <Text fontWeight="bold" fontSize="large">
            {roadmapCreateList.main}
          </Text>
          <div className="contents">
            <DragDrop
              hasInput={false}
              list={questList}
              onDispatch={handleQuestList}
            />
          </div>
        </article>

        {/* 미리보기 임시 컴포넌트 */}
        <article className="roadmap-preview">
          <Text fontWeight="bold" fontSize="large">
            {roadmapPreview.main}
          </Text>
        </article>
      </Board>
    </>
  );
};

export default Detail;
