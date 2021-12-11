import React from 'react';
import { Text, Board, List, Uploader } from '@src/components/atoms';
import { Hashtag } from '@src/components/molecules';
import {
  questThumbnail,
  questHashtag,
} from '@src/pages/QuestCreate/quest_data.json';

const QuestDetail: React.FC = () => {
  return (
    <Board height={46.5}>
      <article className="quest-thumbnail">
        <Text fontWeight="bold" fontSize="large">
          {questThumbnail.main}
        </Text>
        <List listData={questThumbnail.list} />

        <div className="contents">
          <Uploader />
        </div>
      </article>

      <article className="quest-hashtag">
        <Text fontWeight="bold" fontSize="large">
          {questHashtag.main}
        </Text>
        <List listData={questHashtag.list} />

        <div className="contents">
          <Hashtag />
        </div>
      </article>
    </Board>
  );
};

export default QuestDetail;
