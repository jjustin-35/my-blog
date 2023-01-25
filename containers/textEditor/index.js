import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { noteActions } from '../../redux/slices/noteSlice';
import TextEditor from '../../components/textEditor';
import data from './data';

const TextEditorContainer = () => {
  const [markdown, setMarkdown] = useState(null);
  const [meta, setMeta] = useState(null);
  const dispatch = useDispatch();

  const changeHandler = useCallback((value) => {
    setMarkdown(value);
  }, []);

  useEffect(() => {
    if (markdown) {
      const firstline = markdown.split('\n')[0];
      const title = /# /.test(firstline) && firstline.replace('# ', '');
      const desc = markdown.split('\n')[1];
      setMeta({
        title,
        desc,
        time: Date.now(),
      });
    }
  }, [markdown]);

  const clickHandler = () => {
    if (meta && markdown) {
      dispatch(
        noteActions.postNote({
          ...meta,
          content: markdown,
        }),
      );
    }
  };

  return <TextEditor markdown={markdown} onChange={changeHandler} data={data} onClick={clickHandler} />;
};

export default TextEditorContainer;
