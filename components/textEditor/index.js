import { Wrapper, EditBoard, ResultBoard, Textarea } from './styled';
import Markdown from '../markdown';

const TextEditor = ({ markdown, onChange }) => (
  <Wrapper>
    <EditBoard>
      <Textarea onChange={onChange} />
    </EditBoard>
    <ResultBoard>
      <Markdown children={markdown} />
    </ResultBoard>
  </Wrapper>
);

export default TextEditor;
