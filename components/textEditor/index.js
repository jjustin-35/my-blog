import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

import { Wrapper, BoardWrapper, EditBoard, ResultBoard } from './styled';
import Markdown from '../markdown';
import Button from '../button';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

const TextEditor = ({ data, onClick, markdown, onChange }) => {
  const options = useMemo(
    () => ({
      sideBySideFullscreen: false,
      previewClass: 'editor-preview',
      lineNumbers: true,
      minHeight: '100vh',
    }),
    [],
  );
  return (
    <Wrapper>
      <BoardWrapper>
        <EditBoard>
          <SimpleMDE value={markdown} onChange={onChange} options={options} />
        </EditBoard>
        <ResultBoard>
          <Markdown>{markdown}</Markdown>
        </ResultBoard>
      </BoardWrapper>
      <Button data={data.button} onClick={onClick} />
    </Wrapper>
  );
};

export default TextEditor;
