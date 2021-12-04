import React, { useState, useCallback } from 'react';
import { Input, Text } from '@src/components/atoms';
import './style.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/* 추후 redux 연결시 데이터 연결 구조를 바꿔야 합니다.
재는 로컬 state를 사용했습니다. */

const DragDrop: React.FC = () => {
  const [subquests, setSubQuest] = useState([
    { id: '1', name: '프론트엔드 공부하기' },
    { id: '2', name: '백엔드 공부하기' },
    { id: '3', name: '디자인 공부하기' },
  ]);

  const handleChange = useCallback(
    (result: any) => {
      // 아이템이 가진 인덱스를 계산해서 새로운 배열을 생성합니다.
      if (!result.destination) return;
      const newSubquests = [...subquests];
      const [temp] = newSubquests.splice(result.source.index, 1);
      newSubquests.splice(result.destination.index, 0, temp);

      setSubQuest(newSubquests);
    },
    [subquests],
  );

  const handleSubmit = useCallback(
    (value: string | number) => {
      const newSubQuest = {
        id: (subquests.length + 1).toString(),
        name: value as string,
      };
      setSubQuest([...subquests, newSubQuest]);
    },
    [subquests],
  );

  const handleDelete = useCallback(
    (index) => {
      const restSubquests = [...subquests];
      restSubquests.splice(index, 1);
      setSubQuest(restSubquests);
    },
    [subquests],
  );

  return (
    <section className="_DRAGDROP_">
      <Input hasCount={false} onSubmit={handleSubmit} />
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="subquest">
          {(provided) => (
            <ul
              className="subquest-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {subquests.map(({ id, name }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      className="subquest-wrapper"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <li className="subquest">
                        <input type="checkbox" disabled />
                        <Text>{name}</Text>
                      </li>
                      <button
                        className="delete-button"
                        type="button"
                        onClick={() => handleDelete(index)}
                      >
                        <span className="line" />
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default DragDrop;
