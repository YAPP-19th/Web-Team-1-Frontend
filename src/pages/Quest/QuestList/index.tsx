import React, { useState, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';
import { Button, MenuBar, Pagination, SearchBar } from '@src/components/atoms';
import { Card } from '@src/components/molecules';
import { questListSelector } from '@src/slices/questListSlice';
import {
  useGetQuestsQuery,
  useGetQuestsPositionsCountQuery,
} from '@src/services/giljob';

interface QuestListMenu {
  position: string;
  questCount: number;
}

/* TODO: 현재 point로 레벨을 처리하기 때문에 TypeScript 처리를 위해 사용
 * 추후 레벨 처리 방법이 더 명확해지면 수정 예정
 */
const parseType = (num: number) => {
  const array: (1 | 2 | 3 | 4 | 5)[] = [1, 2, 3, 4, 5];
  return array[num];
};

// TODO: 마찬가지로 TypeScript 처리를 위해 사용
const difficultyLabels: ('입문' | '초급' | '중급' | '고급' | '통달')[] = [
  '입문',
  '초급',
  '중급',
  '고급',
  '통달',
];

const QuestList: React.FC = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');
  const { position, page } = useSelector(questListSelector);

  /* TODO: 서버에서 아래 객체를 담아주도록 쿼리가 개선될 예정
   * {
   *   "position" : "퀘스트 전체",
   *   "questCount" : {모든 퀘스트 개수},
   * }
   */
  const { data: questPositionCount } = useGetQuestsPositionsCountQuery();
  const { data: questList } = useGetQuestsQuery({
    keyword: searchInput,
    position,
    size: 16,
    page,
  });
  const parsedQuestList = useMemo(() => {
    return questList?.data.questList.map((quest) => {
      // TODO: thumbnail이 적용될 예정
      const { id, difficulty, name, participantCount, position, writer } =
        quest;
      const { nickname, point } = writer;
      return {
        id,
        step: difficultyLabels[difficulty],
        category: position,
        name,
        exp: point,
        participant: participantCount,
        author: nickname,
        // TODO: level 관련 계산식 수정 예정
        level: parseType(Math.ceil(point / 100) % 5),
      };
    });
  }, [questList]);

  const menuList = useMemo(() => {
    /* TODO: 서버에서 아래 객체를 담아주도록 쿼리가 개선될 예정
     * {
     *   "position" : "퀘스트 전체",
     *   "questCount" : {모든 퀘스트 개수},
     * }
     */
    const dummyList: QuestListMenu[] = [
      {
        position: '퀘스트 전체',
        questCount: 0,
      },
    ];
    if (questPositionCount?.data) {
      return dummyList.concat(questPositionCount?.data);
    }
    return dummyList;
  }, [questPositionCount]);

  const handleCreateQuestButtonClick = useCallback(() => {
    history.push('/create-quest');
  }, [history]);

  const handleSearchBarSubmit = useCallback((inputMessage: string) => {
    setSearchInput(inputMessage);
  }, []);

  return (
    <div className="quest-page-quest-list">
      <section className="quest-list-wrapper">
        <MenuBar menuList={menuList} />
        <div className="quest-list-tools">
          <SearchBar
            placeholder="내게 맞는 취업 퀘스트를 검색해 보세요"
            onSubmit={handleSearchBarSubmit}
          />
          <Button
            innerText="퀘스트 생성"
            buttonColor="white"
            textColor="gil-blue"
            textSize="medium"
            handleClick={handleCreateQuestButtonClick}
            hasShadow
          />
        </div>
        <div className="quest-card-wrapper">
          {parsedQuestList?.map(
            ({ id, step, category, name, exp, participant, author, level }) => (
              <Card
                id={id}
                step={step}
                category={category}
                name={name}
                exp={exp}
                participant={participant}
                author={author}
                level={level}
                key={id}
              />
            ),
          )}
        </div>
        <div className="quest-pagination-wrapper">
          <Pagination
            pageSize={16}
            totalLength={questList?.data.totalCount ?? 1}
            currentPage={page ?? 1}
          />
          &nbsp;
        </div>
      </section>
    </div>
  );
};

export default QuestList;
