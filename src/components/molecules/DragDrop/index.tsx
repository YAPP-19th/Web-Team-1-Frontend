import React, { useState, useCallback } from 'react';
import { Input, Text } from '@src/components/atoms';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import './style.scss';

export interface DragDropListType {
  id: string;
  name: string;
}

export interface DragDropProps {
  onDispatch: (value: DragDropListType[]) => void;
}

const DragDrop: React.FC<DragDropProps> = ({ onDispatch }) => {
  const [list, setlist] = useState<DragDropListType[]>([]);

  const handleSubmit = useCallback(
    (value: string | number) => {
      if (value) {
        const newList = {
          id: (list.length + 1).toString(),
          name: value as string,
        };

        onDispatch([...list, newList]);
        setlist([...list, newList]);
      }
    },
    [list, onDispatch],
  );

  const handleChange = useCallback(
    (result: DropResult) => {
      // 아이템이 가진 인덱스를 계산해서 새로운 배열을 생성합니다.
      if (!result.destination) return;
      const newList = [...list];
      const [temp] = newList.splice(result.source.index, 1);
      newList.splice(result.destination.index, 0, temp);

      onDispatch(newList);
      setlist(newList);
    },
    [list, onDispatch],
  );

  const handleDelete = useCallback(
    (index: number) => {
      const restList = [...list];
      restList.splice(index, 1);

      onDispatch(restList);
      setlist(restList);
    },
    [list, onDispatch],
  );

  return (
    <section className="_DRAGDROP_">
      <Input hasCount={false} onSubmit={handleSubmit} />
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul
              className="list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {list.map(({ id, name }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
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
