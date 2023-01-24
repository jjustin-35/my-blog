import { useCallback, useState } from 'react';
import TextEditor from '../../components/textEditor';

const TextEditorContainer = () => {
  const [markdown, setMarkdown] = useState(null);

  const changeHandler = useCallback((value) => {
    setMarkdown(value);
  }, []);

  return <TextEditor markdown={markdown} onChange={changeHandler} />;
};

export default TextEditorContainer;
