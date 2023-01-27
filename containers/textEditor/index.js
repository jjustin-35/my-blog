import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { noteActions } from '../../redux/slices/noteSlice';
import TextEditor from '../../components/textEditor';
import Note from '../../constants/schema/note';
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
      const lines = markdown.split('\n');
      const firstline = lines.find((line) => /# /.test(line));
      const title = firstline?.replace('# ', '');
      const desc = lines.filter((line) => line !== firstline).find((line) => !!line);
      const tagString = lines.filter((line) => /######tag:/.test(line))[0];
      const tag = tagString?.replace('######tag:', '').replace(' ', '').split(',');
      setMeta({
        title,
        desc,
        tag,
      });
    }
  }, [markdown]);

  const clickHandler = () => {
    if (meta && markdown) {
      const note = new Note({
        ...meta,
        content: markdown,
        author: 'justin',
      });
      dispatch(noteActions.postNote({ ...note }));
    }
  };

  return <TextEditor markdown={markdown} onChange={changeHandler} data={data} onClick={clickHandler} />;
};

export default TextEditorContainer;
