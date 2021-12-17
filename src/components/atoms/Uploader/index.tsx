import React, { useState, useRef, useCallback } from 'react';
import { Text } from '@src/components/atoms';
import './style.scss';

const Uploader: React.FC = () => {
  const [previewImage, setPreviewImage] = useState('');
  const [loadImage, setLoadImage] = useState(false);
  const imgInput = useRef<HTMLInputElement>(null);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoadImage(true);
      /* 현재 미리보기 형식만 지원합니다.
      redux 연결 후 formData 형식으로 서버에 올려야합니다. */
      setPreviewImage(URL.createObjectURL((e.target.files as FileList)[0]));
      setLoadImage(false);
    },
    [],
  );

  const handleImageClick = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    ) => {
      e.preventDefault();
      imgInput.current?.click();
    },
    [imgInput],
  );

  return (
    <div className="_UPLOADER_">
      {loadImage ? (
        <div>loading...</div>
      ) : (
        <div
          className="preview"
          role="button"
          onClick={handleImageClick}
          aria-hidden="true"
        >
          {previewImage ? (
            <img alt="preview" src={previewImage} />
          ) : (
            <Text>이미지 업로드</Text>
          )}
        </div>
      )}
      <input
        className="uploader"
        type="file"
        accept="image/*"
        ref={imgInput}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default Uploader;
