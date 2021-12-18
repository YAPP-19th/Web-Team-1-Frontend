import React, { useState, useRef, useCallback } from 'react';
import { Text } from '@src/components/atoms';
import './style.scss';

export interface UploaderProps {
  onDispatch: (value: FormData) => void;
}

const Uploader: React.FC<UploaderProps> = ({ onDispatch }) => {
  const [previewImage, setPreviewImage] = useState('');
  const [loadImage, setLoadImage] = useState(false);
  const imgInput = useRef<HTMLInputElement>(null);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoadImage(true);

      const formData = new FormData();
      const image = (e.target.files as FileList)[0];
      formData.append('file', image); // formData 형식으로 저장

      onDispatch(formData);
      setPreviewImage(URL.createObjectURL(image));

      setLoadImage(false);
    },
    [onDispatch],
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
