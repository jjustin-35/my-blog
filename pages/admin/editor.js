import { useState } from 'react';
import Head from '../../components/head';
import Header from '../../components/header';
import TextEditor from '../../components/textEditor';
import Footer from '../../components/footer';

const Editor = () => {
  const [markdown, setMarkdown] = useState(null);

  const changeHandler = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <>
      <Head />
      <Header />
      <TextEditor markdown={markdown} onChange={changeHandler} />
      <Footer />
    </>
  );
};

export default Editor;
