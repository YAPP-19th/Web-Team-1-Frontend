import React, { useState, useRef, useMemo, useCallback } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize';
import { usePostUploadMutation } from '@src/services/giljob';
import 'react-quill/dist/quill.snow.css';
import { Loading } from '..';

// 이미지 크기 재조절 모듈
Quill.register('modules/ImageResize', ImageResize);

export interface EditorProps {
  height: number;
  onDispatch: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ height, onDispatch }) => {
  const quillRef = useRef<ReactQuill>(null);
  const [postImage, { isLoading }] = usePostUploadMutation();
  const [contents, setContents] = useState('');

  const handleImage = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', () => {
      const image = (input.files as FileList)[0];
      const formData = new FormData();
      formData.append('file', image);

      postImage(formData)
        .unwrap()
        .then(({ data }) => {
          const ImageUrl = data.fileUrl;
          const quill = quillRef.current?.getEditor() as Quill; // 에디터 객체 가져오기
          const range = quill.getSelection()?.index; // 현재 에디터 커서 위치
          if (range !== null && range !== undefined) {
            quill.insertEmbed(range, 'image', ImageUrl); // 에디터 커서에 이미지 삽입
          }

          onDispatch(ImageUrl);
        });
    });
  }, [postImage, onDispatch]);

  const handleChange = useCallback(
    (value: string) => {
      setContents(value);
      onDispatch(value);
    },
    [onDispatch],
  );

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { align: [] },
          ],
          ['image', 'video'],
        ],
        handlers: {
          image: handleImage,
        },
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
      },
    }),
    [handleImage],
  );

  return (
    <>
      {isLoading && <Loading />}
      <ReactQuill
        style={{ height: `${height}rem` }}
        theme="snow"
        modules={modules}
        value={contents}
        ref={quillRef}
        onChange={handleChange}
      />
    </>
  );
};

export default Editor;
