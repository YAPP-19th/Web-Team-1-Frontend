import React, { useState } from 'react';
import { Input, Text } from '@src/components/atoms';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { RoadmapQuestListType } from '@src/slices/createRoadmapSlice';
import { ListType } from '@src/slices/createQuestSlice';
import './style.scss';

export type DragDropListType = (ListType | RoadmapQuestListType)[];

export interface DragDropProps {
  hasInput: boolean;
  list: DragDropListType;
  onDispatch: (value: DragDropListType) => void;
}

const DragDrop: React.FC<DragDropProps> = ({ hasInput, list, onDispatch }) => {
  const [dragDropId, setdragDropId] = useState(0);

  const handleSubmit = (value: string | number) => {
    if (value) {
      onDispatch([
        ...list,
        {
          id: dragDropId,
          name: value as string,
        },
      ]);
      setdragDropId(dragDropId + 1);
    }
  };

  const handleChange = (result: DropResult) => {
    // 아이템이 가진 인덱스를 계산해서 새로운 배열을 생성합니다.
    if (!result.destination) return;
    const newList = [...list];
    const [temp] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, temp);

    onDispatch(newList);
  };

  const handleDelete = (index: number) => {
    const restList = [...list];
    restList.splice(index, 1);

    onDispatch(restList);
  };

  return (
    <section className="_DRAGDROP_">
      {hasInput && <Input hasCount count={30} onSubmit={handleSubmit} />}
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul
              className="list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {list.map(({ id, name }, index) => (
                <Draggable key={id} draggableId={id.toString()} index={index}>
                  {(provided) => (
                    <div
                      className="item-wrapper"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <li className="item">
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
