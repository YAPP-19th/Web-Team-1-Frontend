import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, Board, List, Uploader } from '@src/components/atoms';
import { Hashtag } from '@src/components/molecules';
import { setThumbnail, setTag } from '@src/slices/createQuestSlice';
import {
  questThumbnail,
  questHashtag,
} from '@src/pages/CreateQuest/quest_data.json';

const Detail: React.FC = () => {
  const dispatch = useDispatch();
  const handleThumbnail = useCallback(
    (value: FormData) => {
      dispatch(setThumbnail(value));
    },
    [dispatch],
  );

  const handleDropdown = useCallback(
    (value: string[]) => {
      dispatch(setTag(value));
    },
    [dispatch],
  );

  return (
    <Board height={53}>
      <article className="quest-thumbnail">
        <Text fontWeight="bold" fontSize="large">
          {questThumbnail.main}
        </Text>
        <List listData={questThumbnail.list} />

        <div className="contents">
          <Uploader onDispatch={handleThumbnail} />
        </div>
      </article>

      <article className="quest-hashtag">
        <Text fontWeight="bold" fontSize="large">
          {questHashtag.main}
        </Text>
        <List listData={questHashtag.list} />

        <div className="contents">
          <Hashtag onDispatch={handleDropdown} />
        </div>
      </article>
    </Board>
  );
};

export default Detail;
