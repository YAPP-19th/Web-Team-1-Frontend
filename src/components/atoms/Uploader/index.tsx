import React, { useRef, useCallback } from 'react';
import { Text, Loading } from '@src/components/atoms';
import { usePostUploadMutation } from '@src/services/giljob';
import './style.scss';

export interface UploaderProps {
  onDispatch: (url: string) => void;
}

const Uploader: React.FC<UploaderProps> = ({ onDispatch }) => {
  const [upload, { data, isLoading }] = usePostUploadMutation();
  const imgInput = useRef<HTMLInputElement>(null);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const formData = new FormData();
      const image = (e.target.files as FileList)[0];
      formData.append('file', image);

      upload(formData)
        .unwrap()
        .then(({ data }) => {
          onDispatch(data.fileUrl);
        });
    },
    [upload, onDispatch],
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
      {isLoading && <Loading />}
      <div
        role="button"
        onClick={handleImageClick}
        aria-hidden="true"
        className="uploader-wrapper"
      >
        {data?.data.fileUrl ? (
          <img alt="preview" src={data.data.fileUrl} />
        ) : (
          <div className="preview">
            <Text>이미지 업로드</Text>
          </div>
        )}
      </div>
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
