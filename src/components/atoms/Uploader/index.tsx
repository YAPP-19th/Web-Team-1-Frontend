import React, { useState, useRef, useCallback } from 'react';
import { Text } from '@src/components/atoms';
import './style.scss';

const Uploader: React.FC = () => {
  const [previewImage, setPreviewImage] = useState('');
  const [loadImage, setLoadImage] = useState(false);
  const imgInput = useRef<HTMLInputElement>(null);

  const handleImageChange = useCallback((e) => {
    setLoadImage(true);
    /* 현재 미리보기 형식만 지원합니다.
    redux 연결 후 formData 형식으로 서버에 올려야합니다. */
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setLoadImage(false);
  }, []);

  const handleImageClick = useCallback(
    (e) => {
      e.preventDefault();
      imgInput.current?.click();
    },
    [imgInput],
  );

  return (
    <div className="uploader-wrapper">
      {loadImage ? (
        <div>loading...</div>
      ) : (
        <div
          className="preview"
          role="button"
          tabIndex={0}
          onClick={handleImageClick}
          onKeyDown={handleImageClick}
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
