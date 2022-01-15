import React, { useState, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';
import { Button, MenuBar, Pagination, SearchBar } from '@src/components/atoms';
import { Card } from '@src/components/molecules';
import {
  useGetQuestsQuery,
  useGetQuestsCountQuery,
  useGetQuestsPositionsCountQuery,
} from '@src/services/giljob';
import { MenuItem } from '@src/components/atoms/MenuBar';

/* TODO: 현재 point로 레벨을 처리하기 때문에 TypeScript 처리를 위해 사용
 * 추후 레벨 처리 방법이 더 명확해지면 수정 예정
 */
// const parseType = (num: number) => {
//   const array: (1 | 2 | 3 | 4 | 5)[] = [1, 2, 3, 4, 5];
//   return array[num];
// };

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
  const [page, setPage] = useState(0);
  const [position, setPosition] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const { data: questCount } = useGetQuestsCountQuery();
  const { data: questPositionCount } = useGetQuestsPositionsCountQuery();
  const { data: questList } = useGetQuestsQuery({
    keyword: searchInput,
    position,
    size: 16,
    page,
  });
  const parsedQuestList = useMemo(() => {
    return questList?.data.contentList.map((quest) => {
      // TODO: thumbnail이 적용될 예정
      const {
        id,
        difficulty,
        name,
        participantCount,
        position,
        writer,
        thumbnail,
      } = quest;
      const { nickname, point } = writer;
      return {
        id,
        step: difficultyLabels[difficulty],
        category: position,
        name,
        exp: 10 + difficulty * 5,
        participant: participantCount,
        author: nickname,
        // TODO: level 관련 계산식 수정 예정
        // level: parseType(Math.ceil(point / 100) % 5),
        level: (Math.floor(point / 100) + 1) as 1 | 2 | 3 | 4 | 5,
        thumbnail,
      };
    });
  }, [questList]);

  const menuList = useMemo(() => {
    const dummyList: MenuItem[] = [
      {
        index: 0,
        value: '',
        count: questCount?.data.totalQuestCount ?? 0,
      },
    ];
    questPositionCount?.data.forEach(
      ({ position: menuPosition, questCount: menuCount }, index) => {
        dummyList.push({
          index: index + 1,
          value: menuPosition,
          count: menuCount,
        });
      },
    );
    return dummyList;
  }, [questCount, questPositionCount]);

  const handleCreateQuestButtonClick = useCallback(() => {
    history.push('/create-quest');
  }, [history]);

  const handleSearchBarSubmit = useCallback((inputMessage: string) => {
    setSearchInput(inputMessage);
    setPage(0);
  }, []);

  return (
    <div className="quest-page-quest-list">
      <section className="quest-list-wrapper">
        <MenuBar menuList={menuList} onDispatch={setPosition} />
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
            ({
              id,
              step,
              category,
              name,
              exp,
              participant,
              author,
              level,
              thumbnail,
            }) => (
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
                thumbnail={thumbnail}
              />
            ),
          )}
        </div>
        <div className="quest-pagination-wrapper">
          <Pagination
            pageSize={16}
            totalLength={questList?.data.totalCount ?? 0}
            currentPage={page}
            onDispatch={setPage}
          />
          &nbsp;
        </div>
      </section>
    </div>
  );
};

export default QuestList;
