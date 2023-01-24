import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

import { Wrapper } from './styled';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

const TextEditor = ({ markdown, onChange }) => (
  <Wrapper>
    <SimpleMDE
      value={markdown}
      onChange={onChange}
    />
  </Wrapper>
);

export default TextEditor;
