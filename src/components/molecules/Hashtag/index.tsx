import React, { useState, useCallback } from 'react';
import { Input, Button } from '@src/components/atoms';
import './style.scss';

const Hashtag: React.FC = () => {
  const [hashtags, setHashtags] = useState<string[]>([
    '임시',
    '해시태그',
    '입니다',
  ]);

  const onSubmit = useCallback(
    (value) => {
      setHashtags([...hashtags, value]);
    },
    [hashtags],
  );

  return (
    <div className="_HASHTAG_">
      <Input
        hasCount
        inputHeight="wide"
        placeholder="해시 태그를 입력하세요"
        onSubmit={onSubmit}
      />
      <div className="hashtag_container">
        {hashtags.map((hashtag) => (
          <Button
            key={hashtag}
            innerText={`#${hashtag}`}
            buttonColor="main-gray"
            textColor="dark-gray"
            textSize="small"
          />
        ))}
      </div>
    </div>
  );
};

export default Hashtag;
