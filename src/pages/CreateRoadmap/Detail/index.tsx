import React, { useState, useCallback, useEffect } from 'react';
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
import { Roadmap } from '@src/components/organisms';
import { useGetQuestsQuery, useGetUsersMeQuery } from '@src/services/giljob';
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
  const { name, position, questList } = useSelector(createRoadmapSelector);
  const [contentList, setContentList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const { data: rawQuestsData, isLoading } = useGetQuestsQuery({
    keyword,
  });
  const { data: rawUserData } = useGetUsersMeQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    const parsedList = questList.map(
      ({ name, isRealQuest }: RoadmapQuestListType, index: number) => ({
        id: index,
        name,
        isRealQuest,
      }),
    );
    setContentList(parsedList);
  }, [questList]);

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
    dispatch(
      setQuestList([...questList, { questId, name, isRealQuest: true }]),
    );
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
    dispatch(
      setQuestList([...questList, { questId: null, name, isRealQuest: false }]),
    );
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
              {rawQuestsData?.data.contentList.map(
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
        <article className="roadmap-preview">
          <Text fontWeight="bold" fontSize="large">
            {roadmapPreview.main}
          </Text>
          <Roadmap
            title={name}
            category={position}
            iconSize="medium"
            authorName={rawUserData?.data.nickname || ''}
            questList={contentList}
            isScrap={false}
          />
        </article>
      </Board>
    </>
  );
};

export default Detail;
