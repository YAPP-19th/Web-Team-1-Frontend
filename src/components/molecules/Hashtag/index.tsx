import React, { useState, useCallback } from 'react';
import { Input, Button } from '@src/components/atoms';
import './style.scss';

export interface HashtagProps {
  onDispatch: (value: string[]) => void;
}

const Hashtag: React.FC<HashtagProps> = ({ onDispatch }) => {
  const [hashtag, setHashtag] = useState<string[]>([]);

  const handleSubmit = useCallback(
    (newTag) => {
      if (newTag) {
        const newHashtag = new Set([...hashtag, newTag]);
        onDispatch([...newHashtag]);
        setHashtag([...newHashtag]);
      }
    },
    [hashtag, onDispatch],
  );

  const handleDelete = useCallback(
    (tag) => {
      const index = hashtag.indexOf(tag);
      const restHashtag = [...hashtag];
      restHashtag.splice(index, 1);

      onDispatch(restHashtag);
      setHashtag(restHashtag);
    },
    [hashtag, onDispatch],
  );

  return (
    <div className="_HASHTAG_">
      <Input
        hasCount
        count={10}
        inputHeight="wide"
        placeholder="해시 태그를 입력하세요"
        onSubmit={handleSubmit}
      />
      <div className="hashtag_container">
        {hashtag.map((hashtag) => (
          <Button
            key={hashtag}
            innerText={`#${hashtag}`}
            buttonColor="main-gray"
            textColor="dark-gray"
            textSize="small"
            handleClick={() => handleDelete(hashtag)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hashtag;
