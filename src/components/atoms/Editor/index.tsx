import React, { useState, useMemo, useCallback } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize';
import 'react-quill/dist/quill.snow.css';

// 이미지 크기 재조절 모듈
Quill.register('modules/ImageResize', ImageResize);

export interface EditorProps {
  height: number;
  onDispatch: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ height, onDispatch }) => {
  const [contents, setContents] = useState('');
  const imageHandler = useCallback(() => {
    console.log('서버에 이미지 url로 저장');
  }, []);

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
          // image: imageHandler, 서버와 어떻게 이미지를 전달할지 회의 후 추가해야합니다.
        },
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
      },
    }),
    [],
  );

  return (
    <ReactQuill
      style={{ height: `${height}rem` }}
      theme="snow"
      modules={modules}
      value={contents}
      onChange={handleChange}
    />
  );
};

export default Editor;
